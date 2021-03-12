package org.vnsny.ref.dao;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Timestamp;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.sql.DataSource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BatchPreparedStatementSetter;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.PreparedStatementSetter;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.simple.SimpleJdbcInsert;
import org.springframework.stereotype.Component;

@Component
public class AvailabilityToolDao {
	private Logger log = LoggerFactory.getLogger(AvailabilityToolDao.class);
	
	private JdbcTemplate jdbc;	
	private SimpleJdbcInsert teamInsert;
	private SimpleJdbcInsert changeInsert;
	
	private static final String TeamMappingSql = 
			"SELECT A.AT_team_id as ID, H.ctm_id, H.ctm_censustract as census, H.team_id, H.team_name, H.ctm_caretypeid as care_id, \r\n"
			+ "       H.program, H.ctm_zip5code as zip5, H.ctm_county as county, H.ctm_active as is_active, A.ctm_active, H.create_ts\r\n"
			+ "FROM \r\n"
			+ "(select m.ctm_id, m.ctm_censustract, m.ctm_teamid as team_id, t.team_name,  m.ctm_caretypeid, p.ctype_description as program,\r\n"
			+ "     m.ctm_zip5code,   m.ctm_county, m.ctm_active, t.team_insertdate as create_ts\r\n"
			+ "from HCHB.dbo.CENSUSTRACT_TEAM_MAPPING m\r\n"
			+ "JOIN HCHB.dbo.CARE_TYPES p ON m.ctm_caretypeid = p.ctype_id\r\n"
			+ "JOIN HCHB.dbo.TEAMS t ON m.ctm_teamid = t.team_id\r\n"
			+ ") as H\r\n"
			+ "FULL JOIN CHHA.dbo.AT_Teams A ON H.ctm_id = A.ctm_id\r\n"
			+ "WHERE A.ctm_id is null \r\n"
			+ "OR (H.ctm_id is null AND A.record_status <> 'D') "
			+ "OR (A.ctm_id is not null AND H.ctm_id is not null AND H.ctm_active <> A.ctm_active)";
	
	private static final String BranchTeamSql = "SELECT A.AT_branch_team_id as ID, H.branch_code, H.branch_name, H.team_id, H.team_name, H.create_ts\r\n"
			+ "FROM\r\n"
			+ "(SELECT b.branch_code, b.branch_name, t.team_id, t.team_name, bt.bteam_insertdate as create_ts\r\n"
			+ "FROM HCHB.dbo.BRANCH_TEAMS bt \r\n"
			+ "JOIN HCHB.dbo.TEAMS t on bt.bteam_teamid = t.team_id\r\n"
			+ "JOIN HCHB.dbo.BRANCHES b on bt.bteam_branchcode = b.branch_code\r\n"
			+ ") AS H\r\n"
			+ "FULL JOIN CHHA.dbo.AT_Branch_Teams A ON H.branch_code = A.branch_code And H.team_id = A.team_id\r\n"
			+ "WHERE A.branch_code is null \r\n"
			+ "OR (H.branch_code is null AND A.record_status <> 'D')";
	
	@Autowired
    public void setDataSource(DataSource dataSource) {
		this.jdbc = new JdbcTemplate(dataSource);
		this.teamInsert = new SimpleJdbcInsert(dataSource)
				.withCatalogName("CHHA").withSchemaName("dbo")
				.withTableName("AT_Teams")
				.usingColumns("ctm_id","census_tract","team_id","team_name","care_type_id","program","zip5code","county","ctm_active","create_ts")
				.usingGeneratedKeyColumns("AT_team_id");	
		
		this.changeInsert = new SimpleJdbcInsert(dataSource)
				.withCatalogName("CHHA").withSchemaName("dbo")
				.withTableName("AT_Change_History")
				.usingColumns("at_table","at_column","old_val","new_val","description");
    }
	
	public void synTeamMapping() {
		// search for the new/deleted records in AT_Teams table
		List<TeamMaping> list = jdbc.query(TeamMappingSql, new RowMapper<TeamMaping>() {
			@Override
			public TeamMaping mapRow(ResultSet rs, int rowNum) throws SQLException {
				TeamMaping m = new TeamMaping();
				m.pk = rs.getInt("ID");
				m.ctmId = rs.getInt("ctm_id");
				m.censusTract = rs.getString("census");
				m.teamId = rs.getInt("team_id");
				m.teamName = rs.getString("team_name");
				m.careTypeId = rs.getInt("care_id");
				m.program = rs.getString("program");
				m.zip5code = rs.getString("zip5");
				m.county = rs.getString("county");
				m.ctmActive = rs.getString("is_active");
				m.ctmActiveOld = rs.getString("ctm_active");
				m.createTs = rs.getTimestamp("create_ts");
				
				return m;
			}			
		});
		
		for (TeamMaping m : list) {
			if (m.pk == 0) { //new record
				m.recordStatus = " ";
				insertMapping(m);
				HistoryChange ch = new HistoryChange("AT_Teams", "ctm_id", "N/A", m.ctmId+"", "New record");
				insertHistoryChange(ch);				
			} else if (m.ctmId == 0){ // records deleted from HCHB but still remained in VNS 
				// update the AT_Teams record_statsus to "D"
				m.recordStatus = "D";
				updateMappingStatus(m);
				HistoryChange ch = new HistoryChange("AT_Teams", "AT_team_id", "N/A", m.pk + "", "Deleted record, PK[" + m.pk + "]");
				insertHistoryChange(ch);				
			} else {
				m.recordStatus = "C";	
				updateMappingStatus(m);
				HistoryChange ch = new HistoryChange("AT_Teams", "ctm_active", m.ctmActiveOld, m.ctmActive, "Changed record, PK[" + m.pk + "]");
				insertHistoryChange(ch);
			}
		}
	}
	
//	public void synTeamMapping() {
//		// search for the new/deleted records in AT_Teams table
//		List<TeamMaping> list = jdbc.query(TeamMappingSql, new RowMapper<TeamMaping>() {
//			@Override
//			public TeamMaping mapRow(ResultSet rs, int rowNum) throws SQLException {
//				TeamMaping m = new TeamMaping();
//				int id = rs.getInt("ID");
//				if (rs.wasNull()) { //new mapping from HCHB
//					m.ctmId = rs.getInt("ctm_id");
//					m.censusTract = rs.getString("census");
//					m.teamId = rs.getInt("team_id");
//					m.teamName = rs.getString("team_name");
//					m.careTypeId = rs.getInt("care_id");
//					m.program = rs.getString("program");
//					m.zip5code = rs.getString("zip5");
//					m.county = rs.getString("county");
//					m.ctmActive = rs.getString("is_active");
//					m.createTs = rs.getTimestamp("create_ts");
//					m.recordStatus = " ";
//				} else { // records deleted from HCHB but still remained in VNS 
//					// update the AT_Teams record_statsus to "D"
//					m.pk = id;
//					m.recordStatus = "D";
//				}
//				
//				return m;
//			}
//			
//		});
//		
//		for (TeamMaping t : list) {
//			if (t.pk > 0) {
//				updateMappingStatus(t);
//				//public HistoryChange(String tableName, String column, String old_val, String new_val, String description) {
//				HistoryChange ch = new HistoryChange("AT_Teams", "AT_team_id", "N/A", t.pk + "", "Deleted in HCHB");
//				insertHistoryChange(ch);
//			} else {
//				insertMapping(t);
//				HistoryChange ch = new HistoryChange("AT_Teams", "ctm_id", "N/A", t.ctmId+"", "New record loaded from HCHB");
//				insertHistoryChange(ch);
//			}
//		}
//	}
	
	public void synBranchTeams() {
		// search for the new/deleted records in AT_BRANCH_TEAMS table
		List<BranchTeam> list = jdbc.query(BranchTeamSql, new RowMapper<BranchTeam>() {
			@Override
			public BranchTeam mapRow(ResultSet rs, int rowNum) throws SQLException {
				BranchTeam m = new BranchTeam();
				int id = rs.getInt("ID");
				if (rs.wasNull()) { //new mapping from HCHB
					m.branchCode = rs.getString("branch_code");
					m.branchName = rs.getString("branch_name");
					m.teamId = rs.getInt("team_id");
					m.teamName = rs.getString("team_name");
					m.createTs = rs.getTimestamp("create_ts");
				} else { // records deleted from HCHB but still remained in VNS 
					// update the AT_Teams record_statsus to "D"
					m.pk = id;
					m.recordStatus = "D";
				}				
				return m;
			}			
		}); 
		
		for (BranchTeam b : list) {
			if (b.pk > 0) {
				updateBranchTeamStatus(b);
				HistoryChange ch = new HistoryChange("AT_Branch_Teams", "AT_branch_team_id", "N/A", b.pk + "", "Deleted in HCHB");
				insertHistoryChange(ch);
			} else {
				insertBranchTeam(b);		
				HistoryChange ch = new HistoryChange("AT_Branch_Teams", "branch_code", "N/A", b.branchCode, "New record loaded from HCHB");
				insertHistoryChange(ch);
			}
		}
	}
	
	private void updateMappingStatus(TeamMaping t) {
		log.info("AT_teams record(" + t.pk+ ") status is updated to " + t.recordStatus);
		String sql = "UPDATE CHHA.dbo.AT_Teams SET record_status = ?, ctm_active = ? WHERE AT_team_id = ?";
		int uCount = jdbc.update(sql, t.recordStatus, t.ctmActive, t.pk);
		if (uCount != 1) {
			log.error("update failed");
		}
	}
	
	private void updateBranchTeamStatus(BranchTeam t) {
		log.info("AT_Branch_Teams record(" + t.pk + ") has been removed in HCHB");
		String sql = "UPDATE CHHA.dbo.AT_BRANCH_TEAMS SET record_status = ? WHERE AT_branch_team_id = ?";
		int uCount = jdbc.update(sql, t.recordStatus, t.pk);
		if (uCount != 1) {
			log.error("update failed");
		}
	}
	
	private void insertMapping(TeamMaping t) {
		log.info("Insert new HCHB team_mapping, ctm_team_id(" + t.ctmId + ") to AT_Teams table");
		
		Map<String, Object> params = new HashMap<>();
		 
		params.put("ctm_id", t.ctmId); 
		params.put("census_tract", t.censusTract);
		params.put("team_id", t.teamId);
		params.put("team_name", t.teamName);
		params.put("care_type_id", t.careTypeId);
		params.put("program", t.program);
		params.put("zip5code", t.zip5code);
		params.put("county", t.county);
		params.put("ctm_active", t.ctmActive);
		params.put("create_ts", t.createTs);
		
		log.debug(params.toString());
		Number newPk = teamInsert.executeAndReturnKey(params);
		
		if (newPk != null) {
		    if (t.ctmActive.equalsIgnoreCase("Y") && isChhaCareType(t.careTypeId)) {
		    	log.debug("To create new Staff availability for team mapping, PK[" + newPk.intValue()+"]");
		    	String[] discplines = new String[] {"RN","PT", "OT", "SW", "SLP", "PD"};
		    	jdbc.batchUpdate(
	                "INSERT INTO CHHA.dbo.AT_Staff_Availability (team_id, discpline) VALUES(?,?)",
	                new BatchPreparedStatementSetter() {
	                    public void setValues(PreparedStatement ps, int i) throws SQLException {
	                        ps.setInt(1, newPk.intValue());
	                        ps.setString(2, discplines[i]);
	                    }

	                    public int getBatchSize() {
	                        return 6;
	                    }
	                });
		    }
		}
	}
	
	void insertBranchTeam(BranchTeam t) {
	log.info("Insert new HCHB Branch_Teams, branch_code(" + t.branchCode + ") team_id(" + t.teamId + ") to AT_Branch_Teams table");
	String sql = "INSERT INTO AT_Branch_Teams (branch_code, branch_name , team_id , team_name , create_ts)\r\n"
			+ "VALUES (?, ?, ?, ?, ?)";
	
	jdbc.update(sql, new PreparedStatementSetter() {
		@Override
		public void setValues(PreparedStatement ps) throws SQLException {
			ps.setString(1, t.branchCode);  
	        ps.setString(2, t.branchName);
	        ps.setInt(3, t.teamId);
	        ps.setString(4, t.teamName);
	        ps.setTimestamp(5, t.createTs);
		}			
	});
}
	
	private boolean isChhaCareType(int careTypeId) {
		// for care_type 'RN','PT', 'OT', 'SW', 'SLP', 'PD'
		int[] careTypes = new int[] {1, 2, 4, 25004, 25026, 25027};
		
		for (int typeId : careTypes) {
			if (typeId == careTypeId)
				return true;
		}
		
		return false;
	}
	
	private void insertHistoryChange(HistoryChange ch) {
		MapSqlParameterSource params = new MapSqlParameterSource();
         params.addValue("at_table", ch.tableName) 
		.addValue("at_column", ch.column)
		.addValue("old_val", ch.old_val)
		.addValue("new_val", ch.new_val)
		.addValue("description", ch.description);
		
        changeInsert.execute(params);
	}
 
	private class TeamMaping {
		private int pk;
		private int ctmId;
		private String censusTract;
		private int teamId;
		private String teamName;
		private int careTypeId;
		private String program;
		private String zip5code;
		private String county;
		private String ctmActive;
		private String ctmActiveOld;
		private Timestamp createTs;
		private String recordStatus;
		

		@Override
		public String toString() {
			return "TeamMaping [ctmId=" + ctmId + ", censusTract=" + censusTract + ", teamId=" + teamId + ", teamName="
					+ teamName + ", careTypeId=" + careTypeId + ", program=" + program + ", zip5code=" + zip5code
					+ ", county=" + county + ", ctmActive=" + ctmActive + ", createTs=" + createTs + ", recordStatus="
					+ recordStatus + "]";
		}
		
	}
	
	private class BranchTeam {
		private int pk;
		private String branchCode;
		private String branchName;
		private int teamId;
		private String teamName;
		private Timestamp createTs;
		private String recordStatus;
	}
	
	private class HistoryChange {
		private String tableName;
		private String column;
		private String old_val;
		private String new_val;
		private String description;
		
		public HistoryChange(String tableName, String column, String old_val, String new_val, String description) {
			super();
			this.tableName = tableName;
			this.column = column;
			this.old_val = old_val;
			this.new_val = new_val;
			this.description = description;
		}		
	}
}

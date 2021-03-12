package org.vnsny.ref.service;

public class ReportFileComparator{

	private String ext;
	private String lowBundary;
	private String upBundary;


	public ReportFileComparator(String ext, String lowBundary, String upBundary) {
		this.ext = ext.toLowerCase().replace(".", "");
		this.lowBundary = lowBundary;
		this.upBundary = upBundary;
	}
	
	
	/**
	 * 
	 * @param fileName, filename with extension, like 2021-02-19.json
	 * @return true if the file/path name meet the compare requirement
	 */
	public boolean isSelected(String fileName) {
		String[] fileNameParts = fileName.split("\\.");
		if (fileNameParts.length <2)
			return false;
		
		if (!this.ext.equalsIgnoreCase(fileNameParts[fileNameParts.length-1])) { // if the last element not same to extension
			return false;
		} else if (this.lowBundary.compareTo(fileNameParts[0]) > 0) {
			return false;
		} else if (this.upBundary.compareTo(fileNameParts[0]) < 0) {
			return false;
		} else {
			return true;
		}		
	}
	

}

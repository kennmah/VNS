<!DOCTYPE html>
<html>
    <head>
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
      <style>
		body{
			font: 14px Arial, sans-serif;
		}
		
		.small {
			font: italic 0.8em Arial, sans-serif;
		}
		
		#rep {
		  font-family: Arial, Helvetica, sans-serif;
		  font-size:1.2em;
		  border-collapse: collapse;
		  width: 90%;
		  margin: 10px 0;
		}

		#rep td, #rep th {
		  border: 1px solid #ddd;
		  padding: 8px;
		}

		#rep tr:nth-child(even){background-color: #f2f2f2;}

		#rep tr:hover {background-color: #ddd;}

		#rep th {
		  padding-top: 10px;
		  padding-bottom: 10px;
		  text-align: left;
		  background-color: #1d8db3;
		  color: white;
		  font-size: 1.2em;
		  
		}
		
		</style>
    </head>
    
    
    
    <body>
        <div style="margin-bottom:1em;clear:both;"><b>${data?size}</b> referral(s) found, see below for details: <div/>      
	  
	  <table id="rep">
		<tr>
			<th>Physician Name</th>
			<th>Physician e-mail</th>
			<th>Patient Name</th>
			<th>Submitted time</th>
		</tr>
	   <#list data as ref>
		<tr>			
			<td>${ref.physician.phy_first_name} ${ref.physician.phy_last_name}</td>			
			<td>${ref.physician.phy_email}</td>			
			<td>${ref.patient.first_name} ${ref.patient.last_name}</td>
			<td>${ref.submissionTime}</td>
			
		</tr>
		<#else>
			<tr>
			 <td colspan="4">No referrals found for this time peroid</td>
			 </tr>
		</#list>
	</table> 

	<p>
	Warmest regards, <br/>
	
	<span style="color:#1e94bc">VNSNY Hospice and Palliative Care</span>
	</p>
	<p>
	  <img src="cid:vnsnyThumbNail" height="77"/>      
	</p>
	<p>     
	    Visiting Nurse Service of New York <br/>
		220 East 42nd Street New York, NY 10017 <br/>
		T: 212-609-1900 <br/>
		F: 212-290-1825 <br/>
		<a href="http://www.vnsny.org">www.vnsny.org</a> <br />
		<div class="small">
		This electronic message is intended to be for the use only of the named recipient, and may contain information from Visiting Nurse Service of New York and/or its affiliates and subsidiaries ("VNSNY") that is confidential or privileged, or protected health information from VNSNY that is confidential under HIPAA. If you are not the intended recipient, you are hereby notified that any disclosure, copying, distribution or use of the contents of this message is strictly prohibited. If you have received this message in error or are not the named recipient, please notify us immediately by contacting the sender at the electronic mail address noted above, and delete and destroy all copies of this message. Thank you.
		</div>
    </p>
      
    </body>
</html>
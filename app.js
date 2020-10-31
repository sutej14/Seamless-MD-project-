var data = {
    "resourceType":"Patient",
    "id":"xcda",
    "text":"status",
    "generated":"div",
    "\n      \n      <p>Henry Levin the 7th</>\n    \n    </div>":"identifier",
    "use":"usual",
    "type":{
       "coding":[
          {
             "system":"htt://hl7.org/fhir/v2/0203",
             "code":"MR"
          }
       ]
    },
    "system":"urn:oid:2.16.840.1.113883.19.5",
    "value":"12345",
    "active":true,
    "name":"Henry Levin",
    "gender":"male",
    "birthDate":"2002-09-24",
    "managingOrganization":{
       "reference":"Organization/2.16.840.1.113883.19.5",
       "display":"University Health Network"
    },
    "conditions":[
       "Diabetes",
       "High blood pressure",
       "Asthma"
    ]
 }; 

 output.innerHTML = "Name of patient:" + " " + data.name + "<br />" + "Organization:" + " " + data.managingOrganization.display + "<br />" + "Gender:" + " " + data.gender + "<br />" + "Number of conditions they have:" + " " + data.conditions.length + "<br />" + "List of all conditions:" + "<br />" + "-" + data.conditions[0] + "<br />" + "-" + data.conditions[1] + "<br />" + "-" + data.conditions[2];






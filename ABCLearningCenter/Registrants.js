
var users = localStorage.getItem("elStrorage3");
$(document).ready(function(){
    users = JSON.parse(users); // Convert String as an Object
    if (users === null) // If there is nothing intialize
        users = [];

    listRegistrants();
});

function listRegistrants() {
    var users = localStorage.getItem("elStrorage3");
    users = JSON.parse(users); // Convert String as an Object
    if (users === null) // If there is nothing intialize
        users = [];

    $("#tbl-list").html("");
    $("#tbl-list").html(
            "<thead>" +
            "<tr>" +                
            "<th>User Name</th>" +
            "<th>Email</th>" +
            "<th>Contact</th>" +
			"<th>Gender</th>" +
            "<th>Course</th>" +
			"<th>Edit</th>" +
			"<th>Delete</th>" +
            "</tr>" +
            "</thead>" +
            "<tbody>" +
            "</tbody>"
            ); 
			
			
			for (var user in users) {
				var registrant = JSON.parse(users[user]);	 

				$("#tbl-list tbody").append("<tr>" +                    
						"<td>" + registrant.user_name + "</td>" +
						"<td>" + registrant.email + "</td>" +
						"<td>" + registrant.contact + "</td>" + 
						"<td>" + registrant.gender + "</td>" +
                        "<td>" + registrant.course + "</td>" + 
						"<td>" + "<button>Edit</button>" + "</td>" +
						"<td>" + "<button onClick='deleteData()'>Delete</button>" + "</td>" +
                        "</tr>"
                );
    } 
  }


//----------------delete Clear---------------------------------


function deleteData() {
	// var name = document.forms.registrant.name.value;
	localStorage.removeItem("elStrorage3");
	showAll();
	document.forms.registrant.name.value = null;
	document.forms.registrant.email.value = null;
	document.forms.registrant.contact.value = null;
	document.forms.registrant.gender.value = null;
	document.forms.registrant.course.value = null;
}

function clearAll() {
	localStorage.clear();
	showAll();
	document.forms.registrant.name.value = null;
	document.forms.registrant.email.value = null;
	document.forms.registrant.contact.value = null;
	document.forms.registrant.gender.value = null;
	document.forms.registrant.course.value = null;
}


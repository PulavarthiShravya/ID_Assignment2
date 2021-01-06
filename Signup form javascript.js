//Display data from object

function display(){
    var childName = document.getElementById("child name").value;
    var lastName = document.getElementById("last name").value;
    var DOB = document.getElementById("dob").value;
    var email = document.getElementById("email").value; 
    var userID = document.getElementById("userid").value;
    document.getElementById("details").innerHTML = "Here are the details: ";
    document.getElementById("name").innerHTML = "Name of child: " + childName + " " + lastName;
    document.getElementById("ID").innerHTML = "User Id: " + userID;
}


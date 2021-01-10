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

//adding form data into local storage and creating them as objects

let members = []; //array of members

const member = (ev)=>{
    ev.preventDefault();
    let member = { //member object
        //id: Date.now(),
        //childName: document.getElementById("child name").value,
        userID: document.getElementById("userid").value
    }

    members.push(member); //adding object into members array

    document.querySelector('form').reset(); //clear form for next entries

    //saving to local storage
    localStorage.setItem("UserId", JSON.stringify(members) );
}

/*document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('btn').addEventListener('click', addmember);
});*/

function verify() {
    // Check if a value exists in the userid array
    if(members.indexOf("input").value != true){
        location.href = "Location page.html"
    } else{
        alert("Invalid User ID")
    }
}




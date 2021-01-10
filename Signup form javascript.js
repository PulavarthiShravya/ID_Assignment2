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

let userid = [];

const addMember = (ev)=>{
    ev.preventDefault();
    let member = { //member object
        id: Date.now(),
        childName: document.getElementById("child name").value,
        userID: document.getElementById("userid").value
    }


    members.push(member); //adding object into members array
    userid.push(member.userID); //adding userID into userid array

    document.querySelector('form').reset(); //clear form for next entries

    //display purposes
    console.warn('added' , {userid} );
    let pre = document.querySelector('#msg pre');
    pre.textContent = '\n' + JSON.stringify(userid, '\t', 2); 

    //saving to local storage
    localStorage.setItem("MemberDetails", JSON.stringify(members) );
    localStorage.setItem("UserId", JSON.stringify(userid) );
}

/*document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('btn').addEventListener('click', addMember);
});*/

function verify() {
    var IDinput = userid.includes("input").value;

    if (IDinput == true) { //if true
        location.href = "Location page.html";
    }

    else { //false
        document.getElementById("msg").innerHTML = "Invalid user ID";
        document.getElementById("msg1").innerHTML = "Please sign up";
    }
}




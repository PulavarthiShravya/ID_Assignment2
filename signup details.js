function createacc() {
  var name = document.getElementById("child name").value;
  var id = document.getElementById("userid").value;
}


function display() {
    DispWin = window.open('','NewWin', 'toolbar=no,status=no,width=300,height=200');
    var name = document.getElementById("child name").value;
    var id = document.getElementById("userid").value;
    
    DispWin.document.write("Welcome to the club " + name + " Mom!" + " User Id: " + id);

  }
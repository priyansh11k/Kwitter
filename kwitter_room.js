
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyAysYGw9sYGiS_vUmTptJtS716HBfpMlz0",
      authDomain: "kwitter-10034.firebaseapp.com",
      databaseURL: "https://kwitter-10034-default-rtdb.firebaseio.com",
      projectId: "kwitter-10034",
      storageBucket: "kwitter-10034.appspot.com",
      messagingSenderId: "872219474201",
      appId: "1:872219474201:web:5ff30ace94bc56d614ed88"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

       user_name = localStorage.getItem("user_name");
       document.getElementById("welcome_name").innerHTML = "Welcome "+ user_name + " ! ";

    function add_room(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
      });
      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
    }      




function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name -"+Room_names);
row = "<div class='room_name' id="+Room_names+" onclick = 'redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();


function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout(){
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location = "index.html";
}

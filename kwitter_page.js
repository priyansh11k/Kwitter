//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyAysYGw9sYGiS_vUmTptJtS716HBfpMlz0",
      authDomain: "kwitter-10034.firebaseapp.com",
      databaseURL: "https://kwitter-10034-default-rtdb.firebaseio.com",
      projectId: "kwitter-10034",
      storageBucket: "kwitter-10034.appspot.com",
      messagingSenderId: "872219474201",
      appId: "1:872219474201:web:5ff30ace94bc56d614ed88"
    };

    firebase.initializeApp(firebaseConfig);


    user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name1 = message_data['name'];
message = message_data['message'];
like = message_data['like'];
name_with_tag = "<h4>"+name1 + "<img class='user_tick' src='tick.png'></h4> ";
message_with_tag = "<h4 class = 'message_h4'> " + message + "</h4>";
button = "<button class = 'btn btn-warning' id= "+ firebase_message_id + " value="+like+" onclick='update_like(this.id)'>";
button2 = "<span class = 'glyphicon glyphicon-thumbs-up'>Like :"+like +"</span></button><hr>";

row = name_with_tag + message_with_tag + button + button2;
document.getElementById("output").innerHTML += row;
//End code
      } });  }); }
getData();

function send(){
msg = document.getElementById("msg").value;
firebase.database().ref(room_name).push({
name: user_name,
message:msg,
like : 0
});
document.getElementById("msg").value = "";
}

function update_like(message_id)
{
console.log("clicked on like button - " + message_id);
button_id = message_id;
likes = document.getElementById(button_id).value;
updated_likes = Number(likes) + 1;
console.log(updated_likes);

firebase.database().ref(room_name).child(message_id).update({
like : updated_likes
});
}

function logout(){
localStorage.removeItem("room_name");
localStorage.removeItem("user_name");
window.location.replace("index.html");
}


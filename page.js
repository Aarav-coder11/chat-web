var firebaseConfig = {
    apiKey: "AIzaSyBoLAZV-u3OUvnZX89al3rVRUiewAy2BdE",
    authDomain: "chat-app-b8cd4.firebaseapp.com",
    databaseURL: "https://chat-app-b8cd4.firebaseio.com",
    projectId: "chat-app-b8cd4",
    storageBucket: "chat-app-b8cd4.appspot.com",
    messagingSenderId: "539518918684",
    appId: "1:539518918684:web:7c70cad6df1f1e4b66bfd9",
    measurementId: "G-YN196TX4D8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var room = localStorage.getItem("Room Name");
var user_name = localStorage.getItem("username")
function getData() { firebase.database().ref("/"+room).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpuse") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
Name = message_data["name"];
Msg = message_data["Msg"];
Like = message_data["like"];
Show_name = "<h4>"+ Name +"<img src='tick.png' class='user_tick'></h4>";
Show_msg = "<h4 class='message_h4'>"+ Msg +"</h4>";
Show_like = "<button value="+ Like +" class='btn btn-warning' onclick='upd_likes(this.id)' id='"+ firebase_message_id +"'><span class='glyphicon glyphicon-thumbs-up'> Like: "+ Like +"</span></button>";
document.getElementById("output").innerHTML += Show_name + Show_msg + Show_like;
//End code
      } });  }); }
getData();
function send(){
      msg = document.getElementById("message").value;
      firebase.database().ref(room).push({name: user_name, Msg: msg, like: 0});
      document.getElementById("message").value = "";
}
function upd_likes(id){
likes = Number(document.getElementById(id).value);
likes = likes + 1;
firebase.database().ref(room).child(id).update({
      like: likes
});
}
function logout(){
    localStorage.removeItem("Room Name");
    localStorage.removeItem("username");
    window.location = "login.html";
}
function login(){
    if(document.getElementById("username").value != ""){
        localStorage.setItem("username", document.getElementById("username").value);
        window.location = "room.html";
    }
}
function addUser(){
    user_name = document.getElementById("username").value;
    localStorage.setItem("User_Name", user_name);
    window.location = "Room.html";
}
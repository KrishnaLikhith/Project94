var firebaseConfig = {
    apiKey: "AIzaSyDUsDKB3L8iTxLaEtW_-lBe80vyNwBiDA0",
    authDomain: "kwitter-2add8.firebaseapp.com",
    databaseURL: "https://kwitter-2add8-default-rtdb.firebaseio.com",
    projectId: "kwitter-2add8",
    storageBucket: "kwitter-2add8.appspot.com",
    messagingSenderId: "310041197592",
    appId: "1:310041197592:web:d400feaa8b7ceed424576d"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
uname = localStorage.getItem("User_Name");
document.getElementById("username").innerHTML = "<h2>Welcome! " + uname + "</h2>";

function getData() {
    firebase.database().ref("/").on('value', function (snapshot) {
        document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key;
            Room_names = childKey;
            console.log(Room_names);
            row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div><hr> ";
            document.getElementById("output").innerHTML += row;
        });
    });
}
getData();
function Add_room() {
    new_name = document.getElementById("roomname").value;
    console.log("The Room Name is " + new_name);
    firebase.database().ref("/").child(new_name).update({
        purpose: "Adding Room"
    });
    localStorage.setItem("RoomName", new_name);
    window.location = "Page.html";
}
function redirectToRoomName(Namer) {
console.log(Namer);
localStorage.setItem("RoomName",Namer);
window.location = "Page.html";
}
function logout() {
    localStorage.removeItem("User_Name");
    localStorage.removeItem("RoomName");
    window.location.replace("index.html");
    }
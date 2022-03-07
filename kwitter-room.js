// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCi500cSvnxi1XLOfT_s73-UzCWns5hZMU",
    authDomain: "kwitter-5dc6c.firebaseapp.com",
    databaseURL: "https://kwitter-5dc6c-default-rtdb.firebaseio.com",
    projectId: "kwitter-5dc6c",
    storageBucket: "kwitter-5dc6c.appspot.com",
    messagingSenderId: "568316037062",
    appId: "1:568316037062:web:0a8f13ff60c57b89cdd4c7"
  };
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("Username");
    document.getElementById("welcome_user_name").innerHTML = "Welcome "+user_name+"!";

    function addroom() {
           room_name = document.getElementById("room_name").value;

           firebase.database().ref("/").child(room_name).update({
                purpose: "Adding Room Name"
          });
  
          localStorage.setItem("Roomname",room_name);
      
          window.location = "kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
          console.log("room_name - " + Room_names);
          row = "<div class='room_name' id="+Room_names+" onclick='redirectToroomname(this.id)'>#"+Room_names+"</div><hr>";
          document.getElementById("output").innerHTML += row;
    //End code
    });});}
getData();
function redirectToroomname(name){
    console.log(name);
    localStorage.setItem("Roomname",name);
    window.location = "kwitter_page.html";
}
function logout() {
    localStorage.removeItem("Username");
    localStorage.removeItem("Roomname");
    window.location = "index.html";
}
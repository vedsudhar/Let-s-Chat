// Your web app's Firebase configuration











  //take username from local storage using -- localStorage.getItem("user_name")
  localStorage.getItem("user_name")
  var user_name = ;
  document.getElementById("user_name").innerHTML = "Welcome back, " + user_name + "!"
  
  function addRoom(){
  
    var room_name = document.getElementById("room_name").value;

    //add data to the firebase using-- firebase.database().ref("/").child(room_name)
    firebase.database().ref("/").child(room_name);
               .update({
    purpose: "adding user"
    });
    
    localStorage.setItem("room_name",room_name);
    
    window.location = "kwitter_page.html";
  }
  
  function getData() {firebase.database().ref("/").on('value',
  function(snapshot) {document.getElementById("output").innerHTML =
  "";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
  //Start code
  Room_names = childKey;
         console.log("Room Name - "+Room_names);
         row = "<div class='room_name' id="+Room_names+" onclick = 'redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
        document.getElementById("output").innerHTML += row;
  //End code
  });});}
  getData();
  
  function redirectToRoomName(name){
    localStorage.setItem("room_name",name);
    window.location = "room3.html";
  }
  

  
  function logout(){

    //remove username from the local storage- removeItem("user_name")
    localStorage. removeItem("user_name") ;
    localStorage.removeItem("room_name");
  window.location = "index.html";
  }
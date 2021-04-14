var firebaseConfig = {
    apiKey: "AIzaSyBW6wtGykY2zq0nF7-NbiL23BdsglLnYlY",
    authDomain: "lets-chat-web-app-dffd6.firebaseapp.com",
    projectId: "lets-chat-web-app-dffd6",
    storageBucket: "lets-chat-web-app-dffd6.appspot.com",
    messagingSenderId: "946176270517",
    appId: "1:946176270517:web:31625ea8f505e71d08defc",
    measurementId: "G-Y5C1N07M57"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function getData() 
  {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(
    function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   });});}
getData();

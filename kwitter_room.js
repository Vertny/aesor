var firebaseConfig = {
      apiKey: "AIzaSyC0r89r2cRJJ3pIuiXg35KMLjY45m0q1Kw",
      authDomain: "drlupo-64ae4.firebaseapp.com",
      databaseURL: "https://drlupo-64ae4-default-rtdb.firebaseio.com",
      projectId: "drlupo-64ae4",
      storageBucket: "drlupo-64ae4.appspot.com",
      messagingSenderId: "856323432005",
      appId: "1:856323432005:web:d71ebba6f00a6d543d0d2c"
    };
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      });});}
getData();

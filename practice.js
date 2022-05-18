
var firebaseConfig = {
    apiKey: "AIzaSyA99uQ3Tsw2xSMSvRR3raLJ3TtG-cte_bI",
    authDomain: "class-twitter.firebaseapp.com",
    databaseURL: "https://class-twitter-default-rtdb.firebaseio.com",
    projectId: "class-twitter",
    storageBucket: "class-twitter.appspot.com",
    messagingSenderId: "115530754742",
    appId: "1:115530754742:web:2699f3413aaa2bcf3c5417",
    measurementId: "G-FQ3Z0WL75C"
  };

  function addUser()
  {
      user_name = document.getElementById("user_name").value;
      firebaseConfig.database().ref("/").child(user_name).update({
          purpose : "adding user"
      }):
  }
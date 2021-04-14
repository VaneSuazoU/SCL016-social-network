    // Your web app's Firebase configuration
    var firebaseConfig = {
      apiKey: "AIzaSyBGcXjkdypuxhaO5ceXNY2afQ088O2QZSg",
      authDomain: "meme-time-ab4a2.firebaseapp.com",
      projectId: "meme-time-ab4a2",
      storageBucket: "meme-time-ab4a2.appspot.com",
      messagingSenderId: "891907452962",
      appId: "1:891907452962:web:0d354a018bed6c91951a7b"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    $('#acceso').click(function () {
        authGoogle();
    })
    
    function authGoogle() {
    var provider = new firebase.auth.GoogleAuthProvider();
    authentication(provider);
    }
    
    function authentication(provider) {
    firebase.auth()
      .signInWithPopup(provider)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        var credential = result.credential;
    
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // ...
      }).catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
    }
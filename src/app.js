import { personajes } from './lib/views/templatePersonajes.js';

var firebaseConfig = {
  apiKey: "AIzaSyDOoxqpxrm0fytTOYMx1OQ26RHoGEYjLwQ",
  authDomain: "meme-time-e23ce.firebaseapp.com",
  projectId: "meme-time-e23ce",
  storageBucket: "meme-time-e23ce.appspot.com",
  messagingSenderId: "333217439157",
  appId: "1:333217439157:web:6c3a1c3e59ec8a86db0dfc"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);



export function authGoogle() {
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


export const createAccount = () => {
  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;

  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {    
     emailVerification();
      // Signed in
      var user = userCredential.user;
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      // ..
    });
};

/* lo nuevo */
export const signIn = () => {
  let email2 = document.getElementById('email2').value;
  let password2 = document.getElementById('password2').value;

  
  firebase.auth().signInWithEmailAndPassword(email2, password2)
    .then((userCredential) => {
      // Signed in  
      recuperar2();
      var user = userCredential.user;
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
    });
};


export const observador = () => {

  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      // User is signed in.
      console.log('existe usuario activo');
      aparece(user);
      let displayName = user.displayName;
      let email = user.email;
      console.log("***********");
      console.log(user.emailVerified);
      console.log("***********");
      let emailVerified = user.emailVerified;
      let photoURL = user.photoURL;
      let isAnonymous = user.isAnonymous;
      let uid = user.uid;
      let providerData = user.providerData;
    } else {
      // No user is signed in
      console.log('no existe usuario activo');
    }
  });
};

observador();

const aparece = (user) => {
  let contenido = document.getElementById('contenido');
  /*   contenido.appendChild(personajes()); */
  if (user.emailVerified){
  contenido.innerHTML = `
    <h2>Bienvenido ${user.email} </h2>

    <button id="logOut">Cerrar sesión</button>`

  let out = document.getElementById('logOut');
  out.addEventListener('click', () => {
    logOut();
  });
  }
}

const logOut = () => {
  firebase.auth().signOut().then(() => {
    console.log("Saliendo..");
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
    console.log(error);
  });
}

const emailVerification = () => {
var user = firebase.auth().currentUser;

user.sendEmailVerification().then(function() {
  // Email sent.
  console.log('email enviado');
}).catch(function(error) {
  // An error happened.
  console.log(error);
});
}

export const recuperar2 = () => {
  var auth = firebase.auth();
  var emailAddress = document.getElementById('email2').value;
  
  auth.sendPasswordResetEmail(emailAddress).then(function() {
    // Email sent.
  }).catch(function(error) {
    // An error happened.
  });
}
/* Firestore */
// let database = firebase.firestore();

// database.collection("usuarios").get().then((querySnapshot) => {
//     querySnapshot.forEach((doc) => {
//         // doc.data() is never undefined for query doc snapshots
//         console.log(doc.id, " => ", doc.data());
//     });
// });

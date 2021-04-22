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


/* Firestore */
// let database = firebase.firestore();

// database.collection("usuarios").get().then((querySnapshot) => {
//     querySnapshot.forEach((doc) => {
//         // doc.data() is never undefined for query doc snapshots
//         console.log(doc.id, " => ", doc.data());
//     });
// });

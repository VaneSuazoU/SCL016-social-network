const firebaseConfig = {
  apiKey: 'AIzaSyDOoxqpxrm0fytTOYMx1OQ26RHoGEYjLwQ',
  authDomain: 'meme-time-e23ce.firebaseapp.com',
  projectId: 'meme-time-e23ce',
  storageBucket: 'meme-time-e23ce.appspot.com',
  messagingSenderId: '333217439157',
  appId: '1:333217439157:web:6c3a1c3e59ec8a86db0dfc',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const logOut = () => {
  firebase.auth().signOut().then(() => {
    document.querySelector('.error').innerHTML = 'Cierre de sesion exitoso';
    // Sign-out successful.
  }).catch((error) => {
    document.querySelector('.error').innerHTML = error.message;
  });
};

const emailVerification = () => {
  const user = firebase.auth().currentUser;

  user.sendEmailVerification().then(() => {
    // Email sent.
    document.querySelector('.error').innerHTML = 'Tú correo de verificación fue enviado';
  }).catch((error) => {
    document.querySelector('.error').innerHTML = error.message;
  });
};

export const passwordRecovery = () => {
  const auth = firebase.auth();
  const emailAddress = document.querySelector('#email3').value;

  auth.sendPasswordResetEmail(emailAddress).then(() => {
    document.querySelector('.error').innerHTML = 'Tu email fue enviado con exito';
    // Email sent.
  }).catch((error) => {
    // An error happened.
    document.querySelector('.error').innerHTML = error.message;
  });
};

function authentication(provider) {
  firebase.auth()
    .signInWithPopup(provider)
    .then((result) => {
      /** @type {firebase.auth.OAuthCredential} */
      const credential = result.credential;

      // This gives you a Google Access Token. You can use it to access the Google API.
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      document.querySelector('.error').innerHTML = '';
      const database = firebase.firestore();
      return database.collection('user').doc(user.uid).set({
        nombre: user.displayName,
        email: user.email,
      });
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      const credential = error.credential;
      // ...
      document.querySelector('.error').innerHTML = errorCode + errorMessage + email + credential;
    });
}
export function authGoogle() {
  const provider = new firebase.auth.GoogleAuthProvider();
  authentication(provider);
}

export const createAccount = () => {
  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const biograph = document.getElementById('bio').value;

  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((user) => {
      const database = firebase.firestore();
      return database.collection('user').doc(user.uid).set({
        nombre: username,
        email,
        bio: biograph,
      });
      // ...
    })
    .then(() => {
      emailVerification();
      /* const user = userCredential.user; */
    })
    .catch((error) => {
      document.querySelector('.error').innerHTML = error.message;
    });
};

/* lo nuevo */
export const signIn = () => {
  const email2 = document.getElementById('email2').value;
  const password2 = document.getElementById('password2').value;

  firebase.auth().signInWithEmailAndPassword(email2, password2)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      document.querySelector('.error').innerHTML = '';

      // ...
    })
    .catch((error) => {
      document.querySelector('.error').innerHTML = error.message;
    });
};

const aparece = (user) => {
  const contenido = document.getElementById('contenido');
  if (user.emailVerified && contenido) {
    contenido.innerHTML = `
    <h2>Bienvenido ${user.email} </h2>
    
    <button id="logOut">Cerrar sesión</button>`;

    const out = document.getElementById('logOut');
    out.addEventListener('click', () => {
      logOut();
      contenido.style.display = 'none';
    });
  }
};

export const observador = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User is signed in.
      console.log('existe usuario activo');
      aparece(user);
      const displayName = user.displayName;
      const email = user.email;
      console.log('***********');
      console.log(user.emailVerified);
      console.log('***********');
      console.log(user.displayName);
      const emailVerified = user.emailVerified;
      const photoURL = user.photoURL;
      const isAnonymous = user.isAnonymous;
      const uid = user.uid;
      const providerData = user.providerData;
    } else {
      // No user is signed in
      console.log('no existe usuario activo');
    }
  });
};

observador();

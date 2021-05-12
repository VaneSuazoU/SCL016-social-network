export const logOut = () => {
  firebase.auth().signOut().then(() => {
    // Sign-out successful.
  }).catch((error) => {
    document.querySelector('.result').innerHTML = error.message;
  });
};

export const emailVerification = () => {
  const user = firebase.auth().currentUser;

  user.sendEmailVerification().then(() => {
    // Email sent.
    document.querySelector('.result').innerHTML = 'Tú correo de verificación fue enviado';
  }).catch((error) => {
    document.querySelector('.result').innerHTML = error.message;
  });
};

export const passwordRecovery = () => {
  const auth = firebase.auth();
  const emailAddress = document.querySelector('#email3').value;

  auth.sendPasswordResetEmail(emailAddress).then(() => {
    document.querySelector('.result').innerHTML = 'Tu email fue enviado con exito';
    // Email sent.
  }).catch((error) => {
    // An error happened.
    document.querySelector('.result').innerHTML = error.message;
  });
};

function authentication(provider) {
  firebase.auth()
    .signInWithPopup(provider)
    .then((result) => {
      /** @type {firebase.auth.OAuthCredential} */
      /*  const credential = result.credential; */

      // This gives you a Google Access Token. You can use it to access the Google API.
      /*  const token = credential.accessToken; */
      // The signed-in user info.
      const user = result.user;
      document.querySelector('.result').innerHTML = '';
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
      document.querySelector('.result').innerHTML = errorCode + errorMessage + email + credential;
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

  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((user) => {
      const database = firebase.firestore();
      return database.collection('user').doc(user.uid).set({
        nombre: username,
        email,
      });
    })
    .then(() => {
      emailVerification();
      /* const user = userCredential.user; */
    })
    .catch((error) => {
      document.querySelector('.result').innerHTML = error.message;
    });
};

/* lo nuevo */
export const toSignIn = () => {
  const email2 = document.getElementById('email2').value;
  const password2 = document.getElementById('password2').value;

  firebase.auth().signInWithEmailAndPassword(email2, password2)
    .then(() => {
      // Signed in
      /*  const user = userCredential.user; */
      document.querySelector('.result').innerHTML = '';

      // ...
    })
    .catch((error) => {
      document.querySelector('.result').innerHTML = error.message;
    });
};

export const aparece = (user) => {
  if (user.emailVerified) {
    window.open('#/home', '_self');
  }
};

export const observer = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User is signed in.
      aparece(user);
    } else {
      // No user is signed in
      window.open('#/', '_self');
    }
  });
};

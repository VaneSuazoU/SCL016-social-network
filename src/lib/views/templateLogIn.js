import { authGoogle, toSignIn } from '../firebase/firebase-auth.js';

export const logIn = () => {
  const divLogIn = document.createElement('div');
  divLogIn.classList.add('container');
  const viewLogIn = `
    <img src="./lib/images/logo.png" class="title" alt="">
    <img src="./lib/images/google.png" id="google" alt="">
   
    <h4>o</h4>

    <input type="email" id ="email2" placeholder="Correo electrónico">
    <input type="password" id ="password2" placeholder="Contraseña">
    <a href="#/recoverPassword">¿Olvidaste tu contraseña?</a>
    <p class="result"></p>


    <button id="send2">Iniciar sesión</button>

    <h4>¿No tienes cuenta?</h4>
    <a href="#/signIn" class="button">Regístrate aquí</a>

    <img src="./lib/images/footer.png" class="title" alt="">`;

  divLogIn.innerHTML = viewLogIn;

  const google = divLogIn.querySelector('#google');
  google.addEventListener('click', () => {
    authGoogle();
  });
  const sign = divLogIn.querySelector('#send2');
  sign.addEventListener('click', () => {
    toSignIn();
  });

  return divLogIn;
};

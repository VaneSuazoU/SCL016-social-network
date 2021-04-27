import { authGoogle, signIn } from '../firebase/firebase-auth.js';

export const home = () => {
  const divHome = document.createElement('div');
  divHome.classList.add('containerHome');
  const viewHome = `
    <img src="./lib/images/logo.png" class="title" alt="">
    <img src="./lib/images/google.png" id="google" alt="">
   
    <h4>o</h4>

    <input type="email" id ="email2" placeholder="Correo electrónico">
    <input type="password" id ="password2" placeholder="Contraseña">
    <a href="#/recuperar">¿Olvidaste tu contraseña?</a>
    <p class="error"></p>


    <button id="send2">Iniciar sesión</button>

    <h4>¿No tienes cuenta?</h4>
    <a href="#/personajes" class="boton">Regístrate aquí</a>

    <img src="./lib/images/footer.png" class="title" alt="">
    <div id="contenido"></div>`;

  divHome.innerHTML = viewHome;

  const google = divHome.querySelector('#google');
  google.addEventListener('click', () => {
    authGoogle();
  });
  const sign = divHome.querySelector('#send2');
  sign.addEventListener('click', () => {
    signIn();
  });

  return divHome;
};

// <button type="button" id="google2">Inicia sesión con google</button>

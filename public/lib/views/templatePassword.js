import { passwordRecovery } from '../firebase/firebase-auth.js';

export const recoverPassword = () => {
  const divRecoverPassword = document.createElement('div');
  divRecoverPassword.classList.add('container');
  const viewRecoverPassword = `
  <img src="./lib/images/logo.png" class="title" alt="">
  <h1>¿Olvidaste tú contraseña?</h1>

    <h4>Ingresa tu correo electrónico y te enviaremos un enlace para que recuperes tu cuenta.</h4>
    <input type="email" id="email3" placeholder="Correo electrónico">
    
    <button id="send3">Enviar</button>
    <p class="error"></p>

    <a href="#/" class="button">Volver al inicio de sesión</a>

    <img src="./lib/images/footer.png" class="title" alt="">
    `;

  divRecoverPassword.innerHTML = viewRecoverPassword;

  const bottonToRecover = divRecoverPassword.querySelector('#send3');
  bottonToRecover.addEventListener('click', () => {
    passwordRecovery();
  });

  return divRecoverPassword;
};

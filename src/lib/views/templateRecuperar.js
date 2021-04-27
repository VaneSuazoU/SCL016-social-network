import { passwordRecovery } from '../firebase/firebase-auth.js';

export const recuperar = () => {
  const divRecuperar = document.createElement('div');
  divRecuperar.classList.add('containerHome');
  const viewRecuperar = `
  <img src="./lib/images/logo.png" class="title" alt="">
  <h1>¿Olvidaste tú contraseña?</h1>

    <h4>Ingresa tu correo electrónico y te enviaremos un enlace para que recuperes tu cuenta.</h4>
    <input type="email" id="email3" placeholder="Correo electrónico">
    
    <button id="send3">Enviar</button>
    <p class="error"></p>

    <a href="#/" class="boton">Volver al inicio de sesión</a>

    <img src="./lib/images/footer.png" class="title" alt="">
    `;

  divRecuperar.innerHTML = viewRecuperar;

  const recover = divRecuperar.querySelector('#send3');
  recover.addEventListener('click', () => {
    passwordRecovery();
  });

  return divRecuperar;
};

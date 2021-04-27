import { createAccount } from '../firebase/firebase-auth.js';

export const personajes = () => {
  const divPersonajes = document.createElement('div');
  divPersonajes.classList.add('containerHome');
  const viewPersonajes = `
    <img src="./lib/images/logo.png" class="title" alt="">
    <h2>Regístrate, mira y comparte memes</h2>
    
    <input type="email" id ="email" placeholder="Correo electrónico">
    <input type="text" id ="username" placeholder="Nombre de usuario">
    <input type="password" id ="password" placeholder="Contraseña">
    <input type="text" id ="bio" placeholder ="Tu bio de una línea quí">

    <h6>Al registrarte, aceptas políticas y condiciones de uso.</h6>

    <button id="send">Registrar</button>
    <p class="error"></p>
    
    <h4>¿Tienes cuenta?</h4>
    <a href="#/" class="boton">Inicia sesión</a>
    
    <img src="./lib/images/footer.png" class="title" alt="">
    `;

  divPersonajes.innerHTML = viewPersonajes;

  const send = divPersonajes.querySelector('#send');
  send.addEventListener('click', () => {
    createAccount();
  });

  return divPersonajes;
};

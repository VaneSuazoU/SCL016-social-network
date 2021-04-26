import { createAccount } from '../firebase/firebase-auth.js';

export const personajes = () => {
  const divPersonajes = document.createElement('div');
  const viewPersonajes = ` <h2>Registro</h2>
    
    <input type="text" id ="username" placeholder="Tú nombre aquí">
    <input type="email" id ="email" placeholder="Tú email aquí">
    <input type="password" id ="password" placeholder="Tú contraseña aquí">
    <input type="text" id ="bio" placeholder ="Tu bio de una línea quí">
    <button id="send">Registrar</button>
    <p class="error"></p>
    
    <h2>¿Ya tienes una cuenta?</h2>
    <a href="#/">Inicia sesión</a>
    
    <img src="./lib/images/footer.png" class="title" alt="">`;

  divPersonajes.innerHTML = viewPersonajes;

  const send = divPersonajes.querySelector('#send');
  send.addEventListener('click', () => {
    createAccount();
  });

  return divPersonajes;
};

import {  passwordRecovery } from '../firebase/firebase-auth.js';

export const recuperar = () => {
    const divRecuperar= document.createElement('div');
    const viewRecuperar = 
    `<h2>Recuperar contraseña</h2>

    <h3>Ingresa tu correo electrónico y te enviaremos un enlace para que recuperes tu cuenta.<h3>
    <input type="email" id="email3" placeholder="Tú email aquí">
    
    <button id="send3">Enviar</button>

    <a href="#/">Volver al inicio de sesión</a>
    <img src="./lib/images/footer.png" class="title" alt="">
    `

    divRecuperar.innerHTML = viewRecuperar;

    let recover =  divRecuperar.querySelector('#send3');
    recover.addEventListener('click', () => {
    passwordRecovery();
    });
    
    return divRecuperar;
}
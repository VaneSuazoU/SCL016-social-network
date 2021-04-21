import {createAccount } from '../../app.js';

export const personajes = () => {
    const divPersonajes = document.createElement('div');
    const viewPersonajes = 
    ` <h2>Registro</h2>
       
    <input type="email" id ="email" placeholder="Tú email aquí">
    <input type="password" id ="password" placeholder="Tú contraseña aquí">
    <button id="send">Registrar</button>`

    divPersonajes.innerHTML = viewPersonajes;

    let send =  divPersonajes.querySelector('#send');
    send.addEventListener('click', () => {
        createAccount();
    });


    return divPersonajes;
}
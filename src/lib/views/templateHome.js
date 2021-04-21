import { authGoogle, signIn, createAccount } from '../../app.js';

export const home = () => {
    const divHome = document.createElement('div');
    const viewHome = 
    `<button type="button" id="google">Ingresa con google</button>
    
    <h2>Ingreso</h2>

    <input type="email" id ="email2" placeholder="Tú email aquí">
    <input type="password" id ="password2" placeholder="Tú contraseña aquí">
    <button id="send2">Ingresar</button>

    <h2>Registro</h2>
       
    <input type="email" id ="email" placeholder="Tú email aquí">
    <input type="password" id ="password" placeholder="Tú contraseña aquí">
    <button id="send">Registrar</button>
    
    <div id="contenido"></div>`

    divHome.innerHTML = viewHome;

    let google = divHome.querySelector("#google");
    google.addEventListener('click', () => {
        authGoogle();
    });
    let send =  divHome.querySelector('#send');
    send.addEventListener('click', () => {
        createAccount();
    });
    let send2 =  divHome.querySelector('#send2');
    send2.addEventListener('click', () => {
        signIn();
    });

    return divHome;
}

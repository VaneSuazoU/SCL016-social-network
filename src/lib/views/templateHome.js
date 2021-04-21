import { authGoogle , signIn , recuperar2 } from '../../app.js';

export const home = () => {
    const divHome = document.createElement('div');
    const viewHome = 
    `<button type="button" id="google">Ingresa con google</button>
    
    <h2>Ingreso</h2>

    <input type="email" id ="email2" placeholder="Tú email aquí">
    <input type="password" id ="password2" placeholder="Tú contraseña aquí">
    <button id="send2">Ingresar</button>
    <button id="recuperar">Recuperar contraseña</button>

    
    <div id="contenido"></div>`

    divHome.innerHTML = viewHome;

    let google = divHome.querySelector("#google");
    google.addEventListener('click', () => {
        authGoogle();
    });
    let send2 =  divHome.querySelector('#send2');
    send2.addEventListener('click', () => {
        signIn();
    });
    let recuperar =  divHome.querySelector('#recuperar');
    recuperar.addEventListener('click', () => {
        recuperar2();
    });

    return divHome;
}

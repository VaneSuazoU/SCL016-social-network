export const home = () => {
    const divHome = document.createElement('div');
    /* divHome.classList.add("divHome"); */
    const viewHome = 
    `<button type="button" id="button">Ingresa con google</button>
    
    <h2>Registro</h2>
    <input type="email" id ="email" placeholder="Tu email aquí">
    <input type="password" id ="password" placeholder="Tu contraseña aquí">
    <button id="send">Enviar</button>
    
    <div id="contenido"></div>`

    divHome.innerHTML = viewHome;

    return divHome;
}


/*     <h2>Ingreso</h2>
    <input type="email" id ="email2" placeholder="Tu email aquí">
    <input type="password" id ="password2" placeholder="Tu contraseña aquí">
    <button id="send2">Enviar</button> */
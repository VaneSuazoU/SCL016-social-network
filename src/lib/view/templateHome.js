export const home = () => {
    const divHome = document.createElement('div');
    const viewHome = 
    `<button type="button" id="button">Ingresa con google</button>
    
    <input type="email" id ="email" placeholder="Tu email aquí">
    <input type="password" id ="password" placeholder="Tu contraseña aquí">
    <button id="send">Enviar</button> `

    divHome.innerHTML = viewHome;

    return divHome;
}
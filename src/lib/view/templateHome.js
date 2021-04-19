export const home = () => {
    const divHome = document.createElement('div');
    const viewHome = 
    `<img src="./lib/resources/titulo.png" id="title" alt="">
    <button type="button" id="button">Ingresa con google</button>`

    divHome.innerHTML = viewHome;

    return divHome;
}
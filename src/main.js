// Este es el punto de entrada de tu aplicacion

import { myFunction } from './lib/index.js';
import { menu } from './lib/view/templateMenu.js';
import { changeRoute } from './lib/router.js';
import { authGoogle } from './app.js'

const init = () => {
    document.getElementById('root').innerHTML = menu();
    window.addEventListener('hashchange', () => {
        myFunction();
        console.log(window.location.hash);
        changeRoute(window.location.hash)

        let boton = document.getElementById('button');
        boton.addEventListener('click', () => {
        authGoogle();
        console.log(boton);
});
    })
}

window.addEventListener('load', init)


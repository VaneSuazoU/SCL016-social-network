// Este es el punto de entrada de tu aplicacion

import { myFunction } from './lib/index.js';
import { menu } from './lib/views/templateMenu.js';
import { changeRoute } from './lib/router.js';


const init = () => {
    document.getElementById('root').innerHTML = menu();
    window.addEventListener('hashchange', () => {
        myFunction();
        changeRoute(window.location.hash)
    })
}

window.addEventListener('load', init)


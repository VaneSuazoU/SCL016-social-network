// Este es el punto de entrada de tu aplicacion

import { myFunction } from './lib/index.js';
import { menu } from './lib/views/templateMenu.js';
import { changeRoute } from './lib/router.js';
import { authGoogle, myfuncion } from './app.js';


const init = () => {
    document.getElementById('root').innerHTML = menu();
    window.addEventListener('hashchange', () => {
        myFunction();
        changeRoute(window.location.hash)

        let google = document.getElementById('button');
        google.addEventListener('click', () => {
            authGoogle();
        });
        let send = document.getElementById('send');
        send.addEventListener('click', () => {
        myfuncion();
        });

        
    })
}

window.addEventListener('load', init)


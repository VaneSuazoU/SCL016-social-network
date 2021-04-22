import { home } from './views/templateHome.js';
import { personajes } from './views/templatePersonajes.js';
import { error } from './views/templateError.js';
import { recuperar } from './views/templateRecuperar.js';
import { menu } from './views/templateMenu.js';

export const changeRoute = (hash) => {
    if( hash === '#/'){
        return showTemplate(hash)
    } else if (hash === '#/personajes') {
        return showTemplate(hash)
    } else {
        return showTemplate(hash)
    }
}

const showTemplate = (hash) => {
    const containerRoot = document.getElementById('root');
    containerRoot.innerHTML = menu();

    switch (hash) {
        case '#/':
        containerRoot.appendChild(home());
        break;
        case '#/personajes':
        containerRoot.appendChild(personajes());
        break;
        case '#/recuperar':
        containerRoot.appendChild(recuperar());
        break;
        default: 
        containerRoot.appendChild(error());
    }
}

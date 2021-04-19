import { home } from './view/templateHome.js';
import { personajes } from './view/templatePersonajes.js';
import { menu } from './view/templateMenu.js';

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
        default: 
        containerRoot.innerHTML = `<h2>Error 404</h2>`;
    }
}

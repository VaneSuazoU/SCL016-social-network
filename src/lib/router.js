import { home } from './views/templateHome.js';
import { personajes } from './views/templatePersonajes.js';
import { error } from './views/templateError.js';
import { recuperar } from './views/templateRecuperar.js';
import { menu } from './views/templateMenu.js';

const showTemplate = (hash) => {
  const containerRoot = document.getElementById('root');
  containerRoot.innerHTML = '';

  switch (hash) {
    case '':
    case '#':
    case '#/':
      containerRoot.appendChild(home());
      break;
    case '#/personajes':
      containerRoot.appendChild(personajes());
      break;
    case '#/recuperar':
      containerRoot.appendChild(recuperar());
      break;
    case '#/menu':
      containerRoot.appendChild(menu());
      break;
    default:
      containerRoot.appendChild(error());
  }
};

export const changeRoute = (hash) => {
  if (hash === '#/') {
    return showTemplate(hash);
  } if (hash === '#/personajes') {
    return showTemplate(hash);
  }
  return showTemplate(hash);
};

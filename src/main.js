// Este es el punto de entrada de tu aplicacion

import { myFunction } from './lib/index.js';
import { home } from './lib/views/templateHome.js';
import { changeRoute } from './lib/router.js';

const init = () => {
  document.getElementById('root').appendChild(home());
  window.addEventListener('hashchange', () => {
    myFunction();
    changeRoute(window.location.hash);
  });
};

window.addEventListener('load', init);

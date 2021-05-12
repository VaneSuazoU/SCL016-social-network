// Este es el punto de entrada de tu aplicacion
import { changeRoute } from './lib/router.js';
import { observer } from './lib/firebase/firebase-auth.js';

const init = () => {
  changeRoute(window.location.hash);
  observer();
  window.addEventListener('hashchange', () => {
    changeRoute(window.location.hash);
  });
};

window.addEventListener('load', init);

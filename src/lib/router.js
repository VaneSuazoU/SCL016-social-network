import { logIn } from './views/templateLogIn.js';
import { signIn } from './views/templateSignIn.js';
import { error } from './views/templateError.js';
import { recoverPassword } from './views/templatePassword.js';
import { home } from './views/templateHome.js';

const showTemplate = (hash) => {
  const containerRoot = document.getElementById('root');
  containerRoot.innerHTML = '';

  switch (hash) {
    case '':
    case '#':
    case '#/':
      containerRoot.appendChild(logIn());
      break;
    case '#/signIn':
      containerRoot.appendChild(signIn());
      break;
    case '#/recoverPassword':
      containerRoot.appendChild(recoverPassword());
      break;
    case '#/home':
      containerRoot.appendChild(home());
      break;
    default:
      containerRoot.appendChild(error());
  }
};

export const changeRoute = (hash) => {
  showTemplate(hash);
};

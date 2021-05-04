import { logIn } from './views/templateLogIn.js';
import { signIn } from './views/templateSignIn.js';
import { error } from './views/templateError.js';
import { recoverPassword } from './views/templatePassword.js';
/* import { editPosts } from './views/templateEditPost.js'; */

import { perfil } from './views/pruebaProfile.js';
import { post } from './views/templatePosts.js';
import { newPost } from './views/prueba3.js';
import { home } from './views/prueba.js';
import { editPosts } from './views/prueba2.js';


const showTemplate = (hash) => {
  const containerRoot = document.getElementById('root');
  containerRoot.innerHTML = '';

  switch (hash) {
    case '':
    case '#':
    case '#/':
      containerRoot.appendChild(logIn());
      break;
    case '#/newPost':
      containerRoot.appendChild(newPost());
      break;
      case '#/signIn':
      containerRoot.appendChild(signIn());
      break;
    case '#/recoverPassword':
      containerRoot.appendChild(recoverPassword());
      break;
    case '#/perfil':
      containerRoot.appendChild(perfil());
      break;
    case '#/post':
      containerRoot.appendChild(post());
      break;
      case '#/editPost':
        containerRoot.appendChild(editPost());
        break;
        case '#/editPosts':
          containerRoot.appendChild(editPosts());
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

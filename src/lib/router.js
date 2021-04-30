import { logIn } from './views/templateLogIn.js';
import { signIn } from './views/templateSignIn.js';
import { error } from './views/templateError.js';
import { recoverPassword } from './views/templatePassword.js';
import { editPost } from './views/templateEditPost.js';
import { perfil } from './views/templatePerfil.js';
import { post } from './views/templatePosts.js';

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
    case '#/editPost':
      containerRoot.appendChild(editPost());
      break;
    case '#/perfil':
      containerRoot.appendChild(perfil());
      break;
    case '#/post':
      containerRoot.appendChild(post());
      break;
    default:
      containerRoot.appendChild(error());
  }
};

export const changeRoute = (hash) => {
  showTemplate(hash);
};

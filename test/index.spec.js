// importamos la funcion que vamos a testear
import { logIn } from '../src/lib/views/templateLogIn.js';
import { signIn } from '../src/lib/views/templateSignIn.js';
import { error } from '../src/lib/views/templateError.js';
import { recoverPassword } from '../src/lib/views/templatePassword.js';
import { posts } from '../src/lib/views/templateHome.js';
import { profileView } from '../src/lib/views/templateProfile.js';
import { newPost } from '../src/lib/views/templateNewPost.js';
import { editPosts } from '../src/lib/views/templateEditPost.js';
import { logOut } from '../src/lib/firebase/firebase-auth.js';

describe('logIn', () => {
  const divLogIn = logIn();
  it('should be a function', () => {
    expect(typeof logIn).toBe('function');
  });
  it('should render without crashing', () => {
    expect(divLogIn instanceof HTMLElement).toBe(true);
  });
});

describe('signIn', () => {
  const divSignIn = signIn();
  it('should be a function', () => {
    expect(typeof signIn).toBe('function');
  });
  it('should render without crashing', () => {
    expect(divSignIn instanceof HTMLElement).toBe(true);
  });
});

describe('error', () => {
  const divError = error();
  it('should be a function', () => {
    expect(typeof error).toBe('function');
  });
  it('should render without crashing', () => {
    expect(divError instanceof HTMLElement).toBe(true);
  });
});

describe('recoverPassword', () => {
  const divRecoverPassword = recoverPassword();
  it('should be a function', () => {
    expect(typeof recoverPassword).toBe('function');
  });
  it('should render without crashing', () => {
    expect(divRecoverPassword instanceof HTMLElement).toBe(true);
  });
});

describe('posts', () => {
  const divHome = posts();
  it('should be a function', () => {
    expect(typeof posts).toBe('function');
  });
  it('should render without crashing', () => {
    expect(divHome instanceof HTMLElement).toBe(true);
  });
});

describe('profileView', () => {
  const divPerfil = profileView();
  it('should be a function', () => {
    expect(typeof profileView).toBe('function');
  });
  it('should render without crashing', () => {
    expect(divPerfil instanceof HTMLElement).toBe(true);
  });
});
describe('newPost', () => {
  const divNewPost = newPost();
  it('should be a function', () => {
    expect(typeof newPost).toBe('function');
  });
  it('should render without crashing', () => {
    expect(divNewPost instanceof HTMLElement).toBe(true);
  });
});
describe('editPosts', () => {
  const divEditPost = editPosts();
  it('should be a function', () => {
    expect(typeof editPosts).toBe('function');
  });
  it('should render without crashing', () => {
    expect(divEditPost instanceof HTMLElement).toBe(true);
  });
});
describe('logOut', () => {
  it('should be a function', () => {
    expect(typeof logOut).toBe('function');
  });
});

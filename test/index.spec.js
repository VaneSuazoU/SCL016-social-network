// importamos la funcion que vamos a testear
import { logIn } from '../src/lib/views/templateLogIn.js';
import { signIn } from '../src/lib/views/templateSignIn.js';
import { error } from '../src/lib/views/templateError.js';
import { recoverPassword } from '../src/lib/views/templatePassword.js';
import { home } from '../src/lib/views/templateHome.js';

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

describe('home', () => {
  const divHome = home();
  it('should be a function', () => {
    expect(typeof home).toBe('function');
  });
  it('should render without crashing', () => {
    expect(divHome instanceof HTMLElement).toBe(true);
  });
});

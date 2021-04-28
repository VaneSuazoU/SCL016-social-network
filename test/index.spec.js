// importamos la funcion que vamos a testear
import { myFunction } from '../src/lib/index.js';
import { logIn } from '../src/lib/views/templateLogIn.js';

describe('myFunction', () => {
  it('debería ser una función', () => {
    expect(typeof myFunction).toBe('function');
  });
});

describe('logIn', () => {
  it('should render without crashing', () => {
    const divLogIn = logIn();
    expect(divLogIn instanceof HTMLElement).toBe(true);
  });
});

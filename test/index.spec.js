// importamos la funcion que vamos a testear
import { myFunction } from '../src/lib/index.js';
import { createAccount } from '../src/lib/firebase/firebase-auth.js';

describe('myFunction', () => {
  it('debería ser una función', () => {
    expect(typeof myFunction).toBe('function');
  });
});

describe('createAccount', () => {
  it('debería ser una función', () => {
    expect(typeof createAccount).toBe('function');
  });
});

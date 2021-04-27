// importamos la funcion que vamos a testear
import { myFunction } from '../src/lib/index.js';
import { home } from '../src/lib/views/templateHome.js';

describe('myFunction', () => {
  it('debería ser una función', () => {
    expect(typeof myFunction).toBe('function');
  });
});

describe('home', () => {
  it('should render without crashing', () => {
    const initContent = home();
    expect(initContent instanceof HTMLElement).toBe(true);
  });
});

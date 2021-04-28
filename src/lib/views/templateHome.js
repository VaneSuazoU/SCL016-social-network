import { logOut } from '../firebase/firebase-auth.js';

export const home = () => {
  const divHome = document.createElement('div');
  divHome.classList.add('container', 'containerHome');
  const viewHome = `
  
  <img src="./lib/images/logout.png" id="toLogOut" alt="">

  <h1> Aquí van los posts  </h1>
  <p class="result"></p>
    `;

  divHome.innerHTML = viewHome;

  const out = divHome.querySelector('#toLogOut');
  out.addEventListener('click', () => {
    logOut();
  });

  return divHome;
};

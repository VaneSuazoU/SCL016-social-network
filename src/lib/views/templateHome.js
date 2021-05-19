import { logOut } from '../firebase/firebase-auth.js';
import { getDocument } from '../firebase/firebase-firestore.js';

export const posts = () => {
  const divHome = document.createElement('div');
  divHome.classList.add('container', 'posts');
  const viewHome = `
    <img src="./lib/images/titulo.png" class="title" alt="">

    <header>
    <img src="./lib/images/logout.png" id="toLogOut" alt="">
    <h1>Bienvenido a MemeTime</h1>
    </header>

    <main id="wallContentDiv" class="wallContent"></main>
  
    <div id="footer">
    <img src="./lib/images/home.webp" class="item" id="wall" alt="">
    <img src="./lib/images/plus.webp" class="item" id="add" alt="">
    <img src="./lib/images/profile.png" class="item" id="profile" alt="">
    </div>`;

  divHome.innerHTML = viewHome;

  const profile = divHome.querySelector('#profile');
  const out = divHome.querySelector('#toLogOut');
  const wall = divHome.querySelector('#wall');
  const add = divHome.querySelector('#add');

  profile.addEventListener('click', () => {
    window.open('#/profile', '_self');
  });
  out.addEventListener('click', logOut);
  
  wall.addEventListener('click', () => {
    window.open('#/home', '_self');
  });
  add.addEventListener('click', () => {
    window.open('#/newPost', '_self');
  });

  getDocument();

  return divHome;
};

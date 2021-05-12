import { logOut } from '../firebase/firebase-auth.js';
import { getDocumentProfile } from '../firebase/firebase-firestore.js';

export const profileView = () => {
  const divPerfil = document.createElement('div');
  divPerfil.classList.add('container', 'posts');
  const viewPerfil = `
    <img src="./lib/images/titulo.png" class="header" alt="">
    <img src="./lib/images/logout.png" id="toLogOut" alt="">
    <h1>Tus publicaciones</h1>

    <main id="wallContent" class="wallContent"></main>
  
    <div id="footer">
    <img src="./lib/images/home.webp" class="item" id="wall" alt="">
    <img src="./lib/images/plus.webp" class="item" id="add" alt="">
    <img src="./lib/images/profile.png" class="item" id="profile" alt="">
    </div>`;

  divPerfil.innerHTML = viewPerfil;

  const profile = divPerfil.querySelector('#profile');
  const out = divPerfil.querySelector('#toLogOut');
  const wall = divPerfil.querySelector('#wall');
  const add = divPerfil.querySelector('#add');

  profile.addEventListener('click', () => {
    window.open('#/profile', '_self');
  });
  out.addEventListener('click', () => {
    logOut();
  });
  wall.addEventListener('click', () => {
    window.open('#/home', '_self');
  });
  add.addEventListener('click', () => {
    window.open('#/newPost', '_self');
  });

  getDocumentProfile();

  return divPerfil;
};

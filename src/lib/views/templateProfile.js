import { logOut } from '../firebase/firebase-auth.js';

export const profile = () => {
  const divProfile = document.createElement('div');
  divProfile.classList.add('container', 'posts');
  const viewProfile = `
  
  <img src="./lib/images/titulo.png" class="header" alt="">
  <img src="./lib/images/logout.png" id="toLogOut" alt="">
  <h1>Perfil</h1>

  <h3>Tus publicaciones</h3>

  <div class="contenedor-post dropdown">
  <ul id="cafe-list"></ul>
  </div>

  <div id="footer">
  <img src="./lib/images/home.webp" class="item" id="muro" alt="">
  <img src="./lib/images/plus.webp" class="item" id="add" alt="">
  <img src="./lib/images/profile.png" class="item" id="profile" alt="">
  </div>
    `;

  divProfile.innerHTML = viewProfile;

  const out = divProfile.querySelector('#toLogOut');
  out.addEventListener('click', () => {
    logOut();
  });

  const muro = divProfile.querySelector('#muro');
  muro.addEventListener('click', () => {
    window.open('#/post', '_self');
  });

  const profile = divProfile.querySelector('#profile');
  profile.addEventListener('click', () => {
    window.open('#/profile', '_self');
  });

  const add = divProfile.querySelector('#add');
  add.addEventListener('click', () => {
    window.open('#/editPost', '_self');
  });

  const cafeList = divProfile.querySelector('#cafe-list');
/*   const user = firebase.auth().currentUser; */

  const renderCafe = (doc) => {
    let li = document.createElement('li');
    let titulo = document.createElement('span');
    let contenido = document.createElement('span');
    let dots = document.createElement('div');
    dots.classList.add('dropdown');
    let edit = document.createElement('a');
    edit.href = '#/editPost';
    edit.classList.add('dropdown-content');

    li.setAttribute('data-id', doc.id);
    titulo.textContent = doc.data().titulo;
    contenido.textContent = doc.data().contenido;
    dots.textContent = '...';
    edit.textContent = 'editar';

    li.appendChild(titulo);
    li.appendChild(contenido);
    li.appendChild(dots);
    li.appendChild(edit);

    cafeList.appendChild(li);
  }

  // getting data
  let database = firebase.firestore();
  database.collection("publicaciones").where('usuario', '==', 'meme time').get().then((snapshot) => {
    snapshot.docs.forEach((doc) => {
      renderCafe(doc);
    });
  });


  return divProfile;
};


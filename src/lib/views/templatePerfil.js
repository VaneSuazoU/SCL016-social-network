import { logOut } from '../firebase/firebase-auth.js';

export const perfil = () => {
  const divPerfil = document.createElement('div');
  divPerfil.classList.add('container', 'containerHome');
  const viewPerfil = `
  
  <img src="./lib/images/logout.png" id="toLogOut" alt="">
  <h1>TU PERFIL</h1>

<div class="content">

    <ul id="cafe-list"></ul>

<a href="#/post" class="button">Ir al muro</a>
<a href="#/editPost" class="button">Editar</a>
</div>
    `;

  divPerfil.innerHTML = viewPerfil;

  const out = divPerfil.querySelector('#toLogOut');
  out.addEventListener('click', () => {
    logOut();
  });

  const cafeList = divPerfil.querySelector('#cafe-list');
  const form = divPerfil.querySelector('#add-cafe-form');

  const renderCafe = (doc) => {
    let li = document.createElement('li');
    let titulo = document.createElement('span');
    let contenido = document.createElement('span');
    let cross = document.createElement('div');

    li.setAttribute('data-id', doc.id);
    titulo.textContent = doc.data().titulo;
    contenido.textContent = doc.data().contenido;
    cross.textContent = 'x';

    li.appendChild(titulo);
    li.appendChild(contenido);
    li.appendChild(cross);

    cafeList.appendChild(li);

    // deleting data 
    cross.addEventListener('click', (e) => {
      e.stopPropagation();
      let id = e.target.parentElement.getAttribute('data-id');
      database.collection('publicaciones').doc(id).delete();
    })
  }
  // getting data
  let database = firebase.firestore();
  database.collection("publicaciones").where('usuario', '==', 'memetimelaboratoria@gmail.com').get().then((snapshot) => {
    snapshot.docs.forEach((doc) => {
      renderCafe(doc);
    });
  });


  return divPerfil;
};


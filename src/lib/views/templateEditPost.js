import { logOut } from '../firebase/firebase-auth.js';

export const editPost = () => {
  const divEditPost = document.createElement('div');
  divEditPost.classList.add('container', 'containerHome');
  const viewEditPost = `
  
  <img src="./lib/images/logout.png" id="toLogOut" alt="">

  <h1> Hola! estos son tus posts</h1>
  <form id="add-cafe-form">
    <input type="text" name="titulo" placeholder="titulo">
    <input type="text" name="contenido" placeholder="contenido">
    <button>Publicar</button>
  </form>
  <p class="result"></p>
  <ul id="cafe-list"></ul>

  <a href="#/prueba" class="button">Ir al perfil</a>
  <a href="#/post" class="button">Ir al muro</a>
    `;

  divEditPost.innerHTML = viewEditPost;

  const out = divEditPost.querySelector('#toLogOut');
  out.addEventListener('click', () => {
    logOut();
  });

  const cafeList = divEditPost.querySelector('#cafe-list');
  const form = divEditPost.querySelector('#add-cafe-form');

  const renderCafe = (doc) => {
    let li = document.createElement('li');
    let titulo = document.createElement('span');
    titulo.classList.add('titulo');
    let contenido = document.createElement('span');
    contenido.classList.add('contenido');
    let cross = document.createElement('div');
    let saveChanges = document.createElement('span');

    li.setAttribute('data-id', doc.id);
    titulo.textContent = doc.data().titulo;
    titulo.contentEditable = true;
    contenido.textContent = doc.data().contenido;
    cross.textContent = 'x';
    saveChanges.textContent = 'guardar cambios';

    li.appendChild(titulo);
    li.appendChild(contenido);
    li.appendChild(cross);
    li.appendChild(saveChanges);

    cafeList.appendChild(li);

    // deleting data 
    cross.addEventListener('click', (e) => {
      e.stopPropagation();
      let id = e.target.parentElement.getAttribute('data-id');
      database.collection('publicaciones').doc(id).delete();
    })
    // updating data 
    saveChanges.addEventListener('click', (e) => {
     const user = firebase.auth().currentUser; 
      let id = e.target.parentElement.getAttribute('data-id');
      database.collection('publicaciones').doc(id).update({
        titulo: e.target.parentElement.querySelector('.titulo').innerHTML,
        contenido: e.target.parentElement.querySelector('.contenido').innerHTML,
        usuario: user.email
      }).then( () => {
        document.querySelector('.result').innerHTML = "Contenido actualizado";
        setTimeout( () => {
          document.querySelector('.result').innerHTML = "";
        }, 5000)
      }) 
    });

  }
  // saving data
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const user = firebase.auth().currentUser;
    database.collection('publicaciones').add({
      titulo: form.titulo.value,
      contenido: form.contenido.value,
      usuario: user.email
    });
    form.titulo.value = '';
    form.contenido.value = '';
  });
  // real-time listener
  let database = firebase.firestore();
  database.collection('publicaciones').orderBy('titulo').onSnapshot(snapshot => {
    let changes = snapshot.docChanges();
    changes.forEach(change => {
      if (change.type == 'added') {
        renderCafe(change.doc);
      } else if (change.type == 'removed') {
        let li = cafeList.querySelector('[data-id=' + change.doc.id + ']');
        cafeList.removeChild(li);
      }
    })
  })

  return divEditPost;
};

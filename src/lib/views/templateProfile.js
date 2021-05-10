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
  // Variables globales a utilizar
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

  // función para ordenar los posts por hora de publicación y crear el contenido de los posts
  /*   firestore.collection('posts').where('userName', '==', 'meme time').get().then((snapshot) => {
    divPerfil.querySelector('#wallContentDiv').innerHTML = '';
    snapshot.forEach((doc) => {
      // contenedor de los posts
      const home = divPerfil.querySelector('#wallContentDiv');
      const post = document.createElement('div');
      const postImage = document.createElement('img');
      const postDescription = document.createElement('p');
      const options = document.createElement('div');

      // contenido de los posts
      post.classList.add('postContainer');
      postImage.classList.add('postImgs');
      postImage.src = doc.data().postImage;
      postDescription.innerHTML = doc.data().message;

      // orden de los contenedores
      home.appendChild(post);
      post.appendChild(postImage);
      post.appendChild(postDescription);
      post.appendChild(options);

      const eliminar = document.createElement('img');
      eliminar.src = './lib/images/delete.png';
      eliminar.classList.add('options');
      options.appendChild(eliminar);

      // eliminar post
      eliminar.addEventListener('click', (e) => {
        if (doc.data().userID === user.uid) {
          e.stopPropagation();
          const docID = doc.id;
          firestore
            .collection('posts')
            .doc(docID)
            .delete()
            .then(() => { })
            .catch(() => {
              /* console.error('Error removing document: ', error); */
  /*             });
        }
      });

      // función para editar los post del usuario activo
      const editPost = document.createElement('img');
      editPost.classList.add('options');
      editPost.setAttribute('src', './lib/images/edit.png');
      options.appendChild(editPost);

      // Función para enviar a editar post
      const redirection = (docID, message, postImages) => {
        const root = document.getElementById('root');
        root.innerHTML = '';
        root.appendChild(editPosts(docID, message, postImages));
      };

      editPost.onclick = () => {
        const docID = doc.id;
        const message = doc.data().message;
        const postImg = doc.data().postImage;
        redirection(docID, message, postImg);
      };
    });
  }); */

  getDocumentProfile();

  return divPerfil;
};

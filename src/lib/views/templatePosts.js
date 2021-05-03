import { logOut } from '../firebase/firebase-auth.js';

export const post = () => {
  const divPost = document.createElement('div');
  divPost.classList.add('container', 'posts');
  const viewPost = `
  <img src="./lib/images/titulo.png" class="header" alt="">
  <img src="./lib/images/logout.png" id="toLogOut" alt="">
  <h1>Bienvenido a MemeTime</h1>

  <div class="contenedor-post">
  <ul id="cafe-list"></ul>
  </div>

  <div id="footer">
  <img src="./lib/images/home.webp" class="item" alt="">
  <img src="./lib/images/plus.webp" class="item" alt="">
  <img src="./lib/images/profile.png" class="item" id="profile" alt="">
  </div>

    `;

  divPost.innerHTML = viewPost;

  const profile = divPost.querySelector('#profile');
  profile.addEventListener('click', () => {
    window.open('#/profile', '_self');
  });

  const out = divPost.querySelector('#toLogOut');
  out.addEventListener('click', () => {
    logOut();
  });

  const cafeList = divPost.querySelector('#cafe-list');
  const renderCafe = (doc) => {

    let li = document.createElement('li');
    li.classList.add('item-flex');
    let usuario = document.createElement('span');
    let titulo = document.createElement('span');
    let contenido = document.createElement('span');
    let like = document.createElement('img');
    let countLikes = document.createElement('span');


    li.setAttribute('data-id', doc.id);
    /* usuario.textContent = doc.data().usuario;
    usuario.classList.add('username'); */
    titulo.textContent = doc.data().titulo;
    contenido.textContent = doc.data().contenido;
    like.src = "./lib/images/liked.png";
    like.classList.add('like-img', 'likes');
    countLikes.classList.add('likes');
    

    li.appendChild(usuario);
    li.appendChild(titulo);
    li.appendChild(contenido);
    li.appendChild(like);
    li.appendChild(countLikes);


    cafeList.appendChild(li);

    const user = firebase.auth().currentUser;
    let isLike = false;
    let idLike;

    // obtener usuario que hizo la publicacion 
    database.collection("user").where('usuario', '==', user.displayName).get().then(() => {
      usuario.textContent = doc.data();
      console.log(doc.data())
    })

    // count likes
    database.collection("likes").where('post', '==', doc.id).get().then((likeResult) => {
      countLikes.textContent = likeResult.docs.length;
    })

    // give likes
    database.collection("likes").where('post', '==', doc.id).where('user', '==', user.uid).get().then((likeResult) => {
      if (likeResult.docs.length) {
        like.src = "./lib/images/likedred.png";
        isLike = true;
        idLike = likeResult.docs[0].id;
      }
    })

    like.addEventListener('click', () => {
    database.collection("likes").where('post', '==', doc.id).where('user', '==', user.uid).get().then((likeResult) => {
      if (likeResult.docs.length) {
        like.src = "./lib/images/likedred.png";
        isLike = true;
        idLike = likeResult.docs[0].id;
      }
      if (isLike) {
        database.collection('likes').doc(idLike).delete();
        like.src = "./lib/images/liked.png";
        isLike = false;
      } else {
        like.src = "./lib/images/likedred.png";
        database.collection('likes').add({
          user: user.uid,
          post: doc.id
        });
        isLike = true;
      }
    // count likes
    database.collection("likes").where('post', '==', doc.id).get().then((likeResult) => {
      countLikes.textContent = likeResult.docs.length;
    })
    });
    });
  }
  // saving data
  let database = firebase.firestore();
  database.collection("publicaciones").get().then((snapshot) => {
    snapshot.docs.forEach((doc) => {
      renderCafe(doc);
    });
  });
  return divPost;
};


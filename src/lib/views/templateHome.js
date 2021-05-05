import { logOut } from '../firebase/firebase-auth.js';

/* ESTO ES EL MURO */
export const posts = () => {
  const divHome = document.createElement('div');
  divHome.classList.add('container', 'posts');
  const viewHome = `
    <img src="./lib/images/titulo.png" class="header" alt="">
    <img src="./lib/images/logout.png" id="toLogOut" alt="">
    <h1>Bienvenido a MemeTime</h1>
    
    <main id="wallContentDiv" class="wallContent"></main>
  
    <div id="footer">
    <img src="./lib/images/home.webp" class="item" id="wall" alt="">
    <img src="./lib/images/plus.webp" class="item" id="add" alt="">
    <img src="./lib/images/profile.png" class="item" id="profile" alt="">
    </div>`;

  divHome.innerHTML = viewHome;
  // Variables globales a utilizar
  const firestore = firebase.firestore();
  const user = firebase.auth().currentUser;
  const profile = divHome.querySelector('#profile');
  const out = divHome.querySelector('#toLogOut');
  const wall = divHome.querySelector('#wall');
  const add = divHome.querySelector('#add');

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
  firestore
    .collection('posts')
    .orderBy('date', 'desc')
    .onSnapshot((querySnapshot) => {
      divHome.querySelector('#wallContentDiv').innerHTML = '';
      querySnapshot.forEach((doc) => {
        // contenedor de los posts
        const home = divHome.querySelector('#wallContentDiv');
        const post = document.createElement('div');
        const postImage = document.createElement('img');
        const postDescription = document.createElement('p');
        const likes = document.createElement('div');
        const like = document.createElement('img');
        const countLikes = document.createElement('span');
        const userPic = document.createElement('img');
        const userName = document.createElement('h2');
        const userInfo = document.createElement('div');

        // contenido de los posts
        post.classList.add('postContainer');
        postImage.classList.add('postImgs');
        postImage.src = doc.data().postImage;
        postDescription.innerHTML = doc.data().message;
        likes.classList.add('likes');
        like.src = './lib/images/liked.png';
        like.classList.add('like-img', 'likes');
        countLikes.classList.add('likes');
        userPic.src = doc.data().userPhotoURL;
        userPic.classList.add('userImg');
        userName.innerHTML = doc.data().userName;
        userInfo.classList.add('userInfo');

        // orden de los contenedores
        home.appendChild(post);
        post.appendChild(userInfo);
        userInfo.appendChild(userPic);
        userInfo.appendChild(userName);
        post.appendChild(postImage);
        post.appendChild(postDescription);
        post.appendChild(likes);
        likes.appendChild(like);
        likes.appendChild(countLikes);

        // count likes
        const database = firebase.firestore();
        let isLike = false;
        let idLike;
        database.collection('likes').where('post', '==', doc.id).get().then((likeResult) => {
          countLikes.textContent = likeResult.docs.length;
        });

        // give likes
        database.collection('likes').where('post', '==', doc.id).where('user', '==', user.uid).get()
          .then((likeResult) => {
            if (likeResult.docs.length) {
              like.src = './lib/images/likedred.png';
              isLike = true;
              idLike = likeResult.docs[0].id;
            }
          });

        like.addEventListener('click', () => {
          database.collection('likes').where('post', '==', doc.id).where('user', '==', user.uid).get()
            .then((likeResult) => {
              if (likeResult.docs.length) {
                like.src = './lib/images/likedred.png';
                isLike = true;
                idLike = likeResult.docs[0].id;
              }
              if (isLike) {
                database.collection('likes').doc(idLike).delete();
                like.src = './lib/images/liked.png';
                isLike = false;
              } else {
                like.src = './lib/images/likedred.png';
                database.collection('likes').add({
                  user: user.uid,
                  post: doc.id,
                });
                isLike = true;
              }
              // count likes
              database.collection('likes').where('post', '==', doc.id).get().then((likeRslt) => {
                countLikes.textContent = likeRslt.docs.length;
              });
            });
        });
      });
    });
  return divHome;
};

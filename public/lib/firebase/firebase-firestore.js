import { deletePosts } from './controllers/controllers.js';

export const perfilPost = (perfil) => {
  // contenedor de los posts
  const home = document.querySelector('#wallContent');
  const post = document.createElement('div');
  const postImage = document.createElement('img');
  const postDescription = document.createElement('p');
  const options = document.createElement('div');
  const deletePost = document.createElement('img');
  const updatePost = document.createElement('img');
  const results = document.createElement('p');

  // contenido de los posts
  post.classList.add('postContainer');
  postImage.classList.add('postImgs');
  postImage.src = perfil.data().postImage;
  postDescription.innerHTML = perfil.data().message;
  postDescription.contentEditable = true;
  results.classList.add('result');
  deletePost.src = './lib/images/delete.png';
  deletePost.classList.add('options');
  updatePost.classList.add('options');
  updatePost.src = './lib/images/edit.png';
  deletePost.addEventListener('click', () => {
    deletePosts(perfil.id);
  });
  updatePost.addEventListener('click', () => {
    const docID = perfil.id;
    const messages = postDescription.innerHTML;
    firebase.firestore().collection('posts').doc(docID).update({
      message: messages,
    })
      .then(() => {
        /* document.querySelector('.result').innerHTML = 'Contenido actualizado'; */
        swal("Éxito!", "Contenido actualizado", "success");
      });
    postDescription.contentEditable = false;
  });
  // orden de los contenedores
  home.appendChild(post);
  home.appendChild(results);
  post.appendChild(postImage);
  post.appendChild(postDescription);
  post.appendChild(options);
  options.appendChild(deletePost);
  options.appendChild(updatePost);
};

// funcion para crear posts
export const crearPost = (docs) => {
  // contenedor de los posts
  const home = document.querySelector('#wallContentDiv');
  const post = document.createElement('div');
  const postImage = document.createElement('img');
  const postDescription = document.createElement('p');
  const likes = document.createElement('div');
  const like = document.createElement('img');
  const countLikes = document.createElement('span');
  const userPic = document.createElement('img');
  const userName = document.createElement('h2');
  const userInfo = document.createElement('div');
  const user = firebase.auth().currentUser;

  // contenido de los posts
  post.classList.add('postContainer');
  postImage.classList.add('postImgs');
  postImage.src = docs.data().postImage;
  postDescription.innerHTML = docs.data().message;
  likes.classList.add('likes');
  like.src = './lib/images/liked.png';
  like.classList.add('like-img', 'likes');
  countLikes.classList.add('likes');
  userPic.src = docs.data().userPhotoURL;
  userPic.classList.add('userImg');
  userName.innerHTML = docs.data().userName;
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
  database.collection('likes').where('post', '==', docs.id).get().then((likeResult) => {
    countLikes.textContent = likeResult.docs.length;
  });

  // give likes
  database.collection('likes').where('post', '==', docs.id).where('user', '==', user.uid).get()
    .then((likeResult) => {
      if (likeResult.docs.length) {
        like.src = './lib/images/likedred.png';
        isLike = true;
        idLike = likeResult.docs[0].id;
      }
    });

  like.addEventListener('click', () => {
    database.collection('likes').where('post', '==', docs.id).where('user', '==', user.uid).get()
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
            post: docs.id,
          });
          isLike = true;
        }
        // count likes
        database.collection('likes').where('post', '==', docs.id).get().then((likeRslt) => {
          countLikes.textContent = likeRslt.docs.length;
        });
      });
  });
};

export const getDocument = () => firebase.firestore()
  .collection('posts')
  .get()
  .then((snapshot) => {
    snapshot.docs.forEach((docs) => {
      crearPost(docs);
    });
  });

export const getDocumentProfile = () => firebase.firestore()
  .collection('posts')
  .get()
  .then((snapshot) => {
    snapshot.docs.forEach((docs) => {
      const user = firebase.auth().currentUser;
      const perfil = docs.data().userName;
      if (perfil === user.displayName) {
        perfilPost(docs);
      }
    });
  });

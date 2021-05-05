import { posts } from './templateHome.js';
import { logOut } from '../firebase/firebase-auth.js';

export const editPosts = (docID, message, postImage) => {
  const divEditPost = document.createElement('div');
  divEditPost.setAttribute('class', 'posts');
  const viewEditPost = `
  <img src="./lib/images/titulo.png" class="header" alt="">
  <img src="./lib/images/logout.png" id="toLogOut" alt="">
  <h1>Editar publicación</h1>
      
          <div class="newPostContent">
              <div class="postImgDiv">
                <img src="${postImage}" class="imgNewPost" id="imgToPost">
              </div>
              <textarea id="newPostText" name="newPostText" class="newPostTextInput" rows="4" cols="50">${message}</textarea>
              <input type="submit" value="Guardar cambios" class="postButton" id="saveChangesBtn">
          </div>
      </main>
      
      <div id="footer">
  <img src="./lib/images/home.webp" class="item" id="wall" alt="">
  <img src="./lib/images/plus.webp" class="item" id="add" alt="">
  <img src="./lib/images/profile.png" class="item" id="profile" alt="">
  </div>

      <div>`;

  divEditPost.innerHTML = viewEditPost;

  // Variables globales a utilizar
  const database = firebase.firestore();
  const saveChangesBtn = divEditPost.querySelector('#saveChangesBtn');
  const out = divEditPost.querySelector('#toLogOut');
  const wall = divEditPost.querySelector('#wall');
  const add = divEditPost.querySelector('#add');
  const profile = divEditPost.querySelector('#profile');

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

  // función para guardar el valor del mensaje editado
  saveChangesBtn.addEventListener('click', () => {
    const postDescription = divEditPost.querySelector('#newPostText').value;

    // función para actualizar mensaje editado en firebase
    database
      .collection('posts')
      .doc(docID)
      .update({
        message: postDescription,
      })
      .then(() => {
        const root = document.getElementById('root');
        root.innerHTML = '';
        root.appendChild(posts());
      });
  });

  return divEditPost;
};

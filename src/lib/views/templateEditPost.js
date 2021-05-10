import { logOut } from '../firebase/firebase-auth.js';

export const editPosts = (docID, message) => {
  const divEditPost = document.createElement('div');
  divEditPost.setAttribute('class', 'posts');
  const viewEditPost = `
   <img src="./lib/images/logout.png" id="toLogOut" alt="">

  <h1>Editar publicación</h1>
          <div class="newPostContent">
              <textarea id="newPostText" name="newPostText" class="newPostTextInput" rows="4" cols="50">${message}</textarea>
              <input type="submit" value="Guardar cambios" class="button" id="saveChangesBtn">
          </div>`;

  divEditPost.innerHTML = viewEditPost;

  const out = divEditPost.querySelector('#toLogOut');
  out.addEventListener('click', () => {
    logOut();
  });

  return divEditPost;
};

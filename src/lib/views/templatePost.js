import {uploadImg} from '../firebase/firebase-firestore.js';

export const newpost = () => {
  const divNewpost = document.createElement('div');
  divNewpost.classList.add('container', 'containerHome');
  const viewNewpost = `

  <a href="#/home" class="close-modal">x</a>
  <input type="file"  id="file">
  <img id="image"/>
  <textarea id="textBox" cols="30" rows="10"></textarea>
  <button id="uploadPost">Cargar</button>
  `;
  divNewpost.innerHTML = viewNewpost;

  const uploadPost = divNewpost.querySelector('#uploadPost');
  uploadPost.addEventListener('click', () => {
    uploadImg();
  });




  return divNewpost;
};

export const newPost = () => {
  
}

import {uploadImg} from '../firebase/firebase-firestore.js';

export const newpost = () => {
  const divPost = document.createElement('div');
  divPost.classList.add('container', 'containerHome');
  const viewNewpost = `

  <a href="#/home" class="close-modal">x</a>
  <progress value="0" id="uploader"></progress>
  <input type="file"  id="file">
  <img id="image"/>
  <textarea id="textBox" cols="30" rows="10"></textarea>
  <button id="uploadPost">Cargar</button>
  `;
  divPost.innerHTML = viewNewpost;



  return divPost;
};


export const editPost = () => {
  
}

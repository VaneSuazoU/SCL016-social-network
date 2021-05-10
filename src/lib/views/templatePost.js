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

  const uploader = document.getElementById('uploader');
  const fileButton = document.getElementById('uploadPost');
  fileButton.addEventListener('change', () => {
    const file = e.target.files[0];

  })


  return divPost;
};


export const editPost = () => {
  
}

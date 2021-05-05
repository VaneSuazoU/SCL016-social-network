import { logOut } from '../firebase/firebase-auth.js';

export const newPost = () => {
  const divNewPost = document.createElement('div');
  divNewPost.classList.add('container', 'posts');
  const viewNewPost = `
  <img src="./lib/images/titulo.png" class="header" alt="">
  <img src="./lib/images/logout.png" id="toLogOut" alt="">
  <h1>Crea tu publicación</h1>
        
            <div class="newPost">
              Adjunta una foto
              <img src="./lib/images/plus.webp" alt="adjuntarArchivo" id="selectFile" class="selectFile">
              <input type="file" id="newPostImgFile" class="NewPostImg" value="">
            </div>
  
            <div class="postImgDiv">
              <img src="" class="imgNewPost" id="imgToPost">
            </div>
  
            <textarea id="newPostText" name="newPostText" class="newPostTextInput" rows="4" cols="50" placeholder="Escribe aquí tu mensaje.."></textarea>
            
            <input type="submit" value="Publicar" class="postButton" id="publishBtn">

        <div id="footer">
  <img src="./lib/images/home.webp" class="item" id="wall" alt="">
  <img src="./lib/images/plus.webp" class="item" id="add" alt="">
  <img src="./lib/images/profile.png" class="item" id="profile" alt="">
  </div>
  `;
  divNewPost.innerHTML = viewNewPost;

  const firestore = firebase.firestore();
  const currentUserData = firebase.auth().currentUser;
  const storage = firebase.storage();
  const publishBtn = divNewPost.querySelector('#publishBtn');
  const addPicNewPost = divNewPost.querySelector('#newPostImgFile');
  const out = divNewPost.querySelector('#toLogOut');
  const profile = divNewPost.querySelector('#profile');
  const wall = divNewPost.querySelector('#wall');
  const add = divNewPost.querySelector('#add');

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

  // función para imprimir imagen en la pantalla
  const showImg = (filePath) => {
    const newImgURL = storage.ref(filePath);
    newImgURL.getDownloadURL().then((url) => {
      divNewPost.querySelector('#imgToPost').src = url;
    });
  };

  // función para subir imagen a firebase
  const uploadImg = (file, filePath) => {
    const storageRef = firebase.storage().ref(filePath);
    storageRef.put(file).then(() => {
      showImg(filePath);
    });
  };
  // función para agregar imagen a nuevo post del usuario
  addPicNewPost.addEventListener('change', () => {
    const file = divNewPost.querySelector('#newPostImgFile').files[0];
    const filePath = `postImages/${file.name}${file.lastModified}`;
    uploadImg(file, filePath);
  });

  // función para guardar nuevo post en firebase
  publishBtn.addEventListener('click', () => {
    const file = divNewPost.querySelector('#newPostImgFile').files[0];
    if (file == null) {
      // alert("No has seleccionado una imagen");
    } else {
      const postMessage = divNewPost.querySelector('#newPostText').value;

      const filePath = `postImages/${file.name}${file.lastModified}`;
      const newImgURL = storage.ref(filePath);
      newImgURL
        .getDownloadURL()
        .then((url) => {
          firestore.collection('posts').doc().set({
            userName: currentUserData.displayName,
            date: Date.now(),
            userID: currentUserData.uid,
            postImage: url,
            message: postMessage,
            userPhotoURL: currentUserData.photoURL,
          });
        })
        .then(() => {
          window.location.assign('#/post');
        });
    }
  });

  return divNewPost;
};

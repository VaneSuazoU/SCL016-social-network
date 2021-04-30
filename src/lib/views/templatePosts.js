import { logOut } from '../firebase/firebase-auth.js';

export const post = () => {
    const divPost = document.createElement('div');
    divPost.classList.add('container', 'containerPost');
    const viewPost = `
  
  <img src="./lib/images/logout.png" id="toLogOut" alt="">

  <h1> Hola </h1>
  <ul id="cafe-list"></ul>

  <a href="#/perfil" class="button">Ir al perfil</a>
    `;

    divPost.innerHTML = viewPost;

    const out = divPost.querySelector('#toLogOut');
    out.addEventListener('click', () => {
        logOut();
    });

    const cafeList = divPost.querySelector('#cafe-list');
    const renderCafe = (doc) => {
        let li = document.createElement('li');
        let titulo = document.createElement('span');
        let contenido = document.createElement('span');
        let like = document.createElement('img');

        li.setAttribute('data-id', doc.id);
        titulo.textContent = doc.data().titulo;
        contenido.textContent = doc.data().contenido;
        like.src = "./lib/images/heart.png";
        like.classList.add('like-img');

        li.appendChild(titulo);
        li.appendChild(contenido);
        li.appendChild(like);

        cafeList.appendChild(li);

  // saving data
  like.addEventListener('click', () => {
    like.src = "./lib/images/clicked-heart.png";
    const user = firebase.auth().currentUser;
    database.collection('likes').add({
      like: true,
      user: user.email
    });
  });
/*   like.addEventListener('click', () => {
            console.log('diste un like');
            like.src = "./lib/images/clicked-heart.png";
        });
 */
    }

    let database = firebase.firestore();
    database.collection("publicaciones").get().then((snapshot) => {
        snapshot.docs.forEach((doc) => {
            renderCafe(doc);
        });
    });
    return divPost;
};


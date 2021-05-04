import { logOut } from '../firebase/firebase-auth.js';
import { editPosts } from './prueba2.js';

/* ESTO ES EL PERFIL */
export const perfil = () => {
    const divPerfil = document.createElement('div');
    divPerfil.classList.add('container', 'posts');
    const viewPerfil = `
    <img src="./lib/images/titulo.png" class="header" alt="">
    <img src="./lib/images/logout.png" id="toLogOut" alt="">
    <h1>Tus publicaciones</h1>

  <main id="wallContentDiv" class="wallContent"></main>
  
  <div id="footer">
  <img src="./lib/images/home.webp" class="item" id="muro" alt="">
  <img src="./lib/images/plus.webp" class="item" id="add" alt="">
  <img src="./lib/images/profile.png" class="item" id="profile" alt="">
  </div>`;

    divPerfil.innerHTML = viewPerfil;
    //Variables globales a utilizar
    const firestore = firebase.firestore();
    const user = firebase.auth().currentUser;
    const profile = divPerfil.querySelector('#profile');
    const out = divPerfil.querySelector('#toLogOut');
    const muro = divPerfil.querySelector('#muro');
    const add = divPerfil.querySelector('#add');

    profile.addEventListener('click', () => {
        window.open('#/profile', '_self');
    });
    out.addEventListener('click', () => {
        logOut();
    });
    muro.addEventListener('click', () => {
        window.open('#/post', '_self');
    });
    add.addEventListener('click', () => {
        window.open('#/newPost', '_self');
    });

    //función para ordenar los posts por hora de publicación y crear el contenido de los posts
    firestore.collection("posts").where('userName', '==', 'meme time').get().then((snapshot) => {
            divPerfil.querySelector('#wallContentDiv').innerHTML = "";
            snapshot.forEach((doc) => {
                
                let usuario = divPerfil.querySelector("#wallContentDiv");
                let fotousuario = document.createElement("img"); 
                let nombreusuario = document.createElement("p");
                fotousuario.src = doc.data().userPhotoURL;
                nombreusuario.innerHTML = doc.data().userName;

                let posts  = divPerfil.querySelector("#wallContentDiv");

                //contenedor de los posts
                let home = divPerfil.querySelector("#wallContentDiv");
                let post = document.createElement("div");
                //contenido del header
                let header = document.createElement("header");
                let userPic = document.createElement("img"); 
                //contenido de los posts
                let postImage = document.createElement("img");
                //contenido del footer de los posts
                let footer = document.createElement("footer");
                let divContent = document.createElement("div");
                let rowDiv = document.createElement("div");
                let postUserName = document.createElement("h2");
                let postDescription = document.createElement("p");
                let headerUserName = document.createElement("p");
                
               
                //agregar atributos de clase e id para manupular estilo y eventos
                post.setAttribute("class", "post");
                headerUserName.setAttribute("class", "headerUserName");
                header.setAttribute("class", "postHeader");
                userPic.setAttribute("class", "postProfilePicture");
                postImage.setAttribute("class", "imgPost");
                footer.setAttribute("class", "postFooter");
                divContent.setAttribute("class", "footerRowDiv");
                postUserName.setAttribute("class", "postUserName");
                postDescription.setAttribute("class", "postComment");


                //orden de los contenedores 
                home.appendChild(post);
                post.appendChild(header);
                post.appendChild(postImage);
                post.appendChild(footer);
                footer.appendChild(divContent);
                footer.appendChild(rowDiv);
                rowDiv.appendChild(postUserName);
                rowDiv.appendChild(postDescription);
                userPic.src = doc.data().userPhotoURL;
                headerUserName.innerHTML = doc.data().userName;
                header.appendChild(userPic);
                header.appendChild(headerUserName);

                postImage.src = doc.data().postImage;
                postUserName.innerHTML = doc.data().userName;
                postDescription.innerHTML = doc.data().message;

                let eliminar = document.createElement('img');
                eliminar.src = "./lib/images/delete.jpg";
                eliminar.classList.add('papelera');
                header.appendChild(eliminar); 
            
               //eliminar post 

                eliminar.addEventListener('click', (e) => {
                    if (doc.data().userID === user.uid) {
                        e.stopPropagation();
                        let docID = doc.id;
                        firestore
                            .collection('posts')
                            .doc(docID)
                            .delete()
                            .then(() => { })
                            .catch((error) => {
                                console.error("Error removing document: ", error);
                            });
                    } 
                })

                //función para editar los post del usuario activo
                let editPost = document.createElement('img');
                editPost.setAttribute('class', 'postMenu');
                editPost.setAttribute('id', 'postMenu');
                editPost.setAttribute('src', './lib/images/plus.webp');
                divContent.appendChild(editPost);

                editPost.onclick = () => {
                    let docID = doc.id;
                    let message = doc.data().message;
                    let postImage = doc.data().postImage;
                    redirection(docID, message, postImage);
                };
                //Función para enviar a editar post
                const redirection = (docID, message, postImage) => {
                    const root = document.getElementById("root");
                    root.innerHTML = "";
                    root.appendChild(editPosts(docID, message, postImage));
                };
            });
        });
    return divPerfil;
};

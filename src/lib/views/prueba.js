import { logOut } from '../firebase/firebase-auth.js';

/* ESTO ES EL MURO */
export const home = () => {
    const divHome = document.createElement('div');
    divHome.classList.add('container', 'posts');
    const viewHome = `
    <img src="./lib/images/titulo.png" class="header" alt="">
    <img src="./lib/images/logout.png" id="toLogOut" alt="">
    <h1>Bienvenido a MemeTime</h1>

    
  <main id="wallContentDiv" class="wallContent"></main>
  
  <div id="footer">
  <img src="./lib/images/home.webp" class="item" id="muro" alt="">
  <img src="./lib/images/plus.webp" class="item" id="add" alt="">
  <img src="./lib/images/profile.png" class="item" id="profile" alt="">
  </div>`;

    divHome.innerHTML = viewHome;
    //Variables globales a utilizar
    const firestore = firebase.firestore();
    const user = firebase.auth().currentUser;
    const profile = divHome.querySelector('#profile');
    const out = divHome.querySelector('#toLogOut');
    const muro = divHome.querySelector('#muro');
    const add = divHome.querySelector('#add');

    profile.addEventListener('click', () => {
        window.open('#/perfil', '_self');
    });
    out.addEventListener('click', () => {
        logOut();
    });
    muro.addEventListener('click', () => {
        window.open('#/perfil', '_self');
    });
    add.addEventListener('click', () => {
        window.open('#/newPost', '_self');
    });

    //función para ordenar los posts por hora de publicación y crear el contenido de los posts
    firestore
        .collection('posts')
        .orderBy('date', 'desc')
        .onSnapshot((querySnapshot) => {
            divHome.querySelector('#wallContentDiv').innerHTML = "";
            querySnapshot.forEach((doc) => {
                //contenedor de los posts
                let home = divHome.querySelector("#wallContentDiv");
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
               
                let like = document.createElement('img');
                let countLikes = document.createElement('span');

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
                like.src = "./lib/images/liked.png";
                like.classList.add('like-img', 'likes');
                countLikes.classList.add('likes');

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
                header.appendChild(like);
                header.appendChild(countLikes);
                postImage.src = doc.data().postImage;
                postUserName.innerHTML = doc.data().userName;
                postDescription.innerHTML = doc.data().message;

/*                 let eliminar = document.createElement('img');
                eliminar.src = "./lib/images/delete.jpg";
                eliminar.classList.add('papelera');
                header.appendChild(eliminar); */
                // count likes
                let database = firebase.firestore();
                let isLike = false;
                let idLike;
                database.collection("likes").where('post', '==', doc.id).get().then((likeResult) => {
                    countLikes.textContent = likeResult.docs.length;
                })

                // give likes
                database.collection("likes").where('post', '==', doc.id).where('user', '==', user.uid).get().then((likeResult) => {
                    if (likeResult.docs.length) {
                        like.src = "./lib/images/likedred.png";
                        isLike = true;
                        idLike = likeResult.docs[0].id;
                    }
                })

                like.addEventListener('click', () => {
                    database.collection("likes").where('post', '==', doc.id).where('user', '==', user.uid).get().then((likeResult) => {
                        if (likeResult.docs.length) {
                            like.src = "./lib/images/likedred.png";
                            isLike = true;
                            idLike = likeResult.docs[0].id;
                        }
                        if (isLike) {
                            database.collection('likes').doc(idLike).delete();
                            like.src = "./lib/images/liked.png";
                            isLike = false;
                        } else {
                            like.src = "./lib/images/likedred.png";
                            database.collection('likes').add({
                                user: user.uid,
                                post: doc.id
                            });
                            isLike = true;
                        }
                        // count likes
                        database.collection("likes").where('post', '==', doc.id).get().then((likeResult) => {
                            countLikes.textContent = likeResult.docs.length;
                        })
                    });
                });
               /*  //eliminar post 

                eliminar.addEventListener('click', () => {
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
                    } else {
                        console.log('no puedes eliminar');
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
                    root.appendChild(editPost(docID, message, postImage));
                }; */
            });
        });
    return divHome;
};

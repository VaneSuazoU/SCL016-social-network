export const deletePosts = (id) => firebase.firestore().collection('posts').doc(id).delete();

/*   // Función para enviar a editar post
  export const redirection = (docID, message, postImages) => {
    const root = document.getElementById('root');
    root.innerHTML = '';
    root.appendChild(editPosts(docID, message, postImages));
  }; */

export const newPosts = (docID) => firebase.firestore().collection('posts').doc(docID).update({
  message: postDescription,
});


const posts = firebase.firestore();
      return posts.collection('posts').doc().set({
        nombre: username,
        email,
        postContent: biograph,
      });


/* Firestore */
/* let database = firebase.firestore(); 


database.collection("user").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
       //  doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
    });
});
 
*/
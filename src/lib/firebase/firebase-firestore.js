/* const posts = firebase.firestore();
return posts.collection('posts').doc().set({
  nombre: username,
  email,
  postContent: biograph,
});

*/
/* Firestore */
/* let database = firebase.firestore(); 


database.collection("user").get().then((querySnapshot) => {
  querySnapshot.forEach((doc) => {
    //  doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
  });
});

*/

export const uploadImg = () => {
  const ref = firebase.storage().ref();
  const file = document.getElementById('file').files [0];
  const name = new Date() + '-' + file.name;
  const metadata = {
    contentType: file.type
  }
  const task = ref.child(name).put(file,metadata )
  task
  .then(snapshot => snapshot.ref.getDownloadURL())
  .then(url => {
    console.log(url)
    alert("imagen subida correctamente")
    const img = document.getElementById('image')
    img.src = url
  })
}
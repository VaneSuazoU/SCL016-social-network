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
/* const renderCafe = (doc) => {
  const li = document.createElement('li');
  const name = document.createElement('span');
  const city = document.createElement('span');

  li.setAttribute('data-id', doc.id);
  name.textContent = doc.data().name;
  city.textContent = doc.data().city;

  li.appendChild(name);
  li.appendChild(city);

  cafeList.appendChild(li);
};

const database = firebase.firestore();
database.collection('prueba').get().then((snapshot) => {
  snapshot.docs.forEach((doc) => {
    renderCafe(doc);
  });
});
 */

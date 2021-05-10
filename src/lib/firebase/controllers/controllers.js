export const deletePosts = (id) => firebase.firestore().collection('posts').doc(id).delete();

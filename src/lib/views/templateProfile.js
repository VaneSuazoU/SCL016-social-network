export const profile = () => {
  const divProfile = document.createElement('div');
  divProfile.classList.add('container');
  const viewProfile = `
  <h1>Hola</h1>
  <footer id="directacces">
  <a href="#/home"><img src="./lib/images/home.png" id="home"></a>
  <a href="#/newpost"><img src="./lib/images/añadir.png" id="newPost"></a>
  <a href="#/profile"><img src="./lib/images/perfil.png" id="profile"></a>
  </footer>`;

  divProfile.innerHTML = viewProfile;



  return divProfile;
};
export const muro = () => {
  const divMuro = document.createElement('div');
  const viewMuro = `
    
    <input type="text" id ="username" placeholder="Tú nombre aquí">
    <input type="email" id ="email" placeholder="Tú email aquí">
    <input type="password" id ="password" placeholder="Tú contraseña aquí">
    <button id="send">Registrar</button>
    <p class="error"></p>
    
    <h2>¿Ya tienes una cuenta?</h2>
    <a href="#/">Inicia sesión</a>
    
    <img src="./lib/images/footer.png" class="title" alt="">`;

  divMuro.innerHTML = viewMuro;

  return divMuro;
};

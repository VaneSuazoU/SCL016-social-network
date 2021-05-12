export const error = () => {
  const divError = document.createElement('div');
  divError.classList.add('container');
  const viewError = '<img src="./lib/images/error.png" id="img-error" alt="">';

  divError.innerHTML = viewError;

  return divError;
};

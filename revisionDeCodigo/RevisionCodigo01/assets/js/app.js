const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('.name');
// Se cambió el tipo de datos
const $b = document.querySelector('.blog');
const $l = document.querySelector('.location');

//Se modificó el tipo de función (async) 
async function displayUser(username) {
  $n.textContent = 'cargando...';
  //Dentro de try añadimos la condicional if
  try {
    const response = await fetch(`${usersEndpoint}/${username}`);
    if (!response.ok) throw new Error('Usuario no encontrado');
    const data = await response.json();
    //Se corrigen las comillas '' por `
    $n.textContent = `${data.name}`;
    $b.textContent = `${data.blog}`;
    $l.textContent = `${data.location}`;
  } catch (err) {
    console.log('OH NO', err);
    $n.textContent = `Algo salio mal: ${err.message}`;
  }
}

  displayUser('MitziMartinez');

  //No tienes blog :(
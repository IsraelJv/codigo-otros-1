const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;

const nameDocument = document.querySelector('#name');
const blogDocument = document.querySelector('#blog');
const locationDocument = document.querySelector('#location');

const displayUser = async (username) => {
  try {
    const response = await fetch(`${usersEndpoint}/${username}`);
    const data = await response.json();

    console.log(data);
    
    const { name, blog, location } = data;
    nameDocument.textContent = name || 'Nombre no encontrado';
    blogDocument.textContent = blog || 'Blog no encontrado';
    locationDocument.textContent = location || 'Localización no encontrada';
  } catch (err) {
    console.log('Algo explotó', err);
    nameDocument.textContent = `Algo salió mal: ${err.message}`;
  }
}

displayUser('stolinski');
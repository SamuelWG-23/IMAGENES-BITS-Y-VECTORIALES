let idIterator = 1;
const selectorValue = document.getElementById('number');

selectorValue.addEventListener('change', function () {
  const numImg = parseInt(this.value);
  showingImages(numImg)
});


function showingImages(numberImages) {
  let contenidoTabla = document.getElementById('table');
  contenidoTabla.innerHTML = `
    <table id="table">
      <tr>
        <th>Image</th>
        <th>ID</th>
        <th>Description</th>
      </tr>
    </table>`;
  for (let i = 0; i < numberImages; i++) {
    let randomIdImage = Math.floor(Math.random() * 200);
    let nuevaFila = document.createElement('tr');
    nuevaFila.innerHTML = `
      <tr>
        <th><img src="https://picsum.photos/id/${randomIdImage}/200/300" loading="lazy"></img></th>
        <th>${randomIdImage}</th>
        <th>Imagen ${i+1 }</th>
      </tr>
      `;
    idIterator++;
    contenidoTabla.appendChild(nuevaFila);
  }
}

document.addEventListener('DOMContentLoaded', () => showingImages(5));






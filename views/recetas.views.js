import { createPage, createRecetaList } from "../pages/recetas.utils.js";
import axios from 'axios';


function createRecetaListPage(recetas) {
  let html = `
    <style>
      a {
        text-decoration: none;
        font-family: 'Montserrat', sans-serif;
      }
      nav {
        background-color: #333;
        color: #fff;
        padding: 10px;
      }
      ul {
        list-style: none;
      }
      li {
        margin-bottom: 10px;
      }
      .button {
        margin-left: 10px;
      }

      .boton-crear {
        display: flex;
        justify-content: center;
        background-color: green;
        padding: 20px;
        border-radius: 10px;
        margin-top: 100px;
        color: white;
      }

      h1 {
        text-align: center;
        font-family: 'montserrat', sans-serif;
      }

      nav ul {
        display: flex;
        justify-content: center;
      }

      nav ul li a {
        text-decoration: none;
        color: white;
        margin: 10px;
      }

      .recetas-total {
        margin-top: 40px;
      }

      #editar {
        background-color: black;
        color: white;
        padding: 4px;
      }

      #eliminar {
        background-color: red;
        color: white;
        padding: 4px;
      }
    </style>

    <nav>
      <ul>
        <li><a href="/recetas">Recetas</a></li>
        <li><a href="/vegetarianas">Vegetarianas</a></li>
        <li><a href="/veganas">Veganas</a></li>
        <li><a href="/no-gluten">No gluten</a></li>
        <li><a href="/no-lactosa">No lactosa</a></li>
      </ul>
    </nav>
    <ul>`;
  html += '<h1>Lista de recetas</h1>';

  html += `
    <li>
      <a href="/recetas/nuevo" class="boton-crear">Crear Nueva Receta</a>
    </li>
    `;

  for (let i = 0; i < recetas.length; i++) {
    html += `
      <li class="recetas-total">
        <a href="/recetas/${recetas[i]._id}">${recetas[i].name}</a>
        <a href="/recetas/editar/${recetas[i]._id}" class="button" id="editar">Editar</a>
        <a href="/recetas/eliminar/${recetas[i]._id}" class="button" id="eliminar">Eliminar</a>
      </li>`;
  }

  html += `</ul>`;
  return createPage('', html);
}

function createRecetaDetallePage(receta) {
  let html = '';
  if (receta) {
    html += `<p>ID: ${receta._id}</p>`;
    html += `<p>Nombre: ${receta.name}</p>`;
    html += `<p>Descripción: ${receta.description}</p>`;
    html = createPage(`${receta.name}`, html);
  } else {
    html = createPage('Error', '<p>No se encontró la receta</p>');
  }
  return html;
}

function createRecetaFormPage() {
  let html = "<h1>Crear Receta</h1>";
  html += '<form action="/api/recetas/" method="POST">';
  html += '<input type="text" name="name" placeholder="Nombre">';
  html += '<input type="text" name="img" placeholder="Imagen">';
  html += '<input type="text" name="description" placeholder="Descripción">';
  html += '<input type="text" name="ingredients" placeholder="Ingredientes">';
  html += '<input type="text" name="link" placeholder="Link">';
  html += '<input type="text" name="categoria" placeholder="Categoría">';
  html += '<button type="submit">Crear</button>';
  html += "</form>";
  return createPage("", html);
}



function createPaginaError(title, errorMessage) {
  const html = `
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${title}</title>
    </head>
    <body>
      <h1>${title}</h1>
      <p>${errorMessage}</p>
    </body>
    </html>
  `;

  return html;
}

function createPaginaRecetasVegetarianas(recetas) {
  let html = `
    <style>
      a {
        text-decoration: none;
        font-family: 'Montserrat', sans-serif;
      }
      nav {
        background-color: #333;
        color: #fff;
        padding: 10px;
      }
      ul {
        list-style: none;
      }
      li {
        margin-bottom: 10px;
      }
      .button {
        margin-left: 10px;
      }

      .boton-crear {
        display: flex;
        justify-content: center;
        background-color: green;
        padding: 20px;
        border-radius: 10px;
        margin-top: 100px;
        color: white;
      }

      h1 {
        text-align: center;
        font-family: 'montserrat', sans-serif;
      }

      nav ul {
        display: flex;
        justify-content: center;
      }

      nav ul li a {
        text-decoration: none;
        color: white;
        margin: 10px;
      }

      .recetas-total {
        margin-top: 40px;
      }

      #editar {
        background-color: black;
        color: white;
        padding: 4px;
      }

      #eliminar {
        background-color: red;
        color: white;
        padding: 4px;
      }
    </style>

    <nav>
      <ul>
        <li><a href="/recetas">Recetas</a></li>
        <li><a href="/vegetarianas">Vegetarianas</a></li>
        <li><a href="/veganas">Veganas</a></li>
        <li><a href="/no-gluten">No gluten</a></li>
        <li><a href="/no-lactosa">No lactosa</a></li>
      </ul>
    </nav>
    <ul>`;
  html += '<h1>Recetas vegetarianas</h1>';

  html += `
    <li>
      <a href="/vegetarianas/nuevo" class="boton-crear">Crear Nueva Receta</a>
    </li>
    `;

  for (let i = 0; i < recetas.length; i++) {
    html += `
      <li class="recetas-total">
        <a href="/vegetarianas/${recetas[i]._id}">${recetas[i].name}</a>
        <a href="/vegetarianas/${recetas[i]._id}/editar" class="button" id="editar">Editar</a>
        <a href="/vegetarianas/${recetas[i]._id}/eliminar" class="button" id="eliminar">Eliminar</a>
      </li>`;
  }

  html += `</ul>`;
  return createPage('', html);
}

function createPaginaRecetasVeganas(recetas) {
  let html = `
    <style>
      a {
        text-decoration: none;
        font-family: 'Montserrat', sans-serif;
      }
      nav {
        background-color: #333;
        color: #fff;
        padding: 10px;
      }
      ul {
        list-style: none;
      }
      li {
        margin-bottom: 10px;
      }
      .button {
        margin-left: 10px;
      }

      .boton-crear {
        display: flex;
        justify-content: center;
        background-color: green;
        padding: 20px;
        border-radius: 10px;
        margin-top: 100px;
        color: white;
      }

      h1 {
        text-align: center;
        font-family: 'montserrat', sans-serif;
      }

      nav ul {
        display: flex;
        justify-content: center;
      }

      nav ul li a {
        text-decoration: none;
        color: white;
        margin: 10px;
      }

      .recetas-total {
        margin-top: 40px;
      }

      #editar {
        background-color: black;
        color: white;
        padding: 4px;
      }

      #eliminar {
        background-color: red;
        color: white;
        padding: 4px;
      }
    </style>

    <nav>
      <ul>
        <li><a href="/recetas">Recetas</a></li>
        <li><a href="/vegetarianas">Vegetarianas</a></li>
        <li><a href="/veganas">Veganas</a></li>
        <li><a href="/no-gluten">No gluten</a></li>
        <li><a href="/no-lactosa">No lactosa</a></li>
      </ul>
    </nav>
    <ul>`;
  html += '<h1>Recetas veganas</h1>';

  html += `
    <li>
      <a href="/veganas/nuevo" class="boton-crear">Crear Nueva Receta</a>
    </li>
    `;

  for (let i = 0; i < recetas.length; i++) {
    html += `
      <li class="recetas-total">
        <a href="/veganas/${recetas[i]._id}">${recetas[i].name}</a>
        <a href="/veganas/${recetas[i]._id}/editar" class="button" id="editar">Editar</a>
        <a href="/veganas/${recetas[i]._id}/eliminar" onclick="eliminarReceta('${recetas[i]._id} class="button" id="eliminar">Eliminar</a>
      </li>`;
  }

  html += `</ul>`;
  return createPage('', html);
}

function createPaginaRecetasNoLactosa(recetas) {
  let html = `
    <style>
      a {
        text-decoration: none;
        font-family: 'Montserrat', sans-serif;
      }
      nav {
        background-color: #333;
        color: #fff;
        padding: 10px;
      }
      ul {
        list-style: none;
      }
      li {
        margin-bottom: 10px;
      }
      .button {
        margin-left: 10px;
      }

      .boton-crear {
        display: flex;
        justify-content: center;
        background-color: green;
        padding: 20px;
        border-radius: 10px;
        margin-top: 100px;
        color: white;
      }

      h1 {
        text-align: center;
        font-family: 'montserrat', sans-serif;
      }

      nav ul {
        display: flex;
        justify-content: center;
      }

      nav ul li a {
        text-decoration: none;
        color: white;
        margin: 10px;
      }

      .recetas-total {
        margin-top: 40px;
      }

      #editar {
        background-color: black;
        color: white;
        padding: 4px;
      }

      #eliminar {
        background-color: red;
        color: white;
        padding: 4px;
      }
    </style>

    <nav>
      <ul>
        <li><a href="/recetas">Recetas</a></li>
        <li><a href="/vegetarianas">Vegetarianas</a></li>
        <li><a href="/veganas">Veganas</a></li>
        <li><a href="/no-gluten">No gluten</a></li>
        <li><a href="/no-lactosa">No lactosa</a></li>
      </ul>
    </nav>
    <ul>`;
  html += '<h1>Recetas sin lactosa</h1>';

  html += `
    <li>
      <a href="/recetas/nuevo" class="boton-crear">Crear Nueva Receta</a>
    </li>
    `;

  for (let i = 0; i < recetas.length; i++) {
    html += `
      <li class="recetas-total">
        <a href="/no-lactosa/${recetas[i]._id}">${recetas[i].name}</a>
        <a href="/no-lactosa/${recetas[i]._id}/editar" class="button" id="editar">Editar</a>
        <a href="/no-lactosa/${recetas[i]._id}/eliminar" class="button" id="eliminar">Eliminar</a>
      </li>`;
  }

  html += `</ul>`;
  return createPage('', html);
}

function createPaginaRecetasNoGluten(recetas) {
  let html = `
    <style>
      a {
        text-decoration: none;
        font-family: 'Montserrat', sans-serif;
      }
      nav {
        background-color: #333;
        color: #fff;
        padding: 10px;
      }
      ul {
        list-style: none;
      }
      li {
        margin-bottom: 10px;
      }
      .button {
        margin-left: 10px;
      }

      .boton-crear {
        display: flex;
        justify-content: center;
        background-color: green;
        padding: 20px;
        border-radius: 10px;
        margin-top: 100px;
        color: white;
      }

      h1 {
        text-align: center;
        font-family: 'montserrat', sans-serif;
      }

      nav ul {
        display: flex;
        justify-content: center;
      }

      nav ul li a {
        text-decoration: none;
        color: white;
        margin: 10px;
      }

      .recetas-total {
        margin-top: 40px;
      }

      #editar {
        background-color: black;
        color: white;
        padding: 4px;
      }

      #eliminar {
        background-color: red;
        color: white;
        padding: 4px;
      }
    </style>

    <nav>
      <ul>
        <li><a href="/recetas">Recetas</a></li>
        <li><a href="/vegetarianas">Vegetarianas</a></li>
        <li><a href="/veganas">Veganas</a></li>
        <li><a href="/no-gluten">No gluten</a></li>
        <li><a href="/no-lactosa">No lactosa</a></li>
      </ul>
    </nav>
    <ul>`;
  html += '<h1>Recetas sin gluten</h1>';

  html += `
    <li>
      <a href="/recetas/nuevo" class="boton-crear">Crear Nueva Receta</a>
    </li>
    `;

  for (let i = 0; i < recetas.length; i++) {
    html += `
      <li class="recetas-total">
        <a href="/no-gluten/${recetas[i]._id}">${recetas[i].name}</a>
        <a href="/no-gluten/${recetas[i]._id}/editar" class="button" id="editar">Editar</a>
        <a href="/no-gluten/${recetas[i]._id}/eliminar" class="button" id="eliminar">Eliminar</a>
      </li>`;
  }

  html += `</ul>`;
  return createPage('', html);
}

function mostrarFormularioEdicion(receta) {
  return `
    <form method="POST" action="/recetas/${receta._id}/editar">
      <label for="nombre">Nombre:</label>
      <input type="text" name="nombre" value="${receta.name}">
      <label for="ingredientes">Ingredientes:</label>
      <textarea name="ingredientes">${receta.ingredientes}</textarea>
      <label for="descripcion">Descripción:</label>
      <textarea name="descripcion">${receta.description}</textarea>
      <button type="submit">Guardar cambios</button>
    </form>
  `;
}


function crearFormularioEliminar(receta) {
  return `
    <form method="DELETE" action="/veganas/${receta._id}/eliminar">
      <p>¿Estás seguro de que deseas eliminar la receta "${receta.name}"?</p>
      <button type="submit">Eliminar</button>
    </form>
  `;
}

const crearFormularioEdicion = (receta) => {
  return `
    <html>
      <head>
        <title>Editar Receta</title>
      </head>
      <body>
        <h1>Editar Receta</h1>
        <form action="/${receta._id}/editar" method="POST">
          <label for="name">Nombre:</label>
          <input type="text" id="name" name="name" value="${receta.name}" required><br>

          <label for="description">Descripción:</label>
          <textarea id="description" name="description" required>${receta.description}</textarea><br>

          <label for="ingredients">Ingredientes:</label>
          <textarea id="ingredients" name="ingredients" required>${receta.ingredientes}</textarea><br>

          <label for="instructions">Instrucciones:</label>
          <textarea id="categoria" name="categoria" required>${receta.categoria}</textarea><br>

          <button type="submit">Guardar Cambios</button>
        </form>
      </body>
    </html>
  `;
};

// Formulario de Creación
function createForm() {
  return `
    <!DOCTYPE html>
    <html lang="es">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Crear Receta</title>
      </head>
      <body>
        <h1>Crear Receta</h1>
        <form action="/api/recetas/nuevo" method="POST">
          <label for="name">Nombre:</label>
          <input type="text" id="name" name="name" required><br>

          <label for="img">Imagen:</label>
          <input type="text" id="img" name="img"><br>

          <label for="description">Descripción:</label>
          <textarea id="description" name="description"></textarea><br>

          <label for="ingredients">Ingredientes:</label>
          <textarea id="ingredients" name="ingredients" required></textarea><br>

          <label for="link">Enlace:</label>
          <input type="text" id="link" name="link"><br>

          <label for="categoria">Categoría:</label>
          <input type="text" id="categoria" name="categoria"><br>

          <button type="submit">Crear recetas</button>
        </form>
      </body>
    </html>
  `;
}


function editForm(receta) {
  return `
    <!DOCTYPE html>
    <html lang="es">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Editar Receta</title>
      </head>
      <body>
        <h1>Editar Receta</h1>
        <form id="editarForm">
          <label for="name">Nombre:</label>
          <input type="text" id="name" name="name" value="${receta.name}" required><br>

          <label for="description">Descripción:</label>
          <textarea id="description" name="description" required>${receta.description}</textarea><br>

          <label for="ingredients">Ingredientes:</label>
          <textarea id="ingredients" name="ingredients" required>${receta.ingredientes}</textarea><br>

          <label for="link">Enlace:</label>
          <input type="text" id="link" name="link" value="${receta.link || ''}"><br>

          <label for="categoria">Categoría:</label>
          <input type="text" id="categoria" name="categoria" value="${receta.categoria || ''}"><br>

          <button type="button" onclick="guardarCambios('${receta._id}')">Guardar Cambios</button>
        </form>

        <script>
          function guardarCambios(id) {
            const form = document.getElementById('editarForm');
            const formData = new FormData(form);
            const data = {};

            formData.forEach((value, key) => {
              data[key] = value;
            });

            if (confirm('¿Estás seguro de que deseas guardar los cambios?')) {
              fetch(\`/api/recetas/\${id}\`, {
                method: 'PUT',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
              })
                .then(response => {
                  if (!response.ok) {
                    throw new Error('Error al guardar los cambios');
                  }
                  // Realizar alguna acción adicional si es necesario
                  window.location.href = '/recetas'; // Redirige a la página de recetas, por ejemplo
                })
                .catch(error => {
                  console.error('Error:', error);
                  // Manejar el error de acuerdo a tus necesidades
                });
            }
          }
        </script>
      </body>
    </html>
  `;
}



function eliminarForm(receta) {
  return `
    <!DOCTYPE html>
    <html lang="es">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Eliminar Receta</title>
      </head>
      <body>
        <h1>Eliminar Receta</h1>
        <p>¿Estás seguro de que deseas eliminar la receta "${receta.name}"?</p>
        <button type="button" onclick="eliminarReceta('${receta._id}')">Eliminar</button>
        <script>
          function eliminarReceta(id) {
            if (confirm('¿Estás seguro de que deseas eliminar la receta?')) {
              fetch(\`http://localhost:3333/api/recetas/\${id}\`, {
                method: 'DELETE',
                headers: {
                  'Content-Type': 'application/json',
                },
              })
                .then(response => {
                  if (!response.ok) {
                    throw new Error('Error al eliminar la receta');
                  }
                  // Realizar alguna acción adicional si es necesario
                  window.location.href = '/recetas'; // Redirige a la página de recetas, por ejemplo
                })
                .catch(error => {
                  console.error('Error:', error);
                  // Manejar el error de acuerdo a tus necesidades
                });
            }
          }
        </script>
      </body>
    </html>
  `;
}









export {
  createPaginaRecetasNoLactosa,
  createPaginaRecetasNoGluten,
  createPaginaRecetasVeganas,
  createPaginaRecetasVegetarianas,
  createPaginaError,
  createRecetaListPage,
  createRecetaDetallePage,
  createRecetaFormPage,
  mostrarFormularioEdicion,
  crearFormularioEliminar,
  crearFormularioEdicion,
  createForm,
  createPage, 
  createRecetaList,
  editForm,
  eliminarForm

};
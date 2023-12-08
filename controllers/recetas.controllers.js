import * as service from "../services/recetas.services.js";
import * as view from '../views/recetas.views.js';

const obtenerTodasLasRecetas = (req, res, next) => {
  const isApiRequest = req.path.startsWith('/api/');

  service.obtenerRecetasPorColecciones("recetas")
    .then((recetas) => {
      console.log('Recetas obtenidas:', recetas);
      if (isApiRequest) {
        res.json(recetas);
      } else {
        res.send(view.createRecetaListPage(recetas));
      }
    })
    .catch((error) => {
      console.error('Error al obtener recetas:', error); // Agrega mensajes de error más detallados
      if (isApiRequest) {
        res.status(500).json({ error: error.message });
      } else {
        res.send(view.createPaginaError('Error', `<p>${error}</p>`));
      }
    });
};



const getRecetasVeganas = (req, res, next) => {
  console.log("Entrando al controlador getRecetas...");

  const isApiRequest = req.path.startsWith('/api/'); // Verificar si es una solicitud de API

  service.obtenerRecetasPorColecciones("veganas")
    .then((recetas) => {
      console.log("Recetas obtenidas:", recetas);

      if (isApiRequest) {
        res.json(recetas); // Responder con JSON para solicitudes de API
      } else {
        res.send(view.createRecetaListPage(recetas)); // Responder con HTML para solicitudes web
      }
    })
    .catch((error) => {
      console.error("Error al obtener recetas:", error);

      if (isApiRequest) {
        res.status(500).json({ error: error.message }); // Responder con JSON en caso de error para solicitudes de API
      } else {
        res.send(view.createPaginaError('Error', `<p>${error}</p>`)); // Responder con HTML en caso de error para solicitudes web
      }
    });
};

const getRecetasVegetarianas = (req, res, next) => {
  console.log("Entrando al controlador getRecetas...");

  const isApiRequest = req.path.startsWith('/api/'); // Verificar si es una solicitud de API

  service.obtenerRecetasPorColecciones("vegetarianas")
    .then((recetas) => {
      console.log("Recetas obtenidas:", recetas);

      if (isApiRequest) {
        res.json(recetas); // Responder con JSON para solicitudes de API
      } else {
        res.send(view.createRecetaListPage(recetas)); // Responder con HTML para solicitudes web
      }
    })
    .catch((error) => {
      console.error("Error al obtener recetas:", error);

      if (isApiRequest) {
        res.status(500).json({ error: error.message }); // Responder con JSON en caso de error para solicitudes de API
      } else {
        res.send(view.createPaginaError('Error', `<p>${error}</p>`)); // Responder con HTML en caso de error para solicitudes web
      }
    });
};


const getRecetasNoLactosa = (req, res, next) => {
  console.log("Entrando al controlador getRecetas...");

  const isApiRequest = req.path.startsWith('/api/'); // Verificar si es una solicitud de API

  service.obtenerRecetasPorColecciones("no-lactosa")
    .then((recetas) => {
      console.log("Recetas obtenidas:", recetas);

      if (isApiRequest) {
        res.json(recetas); // Responder con JSON para solicitudes de API
      } else {
        res.send(view.createRecetaListPage(recetas)); // Responder con HTML para solicitudes web
      }
    })
    .catch((error) => {
      console.error("Error al obtener recetas:", error);

      if (isApiRequest) {
        res.status(500).json({ error: error.message }); // Responder con JSON en caso de error para solicitudes de API
      } else {
        res.send(view.createPaginaError('Error', `<p>${error}</p>`)); // Responder con HTML en caso de error para solicitudes web
      }
    });
};


const getRecetasNoGluten = (req, res, next) => {
  console.log("Entrando al controlador getRecetas...");

  const isApiRequest = req.path.startsWith('/api/'); // Verificar si es una solicitud de API

  service.obtenerRecetasPorColecciones("no-gluten")
    .then((recetas) => {
      console.log("Recetas obtenidas:", recetas);

      if (isApiRequest) {
        res.json(recetas); // Responder con JSON para solicitudes de API
      } else {
        res.send(view.createRecetaListPage(recetas)); // Responder con HTML para solicitudes web
      }
    })
    .catch((error) => {
      console.error("Error al obtener recetas:", error);

      if (isApiRequest) {
        res.status(500).json({ error: error.message }); // Responder con JSON en caso de error para solicitudes de API
      } else {
        res.send(view.createPaginaError('Error', `<p>${error}</p>`)); // Responder con HTML en caso de error para solicitudes web
      }
    });
};


const getRecetabyId = (req, res) => {
  const idReceta = req.params.receta_id;
  service.getRecetabyId(idReceta).then((receta) => {
    if (receta) {
      res.send(view.createPaginaDetalle(receta));
    } else {
      res.send(view.createPage("Error", "<p>No se encontró la receta</p>"));
    }
  });
};

const createRecetaFormPage = (req, res) => {
  res.send(view.createForm());
};

const createReceta = (req, res) => {
  const receta = {
    name: req.body.name,
    img: req.body.img,
    description: req.body.description,
    ingredients: req.body.ingredients,
    link: req.body.link,
    categoria: req.body.categoria,
  };

  service
    .createReceta(receta)
    .then((recetaNueva) => {
      res.send(
        view.createPage(
          "Receta Creada",
          `<p>Receta ${recetaNueva.name} creada con el id ${recetaNueva._id}</p>`
        )
      );
    })
    .catch((error) => res.send(view.createPage("Error", `<p> ${error}</p>`)));
};

const editRecetaForm = (req, res) => {
  const id = req.params.receta_id;
  service.getRecetabyId(id).then((receta) => {
    if (receta) {
      res.send(view.editForm(receta));
    } else {
      res.send(
        view.createPage(
          "No se encontró la receta",
          "<h1>No se encontró la receta solicitada</h1>"
        )
      );
    }
  });
};

const editReceta = (req, res) =>{
  const id = req.params.receta_id

  const receta = {
    name: req.body.name,
    img: req.body.img,
    description: req.body.description,
    ingredients: req.body.ingredients,
    link: req.body.link,
    categoria: req.body.categoria,
  };

  service.editReceta(id, receta)
    .then( (recetaEditada) => {
      if(recetaEditada){
        res.send( view.createPage("Receta Modificada", `<h2>Receta #${recetaEditada._id} Modificada con éxito</h2>`) )
      }else{
        res.send( view.createPage( "No se pudo editar", "<h1>No se pudo editar</h1>" ) )
      }
    } )
}

const eliminarRecetaForm = (req, res) => {
  const id = req.params.receta_id

  service.getRecetabyId(id).then((receta) => {
    if (receta) {
      res.send(view.eliminarForm(receta));
    } else {
      res.send(
        view.createPage(
          "No se encontró la receta",
          "<h1>No se encontró la receta solicitada</h1>"
        )
      );
    }
  });
}

const eliminarReceta = (req, res) => {
  const id = req.params.receta_id
  service.eliminarReceta(id)
  .then( (recetaEliminada) => {
    if(recetaEliminada){
      res.send( view.createPage("Receta Eliminada", `<h2>Receta #${recetaEliminada._id} Eliminada con éxito</h2>`) )
    }else{
      res.send( view.createPage( "No se pudo eliminar", "<h1>No se pudo eliminar</h1>" ) )
    }
  } )
}

export { 
  obtenerTodasLasRecetas,
  getRecetasVeganas,
  getRecetasVegetarianas,
  getRecetasNoGluten,
  getRecetasNoLactosa,
  getRecetabyId,
  createRecetaFormPage,
  createReceta,
  editRecetaForm,
  editReceta,
  eliminarRecetaForm,
  eliminarReceta
};

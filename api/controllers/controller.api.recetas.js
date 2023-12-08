import * as service from '../../services/recetas.services.js';
import * as view from '../../views/recetas.views.js';
import * as yup from 'yup';

const obtenerTodasLasRecetas = (req, res) => {
  service.obtenerRecetasPorColecciones("recetas")
    .then((recetas) => {
      res.status(200).json(recetas);
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
};

const obtenerRecetasVeganas = (req, res, next) => {
  service.obtenerRecetasPorColecciones("veganas")
    .then((recetas) => {
      res.status(200).json(recetas);
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
};

const obtenerRecetasVegetarianas = (req, res, next) => {
  service.obtenerRecetasPorColecciones("vegetarianas")
    .then((recetas) => {
      res.status(200).json(recetas);
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
};

const obtenerRecetasNoGluten = (req, res, next) => {
  service.obtenerRecetasPorColecciones("no-gluten")
    .then((recetas) => {
      res.status(200).json(recetas);
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
};

const obtenerRecetasNoLactosa = (req, res, next) => {
  service.obtenerRecetasPorColecciones("no-lactosa")
    .then((recetas) => {
      res.status(200).json(recetas);
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
};

const recetaSchema = yup.object({
  name: yup.string().required(),
  description: yup.string().required(),
  ingredientes: yup.array().of(yup.string()).required(),
  img: yup.string().required(),
  categoria: yup.string().required(),
  link: yup.string().required(),
});

  const crearReceta = async (req, res) => {
    const receta = {
      name: req.body.name,
      description: req.body.description,
      ingredientes: req.body.ingredientes,
      img: req.body.img,
      categoria: Array.isArray(req.body.categoria) ? req.body.categoria : [req.body.categoria], // Convertir a un array si no es así por defecto
      link: req.body.link,
    };

    try {
      const recetaValidada = await recetaSchema.validate(req.body);
      service.createReceta(recetaValidada).then((recetaNueva) => {
        res.status(201).json(recetaNueva);
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  const mostrarFormularioCrearReceta = (req, res, recetas) => {
    console.log(recetas); // Agrega esta línea para verificar las recetas
    res.send(view.createRecetaFormPage(recetas));
  };
  

async function crearNuevaReceta(req, res) {
  try {
    const nuevaReceta = req.body; // Asume que los datos del formulario se envían en el cuerpo de la solicitud
    const recetaCreada = await crearReceta(nuevaReceta); // Llama al servicio para crear la receta
    res.status(201).json(recetaCreada);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}


const modificarReceta = (req, res) => {
  const id = req.params.id;
  const receta = {
    name: req.body.name,
    description: req.body.description,
    ingredientes: req.body.ingredientes,
    img: req.body.img,
    categoria: req.body.categoria,
    link: req.body.link,
  };
  service.modificarReceta(id, receta).then((recetaEditada) => {
    if (recetaEditada) {
      res.status(200).json(recetaEditada);
    } else {
      res.status(404).json();
    }
  });
};

const eliminarRecetaPorId = (req, res) => {
  const id = req.params.id;
  service.eliminarRecetaPorId(id).then(() => {
    res.status(204).json();
  }).catch((error) => res.status(500).json({ error: error.message }));
};

const actualizarReceta = (req, res) => {
  const id = req.params.id;
  const receta = {};

  if (req.body.name) {
    receta.name = req.body.name;
  }

  if (req.body.description) {
    receta.description = req.body.description;
  }

  if (req.body.ingredientes) {
    receta.ingredientes = req.body.ingredientes;
  }

  if (req.body.img) {
    receta.img = req.body.img;
  }

  if (req.body.categoria) {
    receta.categoria = req.body.categoria;
  }

  if (req.body.link) {
    receta.link = req.body.link;
  }

  service.actualizarReceta(id, receta).then((recetaEditada) => {
    if (recetaEditada) {
      res.status(200).json(recetaEditada);
    } else {
      res.status(404).json();
    }
  });
};

const eliminarRecetas = (req, res) => {
  const id = req.params.id;
  service
    .eliminarReceta(id)
    .then(() => {
      res.status(204).json();
    })
    .catch((error) => res.status(500).json());
};





const eliminarRecetaVegana = (req, res) => {
  const id = req.params.id;
  service.eliminarRecetaVegana(id).then(() => {
    res.status(204).json();
  }).catch((error) => res.status(500).json({ error: error.message }));
};

const eliminarRecetaVegetariana = (req, res) => {
  const id = req.params.id;
  service.eliminarRecetaVegetariana(id).then(() => {
    res.status(204).json();
  }).catch((error) => res.status(500).json({ error: error.message }));
};

const eliminarRecetaNoLactosa = (req, res) => {
  const id = req.params.id;
  service.eliminarRecetaNoLactosa(id).then(() => {
    res.status(204).json();
  }).catch((error) => res.status(500).json({ error: error.message }));
};

const eliminarRecetaNoGluten = (req, res) => {
  const id = req.params.id;
  service.eliminarRecetaNoGluten(id).then(() => {
    res.status(204).json();
  }).catch((error) => res.status(500).json({ error: error.message }));
};

const obtenerRecetaPorId = (req, res) => {
  const id = req.params.id;
  service.getRecetabyId(id).then((receta) => {
    if (receta) {
      res.status(200).json(receta);
    } else {
      res.status(404).json();
    }
  });
};


const remplazarProducto = (req, res) => {
  const id = req.params.id;

  const producto = {
    name: req.body.name,
    price: req.body.price,
    description: req.body.description,
    tags: req.body.tags,
  };

  service.remplazarProducto(id, producto).then((productoEditado) => {
    if (productoEditado) {
      res.status(200).json(productoEditado);
    } else {
      res.status(404).json();
    }
  });
};

export {
  obtenerTodasLasRecetas,
  obtenerRecetasVeganas,
  obtenerRecetasVegetarianas,
  obtenerRecetasNoGluten,
  obtenerRecetasNoLactosa,
  obtenerRecetaPorId,

  remplazarProducto,


  crearReceta,
  modificarReceta,
  actualizarReceta,


  eliminarRecetas,
  eliminarRecetaVegana,
  eliminarRecetaVegetariana,
  eliminarRecetaNoLactosa,
  eliminarRecetaNoGluten,
  eliminarRecetaPorId,

  mostrarFormularioCrearReceta
};

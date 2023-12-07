import * as service from '../services/recetas.services.js';
import * as view from '../views/recetas.views.js';


// Secciones
const obtenerTodasLasRecetas = (req, res, next) => {
  const isApiRequest = req.path.startsWith('/api/'); // Verificar si es una solicitud de API

  service.obtenerRecetasPorColecciones("recetas")
    .then((recetas) => {
      if (isApiRequest) {
        res.json(recetas); // Responder con JSON para solicitudes de API
      } else {
        res.send(view.createRecetaListPage(recetas)); // Responder con HTML para solicitudes web
      }
    })
    .catch((error) => {
      if (isApiRequest) {
        res.status(500).json({ error: error.message }); // Responder con JSON en caso de error para solicitudes de API
      } else {
        res.send(view.createPaginaError('Error', `<p>${error}</p>`)); // Responder con HTML en caso de error para solicitudes web
      }
    });
};

const obtenerRecetaPorId = (req, res) => {
  const recetaId = req.params.id;
  const isApiRequest = req.path.startsWith('/api/'); // Verificar si es una solicitud de API

  service.obtenerRecetaPorId(recetaId)
    .then((receta) => {
      if (receta) {
        if (isApiRequest) {
          res.json(receta); // Responder con JSON para solicitudes de API
        } else {
          res.send(view.createRecetaDetallePage(receta)); // Responder con HTML para solicitudes web
        }
      } else {
        if (isApiRequest) {
          res.status(404).json({ error: 'No se encontró la receta' }); // Responder con JSON en caso de error para solicitudes de API
        } else {
          res.send(view.createPaginaError('Error', '<p>No se encontró la receta</p>')); // Responder con HTML en caso de error para solicitudes web
        }
      }
    })
    .catch((error) => {
      if (isApiRequest) {
        res.status(500).json({ error: error.message }); // Responder con JSON en caso de error para solicitudes de API
      } else {
        res.send(view.createPaginaError('Error', `<p>${error}</p>`)); // Responder con HTML en caso de error para solicitudes web
      }
    });
};

const obtenerRecetaVegetarianaPorId = (req, res) => {
  const recetaId = req.params.id;
  const isApiRequest = req.path.startsWith('/api/'); // Verificar si es una solicitud de API

  service.obtenerRecetaVegetarianaPorId(recetaId)
    .then((receta) => {
      if (receta) {
        if (isApiRequest) {
          res.json(receta); // Responder con JSON para solicitudes de API
        } else {
          res.send(view.createRecetaDetallePage(receta)); // Responder con HTML para solicitudes web
        }
      } else {
        if (isApiRequest) {
          res.status(404).json({ error: 'No se encontró la receta' }); // Responder con JSON en caso de error para solicitudes de API
        } else {
          res.send(view.createPaginaError('Error', '<p>No se encontró la receta</p>')); // Responder con HTML en caso de error para solicitudes web
        }
      }
    })
    .catch((error) => {
      if (isApiRequest) {
        res.status(500).json({ error: error.message }); // Responder con JSON en caso de error para solicitudes de API
      } else {
        res.send(view.createPaginaError('Error', `<p>${error}</p>`)); // Responder con HTML en caso de error para solicitudes web
      }
    });
};

const obtenerRecetaVeganaPorId = (req, res) => {
  const recetaId = req.params.id;
  const isApiRequest = req.path.startsWith('/api/'); // Verificar si es una solicitud de API

  service.obtenerRecetaVeganaPorId(recetaId)
    .then((receta) => {
      if (receta) {
        if (isApiRequest) {
          res.json(receta); // Responder con JSON para solicitudes de API
        } else {
          res.send(view.createRecetaDetallePage(receta)); // Responder con HTML para solicitudes web
        }
      } else {
        if (isApiRequest) {
          res.status(404).json({ error: 'No se encontró la receta' }); // Responder con JSON en caso de error para solicitudes de API
        } else {
          res.send(view.createPaginaError('Error', '<p>No se encontró la receta</p>')); // Responder con HTML en caso de error para solicitudes web
        }
      }
    })
    .catch((error) => {
      if (isApiRequest) {
        res.status(500).json({ error: error.message }); // Responder con JSON en caso de error para solicitudes de API
      } else {
        res.send(view.createPaginaError('Error', `<p>${error}</p>`)); // Responder con HTML en caso de error para solicitudes web
      }
    });
};

const obtenerRecetaNoGlutenPorId = (req, res) => {
  const recetaId = req.params.id;
  const isApiRequest = req.path.startsWith('/api/'); // Verificar si es una solicitud de API

  service.obtenerRecetaNoGlutenPorId(recetaId)
    .then((receta) => {
      if (receta) {
        if (isApiRequest) {
          res.json(receta); // Responder con JSON para solicitudes de API
        } else {
          res.send(view.createRecetaDetallePage(receta)); // Responder con HTML para solicitudes web
        }
      } else {
        if (isApiRequest) {
          res.status(404).json({ error: 'No se encontró la receta' }); // Responder con JSON en caso de error para solicitudes de API
        } else {
          res.send(view.createPaginaError('Error', '<p>No se encontró la receta</p>')); // Responder con HTML en caso de error para solicitudes web
        }
      }
    })
    .catch((error) => {
      if (isApiRequest) {
        res.status(500).json({ error: error.message }); // Responder con JSON en caso de error para solicitudes de API
      } else {
        res.send(view.createPaginaError('Error', `<p>${error}</p>`)); // Responder con HTML en caso de error para solicitudes web
      }
    });
};

const obtenerRecetaNoLactosaPorId = (req, res) => {
  const recetaId = req.params.id;
  const isApiRequest = req.path.startsWith('/api/'); // Verificar si es una solicitud de API

  service.obtenerRecetaNoLactosaPorId(recetaId)
    .then((receta) => {
      if (receta) {
        if (isApiRequest) {
          res.json(receta); // Responder con JSON para solicitudes de API
        } else {
          res.send(view.createRecetaDetallePage(receta)); // Responder con HTML para solicitudes web
        }
      } else {
        if (isApiRequest) {
          res.status(404).json({ error: 'No se encontró la receta' }); // Responder con JSON en caso de error para solicitudes de API
        } else {
          res.send(view.createPaginaError('Error', '<p>No se encontró la receta</p>')); // Responder con HTML en caso de error para solicitudes web
        }
      }
    })
    .catch((error) => {
      if (isApiRequest) {
        res.status(500).json({ error: error.message }); // Responder con JSON en caso de error para solicitudes de API
      } else {
        res.send(view.createPaginaError('Error', `<p>${error}</p>`)); // Responder con HTML en caso de error para solicitudes web
      }
    });
};



const obtenerRecetasVeganas = (req, res, next) => {
  const isApiRequest = req.path.startsWith('/api/'); // Verificar si es una solicitud de API

  service.obtenerRecetasPorColecciones("veganas")
    .then((recetas) => {
      if (isApiRequest) {
        res.json(recetas); // Responder con JSON para solicitudes de API
      } else {
        res.send(view.createPaginaRecetasVeganas(recetas)); // Responder con HTML para solicitudes web
      }
    })
    .catch((error) => {
      if (isApiRequest) {
        res.status(500).json({ error: error.message }); // Responder con JSON en caso de error para solicitudes de API
      } else {
        res.send(view.createPaginaError('Error', `<p>${error}</p>`)); // Responder con HTML en caso de error para solicitudes web
      }
    });
};

const obtenerRecetasVegetarianas = (req, res, next) => {
  const isApiRequest = req.path.startsWith('/api/'); // Verificar si es una solicitud de API

  service.obtenerRecetasPorColecciones("vegetarianas")
    .then((recetas) => {
      if (isApiRequest) {
        res.json(recetas); // Responder con JSON para solicitudes de API
      } else {
        res.send(view.createPaginaRecetasVegetarianas(recetas)); // Responder con HTML para solicitudes web
      }
    })
    .catch((error) => {
      if (isApiRequest) {
        res.status(500).json({ error: error.message }); // Responder con JSON en caso de error para solicitudes de API
      } else {
        res.send(view.createPaginaError('Error', `<p>${error}</p>`)); // Responder con HTML en caso de error para solicitudes web
      }
    });
};

const obtenerRecetasNoGluten = (req, res, next) => {
  const isApiRequest = req.path.startsWith('/api/'); // Verificar si es una solicitud de API

  service.obtenerRecetasPorColecciones("no-gluten")
    .then((recetas) => {
      if (isApiRequest) {
        res.json(recetas); // Responder con JSON para solicitudes de API
      } else {
        res.send(view.createPaginaRecetasNoGluten(recetas)); // Responder con HTML para solicitudes web
      }
    })
    .catch((error) => {
      if (isApiRequest) {
        res.status(500).json({ error: error.message }); // Responder con JSON en caso de error para solicitudes de API
      } else {
        res.send(view.createPaginaError('Error', `<p>${error}</p>`)); // Responder con HTML en caso de error para solicitudes web
      }
    });
};

const obtenerRecetasNoLactosa = (req, res, next) => {
  const isApiRequest = req.path.startsWith('/api/'); // Verificar si es una solicitud de API

  service.obtenerRecetasPorColecciones("no-lactosa")
    .then((recetas) => {
      if (isApiRequest) {
        res.json(recetas); // Responder con JSON para solicitudes de API
      } else {
        res.send(view.createPaginaRecetasNoLactosa(recetas)); // Responder con HTML para solicitudes web
      }
    })
    .catch((error) => {
      if (isApiRequest) {
        res.status(500).json({ error: error.message }); // Responder con JSON en caso de error para solicitudes de API
      } else {
        res.send(view.createPaginaError('Error', `<p>${error}</p>`)); // Responder con HTML en caso de error para solicitudes web
      }
    });
};

// Crear receta
const mostrarFormularioCrearReceta = (req, res) => {
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

// Editar receta
const editarReceta = (req, res) => {
  const recetaId = req.params.id;
  const recetaEditada = {
    name: req.body.name,
    description: req.body.description,
    ingredients: req.body.ingredients,
    instructions: req.body.instructions,
  };

  service.editarReceta(recetaId, recetaEditada)
    .then(() => {
      res.send(view.crearPaginaConfirmacion('Receta Editada', `<p>Receta ${recetaEditada.name} editada con éxito.</p>`));
    })
    .catch((error) => {
      res.send(view.createPaginaError('Error', `<p>${error}</p>`));
    });
};

const editarRecetaVegana = (req, res) => {
  const recetaId = req.params.id;
  const recetaEditada = {
    name: req.body.name,
    description: req.body.description,
    ingredients: req.body.ingredients,
    instructions: req.body.instructions,
  };

  service.editarRecetaVegana(recetaId, recetaEditada)
    .then(() => {
      res.send(view.crearPaginaConfirmacion('Receta Editada', `<p>Receta ${recetaEditada.name} editada con éxito.</p>`));
    })
    .catch((error) => {
      res.send(view.createPaginaError('Error', `<p>${error}</p>`));
    });
};

const editarRecetaVegetariana = (req, res) => {
  const recetaId = req.params.id;
  const recetaEditada = {
    name: req.body.name,
    description: req.body.description,
    ingredients: req.body.ingredients,
    instructions: req.body.instructions,
  };

  service.editarRecetaVegetariana(recetaId, recetaEditada)
    .then(() => {
      res.send(view.crearPaginaConfirmacion('Receta Editada', `<p>Receta ${recetaEditada.name} editada con éxito.</p>`));
    })
    .catch((error) => {
      res.send(view.createPaginaError('Error', `<p>${error}</p>`));
    });
};


const editarRecetaNoGluten = (req, res) => {
  const recetaId = req.params.id;
  const recetaEditada = {
    name: req.body.name,
    description: req.body.description,
    ingredients: req.body.ingredients,
    instructions: req.body.instructions,
  };

  service.editarRecetaNoGluten(recetaId, recetaEditada)
    .then(() => {
      res.send(view.crearPaginaConfirmacion('Receta Editada', `<p>Receta ${recetaEditada.name} editada con éxito.</p>`));
    })
    .catch((error) => {
      res.send(view.createPaginaError('Error', `<p>${error}</p>`));
    });
};

const editarRecetaNoLactosa = (req, res) => {
  const recetaId = req.params.id;
  const recetaEditada = {
    name: req.body.name,
    description: req.body.description,
    ingredients: req.body.ingredients,
    instructions: req.body.instructions,
  };

  service.editarRecetaNoLactosa(recetaId, recetaEditada)
    .then(() => {
      res.send(view.crearPaginaConfirmacion('Receta Editada', `<p>Receta ${recetaEditada.name} editada con éxito.</p>`));
    })
    .catch((error) => {
      res.send(view.createPaginaError('Error', `<p>${error}</p>`));
    });
};




const mostrarFormularioEditarReceta = (req, res) => {
  const recetaId = req.params.id;
  service.obtenerRecetaPorId(recetaId)
    .then((receta) => {
      if (receta) {
        res.send(view.crearFormularioEdicion(receta));
      } else {
        res.send(view.createPaginaError('Error', '<p>No se encontró la receta</p>'));
      }
    })
    .catch((error) => {
      res.send(view.createPaginaError('Error', `<p>${error}</p>`));
    });
};

const mostrarFormularioEditarRecetaVegana = (req, res) => {
  const recetaId = req.params.id;
  service.obtenerRecetaVeganaPorId(recetaId)
    .then((receta) => {
      if (receta) {
        res.send(view.mostrarFormularioEdicion(receta));
      } else {
        res.send(view.createPaginaError('Error', '<p>No se encontró la receta</p>'));
      }
    })
    .catch((error) => {
      res.send(view.createPaginaError('Error', `<p>${error}</p>`));
    });
};

const mostrarFormularioEditarRecetaVegetariana = (req, res) => {
  const recetaId = req.params.id;
  service.obtenerRecetaVegetarianaPorId(recetaId)
    .then((receta) => {
      if (receta) {
        res.send(view.mostrarFormularioEdicion(receta));
      } else {
        res.send(view.createPaginaError('Error', '<p>No se encontró la receta</p>'));
      }
    })
    .catch((error) => {
      res.send(view.createPaginaError('Error', `<p>${error}</p>`));
    });
};

const mostrarFormularioEditarRecetaNoGluten = (req, res) => {
  const recetaId = req.params.id;
  service.obtenerRecetaNoGlutenPorId(recetaId)
    .then((receta) => {
      if (receta) {
        res.send(view.mostrarFormularioEdicion(receta));
      } else {
        res.send(view.createPaginaError('Error', '<p>No se encontró la receta</p>'));
      }
    })
    .catch((error) => {
      res.send(view.createPaginaError('Error', `<p>${error}</p>`));
    });
};

const mostrarFormularioEditarRecetaNoLactosa = (req, res) => {
  const recetaId = req.params.id;
  service.obtenerRecetaNoLactosaPorId(recetaId)
    .then((receta) => {
      if (receta) {
        res.send(view.mostrarFormularioEdicion(receta));
      } else {
        res.send(view.createPaginaError('Error', '<p>No se encontró la receta</p>'));
      }
    })
    .catch((error) => {
      res.send(view.createPaginaError('Error', `<p>${error}</p>`));
    });
};


// Eliminar receta
const mostrarFormularioEliminarReceta = (req, res) => {
  const recetaId = req.params.id;
  service.obtenerRecetaPorId(recetaId)
    .then((receta) => {
      if (receta) {
        res.send(view.crearFormularioEliminar(receta));
      } else {
        res.send(view.createPaginaError('Error', '<p>No se encontró la receta</p>'));
      }
    })
    .catch((error) => {
      res.send(view.createPaginaError('Error', `<p>${error}</p>`));
    });
};

  const eliminarReceta = (req, res) => {
    const recetaId = req.params.id;

    service.eliminarRecetas(recetaId)
      .then((recetaEliminada) => {
        if (recetaEliminada) {
          res.send(view.crearPaginaConfirmacion('Receta Eliminada', `<p>Receta #${recetaEliminada._id} eliminada con éxito.</p>`));
        } else {
          res.send(view.createPaginaError('Error', '<p>No se pudo eliminar la receta</p>'));
        }
      })
      .catch((error) => {
        res.send(view.createPaginaError('Error', `<p>${error}</p>`));
      });
  };




// Crear
async function crearNuevaRecetaVegana(req, res) {
  try {
    const nuevaRecetaVegana = req.body; // Asume que los datos de la receta se encuentran en el cuerpo de la solicitud
    const recetaCreada = await crearRecetaVegana(nuevaRecetaVegana);
    res.status(201).json(recetaCreada);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function crearNuevaRecetaVegetariana(req, res) {
  try {
    const nuevaRecetaVegetariana = req.body; // Asume que los datos de la receta se encuentran en el cuerpo de la solicitud
    const recetaCreada = await crearRecetaVegetariana(nuevaRecetaVegetariana);
    res.status(201).json(recetaCreada);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function crearNuevaRecetaNoGluten(req, res) {
  try {
    const nuevaRecetaNoGluten = req.body; // Asume que los datos de la receta se encuentran en el cuerpo de la solicitud
    const recetaCreada = await crearRecetaNoGluten(nuevaRecetaNoGluten);
    res.status(201).json(recetaCreada);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function crearNuevaRecetaNoLactosa(req, res) {
  try {
    const nuevaRecetaNoLactosa = req.body; // Asume que los datos de la receta se encuentran en el cuerpo de la solicitud
    const recetaCreada = await crearRecetaNoLactosa(nuevaRecetaNoLactosa);
    res.status(201).json(recetaCreada);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

const mostrarFormularioEliminarRecetaVegana = (req, res) => {
  const recetaId = req.params.id;
  service.obtenerRecetaVeganaPorId(recetaId)
    .then((receta) => {
      if (receta) {
        res.send(view.crearFormularioEliminar(receta));
      } else {
        res.send(view.createPaginaError('Error', '<p>No se encontró la receta</p>'));
      }
    })
    .catch((error) => {
      res.send(view.createPaginaError('Error', `<p>${error}</p>`));
    });
};

const mostrarFormularioEliminarRecetaNoGluten = (req, res) => {
  const recetaId = req.params.id;
  service.obtenerRecetaNoGlutenPorId(recetaId)
    .then((receta) => {
      if (receta) {
        res.send(view.crearFormularioEliminar(receta));
      } else {
        res.send(view.createPaginaError('Error', '<p>No se encontró la receta</p>'));
      }
    })
    .catch((error) => {
      res.send(view.createPaginaError('Error', `<p>${error}</p>`));
    });
};

const mostrarFormularioEliminarRecetaNoLactosa = (req, res) => {
  const recetaId = req.params.id;
  service.obtenerRecetaNoLactosaPorId(recetaId)
    .then((receta) => {
      if (receta) {
        res.send(view.crearFormularioEliminar(receta));
      } else {
        res.send(view.createPaginaError('Error', '<p>No se encontró la receta</p>'));
      }
    })
    .catch((error) => {
      res.send(view.createPaginaError('Error', `<p>${error}</p>`));
    });
};

const mostrarFormularioEliminarRecetaVegetariana = (req, res) => {
  const recetaId = req.params.id;
  service.obtenerRecetaVegetarianaPorId(recetaId)
    .then((receta) => {
      if (receta) {
        res.send(view.crearFormularioEliminar(receta));
      } else {
        res.send(view.createPaginaError('Error', '<p>No se encontró la receta</p>'));
      }
    })
    .catch((error) => {
      res.send(view.createPaginaError('Error', `<p>${error}</p>`));
    });
};

const eliminarRecetaVegana = (req, res) => {
  const id = req.params.id;
  service.eliminarRecetaVegana(id)
    .then(() => {
      res.status(204).json();
    })
    .catch((error) => res.status(500).json({ error: error.message }));
};

const eliminarRecetaVegetariana = (req, res) => {
  const id = req.params.id;
  service.eliminarRecetaVegetariana(id)
    .then(() => {
      res.status(204).json();
    })
    .catch((error) => res.status(500).json({ error: error.message }));
};

const eliminarRecetaNoLactosa = (req, res) => {
  const id = req.params.id;
  service.eliminarRecetaNoLactosa(id)
    .then(() => {
      res.status(204).json();
    })
    .catch((error) => res.status(500).json({ error: error.message }));
};

const eliminarRecetaNoGluten = (req, res) => {
  const id = req.params.id;
  service.eliminarRecetaNoGluten(id)
    .then(() => {
      res.status(204).json();
    })
    .catch((error) => res.status(500).json({ error: error.message }));
};

export {
  // Obtener secciones
  obtenerRecetaPorId,
  obtenerTodasLasRecetas,
  obtenerRecetasVeganas,
  obtenerRecetasVegetarianas,
  obtenerRecetasNoGluten,
  obtenerRecetasNoLactosa,

  // Crear
  crearNuevaReceta,

  obtenerRecetaVegetarianaPorId,
  obtenerRecetaVeganaPorId,
  obtenerRecetaNoGlutenPorId,
  obtenerRecetaNoLactosaPorId,

  editarRecetaVegana,
  editarRecetaVegetariana,
  editarRecetaNoGluten,
  editarRecetaNoLactosa,

  crearNuevaRecetaVegana,
  crearNuevaRecetaVegetariana,
  crearNuevaRecetaNoGluten,
  crearNuevaRecetaNoLactosa,


  mostrarFormularioEditarRecetaVegana,
  mostrarFormularioEditarRecetaVegetariana,
  mostrarFormularioEditarRecetaNoGluten,
  mostrarFormularioEditarRecetaNoLactosa,

  
  mostrarFormularioCrearReceta,
  mostrarFormularioEditarReceta,
  editarReceta,
 
  eliminarReceta,

  mostrarFormularioEliminarReceta,
  mostrarFormularioEliminarRecetaVegana,
  mostrarFormularioEliminarRecetaVegetariana,
  mostrarFormularioEliminarRecetaNoGluten,
  mostrarFormularioEliminarRecetaNoLactosa,




  eliminarRecetaVegana,
  eliminarRecetaVegetariana,
  eliminarRecetaNoLactosa,
  eliminarRecetaNoGluten,

};

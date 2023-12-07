import express from 'express';
import * as recetaControllers from '../controllers/recetas.controllers.js';

const router = express.Router();

// Rutas relacionadas con Recetas

//router.get('/recetas/:id', recetaControllers.obtenerRecetaPorId);
//router.post('/crear-receta/nueva', recetaControllers.crearReceta);
//router.post('/recetas/nuevo', recetaControllers.mostrarFormularioCrearReceta);


router.get('/recetas', recetaControllers.obtenerTodasLasRecetas);
router.get('/recetas/:id', recetaControllers.obtenerRecetaPorId);
router.get('/recetas/nuevo', recetaControllers.mostrarFormularioCrearReceta);
router.post('/recetas/nuevo', recetaControllers.crearNuevaReceta);

router.get('/recetas/:id/editar', recetaControllers.mostrarFormularioEditarReceta);
router.put('/recetas/:id/editar', recetaControllers.editarReceta);
router.get('/recetas/:id/eliminar', recetaControllers.mostrarFormularioEliminarReceta);
router.delete('/recetas/:id/eliminar', recetaControllers.eliminarReceta);


router.get('/veganas', recetaControllers.obtenerRecetasVeganas);
router.get('/veganas/:id', recetaControllers.obtenerRecetaVeganaPorId);
router.get('/veganas/nuevo', recetaControllers.mostrarFormularioCrearReceta);
router.post('/veganas/nuevo', recetaControllers.crearNuevaReceta);
router.get('/veganas/:id/editar', recetaControllers.mostrarFormularioEditarRecetaVegana);
router.post('/veganas/:id/editar', recetaControllers.editarRecetaVegana);
router.get('/veganas/:id/eliminar', recetaControllers.mostrarFormularioEliminarRecetaVegana);
router.post('/veganas/:id/eliminar', recetaControllers.eliminarRecetaVegana);
//route.get("/recetas/:id", controllers.obtenerRecetasVeganasPorId);



router.get('/vegetarianas', recetaControllers.obtenerRecetasVegetarianas);
router.get('/vegetarianas/:id', recetaControllers.obtenerRecetaVegetarianaPorId);
router.get('/vegetarianas/nuevo', recetaControllers.mostrarFormularioCrearReceta);
router.post('/vegetarianas/nuevo', recetaControllers.crearNuevaReceta);
router.get('/vegetarianas/:id/editar', recetaControllers.mostrarFormularioEditarRecetaVegetariana);
router.post('/vegetarianas/:id/editar', recetaControllers.editarRecetaVegetariana);
router.get('/vegetarianas/:id/eliminar', recetaControllers.mostrarFormularioEliminarRecetaVegetariana);
router.post('/vegetarianas/:id/eliminar', recetaControllers.eliminarRecetaVegetariana);


router.get('/no-gluten', recetaControllers.obtenerRecetasNoGluten);
router.get('/no-gluten/:id', recetaControllers.obtenerRecetaNoGlutenPorId);
router.get('/no-gluten/nuevo', recetaControllers.mostrarFormularioCrearReceta);
router.post('/no-gluten/nuevo', recetaControllers.crearNuevaReceta);
router.get('/no-gluten/:id/editar', recetaControllers.mostrarFormularioEditarRecetaNoGluten);
router.post('/no-gluten/:id/editar', recetaControllers.editarRecetaNoGluten);
router.get('/no-gluten/:id/eliminar', recetaControllers.mostrarFormularioEliminarRecetaNoGluten);
router.post('/no-gluten/:id/eliminar', recetaControllers.eliminarRecetaNoGluten)


router.get('/no-lactosa', recetaControllers.obtenerRecetasNoLactosa);
router.get('/no-lactosa/:id', recetaControllers.obtenerRecetaNoLactosaPorId);
router.get('/no-lactosa/nuevo', recetaControllers.mostrarFormularioCrearReceta);
router.post('/no-lactosa/nuevo', recetaControllers.crearNuevaReceta);
router.get('/no-lactosa/:id/editar', recetaControllers.mostrarFormularioEditarRecetaNoLactosa);
router.post('/no-lactosa/:id/editar', recetaControllers.editarRecetaNoLactosa);
router.get('/no-lactosa/:id/eliminar', recetaControllers.mostrarFormularioEliminarRecetaNoLactosa);
router.post('/no-lactosa/:id/eliminar', recetaControllers.eliminarRecetaNoLactosa)



export default router;

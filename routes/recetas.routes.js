import express from 'express';
import * as recetaControllers from '../controllers/recetas.controllers.js';

const router = express.Router();

// Rutas relacionadas con Recetas

//router.get('/recetas/:id', recetaControllers.obtenerRecetaPorId);
//router.post('/crear-receta/nueva', recetaControllers.crearReceta);
//router.post('/recetas/nuevo', recetaControllers.mostrarFormularioCrearReceta);


router.get('/recetas', recetaControllers.obtenerTodasLasRecetas);
router.get("/recetas/nuevo", recetaControllers.createRecetaFormPage);
router.post("/recetas/nuevo", recetaControllers.createReceta);
router.get("/recetas/editar/:receta_id", recetaControllers.editRecetaForm);
router.post("/recetas/editar/:receta_id", recetaControllers.editReceta);
router.get("/recetas/eliminar/:receta_id", recetaControllers.eliminarRecetaForm);
router.post("/recetas/eliminar/:receta_id", recetaControllers.eliminarReceta);
router.get("/recetas/:receta_id", recetaControllers.getRecetabyId)

router.get("/veganas", recetaControllers.getRecetasVeganas);
router.get("/veganas/nuevo", recetaControllers.createRecetaFormPage);
router.post("/veganas/nuevo", recetaControllers.createReceta);
router.get("/veganas/editar/:receta_id", recetaControllers.editRecetaForm);
router.post("/veganas/editar/:receta_id", recetaControllers.editReceta);
router.get("/veganas/eliminar/:receta_id", recetaControllers.eliminarRecetaForm);
router.post("/veganas/eliminar/:receta_id", recetaControllers.eliminarReceta);
router.get("/veganas/:receta_id", recetaControllers.getRecetabyId)


//router.get("/vegetarianas", recetaControllers.getRecetas);
router.get("/vegetarianas", recetaControllers.getRecetasVegetarianas);
router.get("/vegetarianas/nuevo", recetaControllers.createRecetaFormPage);
router.post("/vegetarianas/nuevo", recetaControllers.createReceta);
router.get("/vegetarianas/editar/:receta_id", recetaControllers.editRecetaForm);
router.post("/vegetarianas/editar/:receta_id", recetaControllers.editReceta);
router.get("/vegetarianas/eliminar/:receta_id", recetaControllers.eliminarRecetaForm);
router.post("/vegetarianas/eliminar/:receta_id", recetaControllers.eliminarReceta);
router.get("/vegetarianas/:receta_id", recetaControllers.getRecetabyId)



//router.get("/no-gluten", recetaControllers.getRecetas);
router.get("/no-gluten", recetaControllers.getRecetasNoGluten);
router.get("/no-gluten/nuevo", recetaControllers.createRecetaFormPage);
router.post("/no-gluten/nuevo", recetaControllers.createReceta);
router.get("/no-gluten/editar/:receta_id", recetaControllers.editRecetaForm);
router.post("/no-gluten/editar/:receta_id", recetaControllers.editReceta);
router.get("/no-gluten/eliminar/:receta_id", recetaControllers.eliminarRecetaForm);
router.post("/no-gluten/eliminar/:receta_id", recetaControllers.eliminarReceta);
router.get("/no-gluten/:receta_id", recetaControllers.getRecetabyId)

//router.get("/no-lactosa", recetaControllers.getRecetas);
router.get("/no-lactosa", recetaControllers.getRecetasNoLactosa);
router.get("/no-lactosa/nuevo", recetaControllers.createRecetaFormPage);
router.post("/no-lactosa/nuevo", recetaControllers.createReceta);
router.get("/no-lactosa/editar/:receta_id", recetaControllers.editRecetaForm);
router.post("/no-lactosa/editar/:receta_id", recetaControllers.editReceta);
router.get("/no-lactosa/eliminar/:receta_id", recetaControllers.eliminarRecetaForm);
router.post("/no-lactosa/eliminar/:receta_id", recetaControllers.eliminarReceta);
router.get("/no-lactosa/:receta_id", recetaControllers.getRecetabyId)







export default router;

import { readFile, writeFile } from "node:fs/promises";
import { MongoClient, ObjectId } from "mongodb";
import { getDB } from '../db.js';

const client = new MongoClient("mongodb+srv://juan:Juanchocruz1234@recetas.uc27w62.mongodb.net/"); 
const db = client.db("AH20232CP1");

const recetasFilePath = "./data/recetas.json";


async function obtenerTodasLasRecetas() {
  try {
    const data = await readFile(recetasFilePath, "utf8");
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
}


async function getRecetasVeganas(filter = {}) {
  const filterMongo = { eliminado: { $ne: true } }

  // Aplica filtros adicionales según tus necesidades

  return db
    .collection("veganas")
    .find(filterMongo)
    .toArray();
}

async function getRecetasVegetarianas(filter = {}) {
  const filterMongo = { eliminado: { $ne: true } }

  // Aplica filtros adicionales según tus necesidades

  return db
    .collection("vegetarianas")
    .find(filterMongo)
    .toArray();
}

async function getRecetasNoGluten(filter = {}) {
  const filterMongo = { eliminado: { $ne: true } }

  // Aplica filtros adicionales según tus necesidades

  return db
    .collection("no-gluten")
    .find(filterMongo)
    .toArray();
}

async function getRecetasNoLactosa(filter = {}) {
  const filterMongo = { eliminado: { $ne: true } }

  // Aplica filtros adicionales según tus necesidades

  return db
    .collection("no-lactosa")
    .find(filterMongo)
    .toArray();
}

async function getRecetabyId(id) {
  return db.collection("recetas").findOne({ _id: new ObjectId(id) });
}

const createReceta = async (receta) => {
  const recetaCreada = await db.collection("recetas").insertOne(receta);
  receta._id = recetaCreada.insertedId;

  return receta;
};

const replaceReceta = async (id, receta) => {
  const recetaEditada = await db.collection("recetas").replaceOne({ _id: new ObjectId(id) }, receta);
  return recetaEditada;
};

const editReceta = async (id, receta) => {
  const recetaEditada = await db.collection("recetas").updateOne({ _id: new ObjectId(id) }, { $set: receta });
  return recetaEditada;
}

const eliminarReceta = async (id) => {
  const recetaEliminada = await db.collection("recetas").deleteOne({ _id: new ObjectId(id) });
  return recetaEliminada;
};

async function getRecetasByCategoria(categoria) {
  const filterMongo = {
    eliminado: { $ne: true },
    categoria: categoria
  };

  return db
    .collection("recetas")
    .find(filterMongo)
    .toArray();
}

async function obtenerRecetasPorColecciones(coleccion) {
  try {
    const recetas = await db.collection(coleccion).find().toArray();
    return recetas;
  } catch (error) {
    throw error;
  }
}

async function modificarReceta(id, nuevaData) {
  try {
    const result = await db.collection("recetas").updateOne(
      { _id: new ObjectId(id) },
      { $set: nuevaData }
    );

    if (result.modifiedCount === 0) {
      throw new Error('No se encontró la receta para modificar');
    }

    console.log(`Receta modificada con éxito: ${id}`);
  } catch (error) {
    console.error("Error al modificar la receta:", error);
    throw error;
  }
}




export {
  obtenerTodasLasRecetas,
  getRecetasVeganas,
  getRecetasVegetarianas,
  getRecetasNoGluten,
  getRecetasNoLactosa,
  getRecetabyId,
  createReceta,
  replaceReceta,
  eliminarReceta,
  editReceta,
  getRecetasByCategoria,
  modificarReceta,
  obtenerRecetasPorColecciones
};

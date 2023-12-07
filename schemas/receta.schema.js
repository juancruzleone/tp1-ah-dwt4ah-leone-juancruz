// receta.schema.js
import yup from 'yup';

const recetaSchemaCreate = yup.object({
  name: yup.string().required(),
  description: yup.string().required(),
  categoria: yup.array().of(yup.string()).required(), // Asegura que sea un array de strings
});

const recetaSchemaPatch = yup.object({
  name: yup.string(),
  description: yup.string(),
  categoria: yup.array().of(yup.string()), // Puede ser un array o estar ausente
});

export { recetaSchemaCreate, recetaSchemaPatch };
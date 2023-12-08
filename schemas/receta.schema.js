// receta.schema.js
import yup from 'yup';

const recetaSchemaCreate = yup.object({
  name: yup.string().required(),
  description: yup.string().required(),

});

const recetaSchemaPatch = yup.object({
  name: yup.string(),
  description: yup.string(),

});

export { recetaSchemaCreate, recetaSchemaPatch };
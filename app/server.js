import express from "express";
import cors from "cors";
import recetaRoute from "../routes/recetas.routes.js";
import ApiRecetaRoute from '../api/routes/route.api.recetas.js';
import ApiContactoRoute from '../api/routes/route.api.contactos.js';
import ApiAuthRoute from '../api/routes/route.api.auth.js';


const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use("/", express.static("public"));
app.use(express.json());

app.use(recetaRoute);
app.use('/api', ApiRecetaRoute);
app.use('/api', ApiContactoRoute);
app.use('/api', ApiAuthRoute);


const PORT = 3333;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});

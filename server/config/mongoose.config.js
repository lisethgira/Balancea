const mongoose = require("mongoose");
require("dotenv").config();
const uri = process.env.MONGODB_URI;

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("La Base de Datos se conectó correctamente!"))
  .catch((error) =>
    console.log("Algo sucedió al intentar conectarse a la base de datos " + error)
  );

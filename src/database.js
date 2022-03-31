const mongoose = require("mongoose");

const MONGODB_URI = process.env.MONGODB_URI;

const PEDIDOS_APP_MONGODB_HOST= process.env.PEDIDOS_APP_MONGODB_HOST;
const PEDIDOS_APP_MONGODB_DATABASE = process.env.PEDIDOS_APP_MONGODB_DATABASE;

mongoose
  .connect(MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(db => console.log("Database is connected"))
  .catch(err => console.log(err));

const express = require("express");
const app = express();
const port = 3000;
const mysql = require("mysql2");

app.use(express.json()); // Middleware para procesar JSON
app.use(express.urlencoded({ extended: true })); // Middleware para procesar formularios

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "db_test",
  port: "3307",
});

app.route();

app.get("/", (req, res) => {
  res.send("¡Hola, mundo!");
});

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});

app.post("/products", (req, res) => {
  console.log("Datos recibidos:", req.body);
  res.send("Datos recibidos correctamente");
});
app.get("/products", (req, res) => {
console.log("Productos enviados corectamente:", req.body);
  res.send("Datos recibidos correctamente");
});
app.get("/products/{id}", (req, res) => {});
app.put("/products/{id}", (req, res) => {});
app.delete("/products/{id}", (req, res) => {});

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});

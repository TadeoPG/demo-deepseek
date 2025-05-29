const express = require("express");
const app = express();
const port = 3000;
const mysql = require("mysql2");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "db_test",
  port: "3306",
});

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});

client = OpenAI(
    api_key="sk-06f74b93ec39436694cf75b735196cb0",
    base_url="https://api.deepseek.com"
)

//Listar todos los productos (GET /products)
app.get("/products", (req, res) => {

  try {
    const [rows] = pool.query("SELECT * FROM producto");
    return rows;
  } catch (error) {
    throw { status: 500, message: "Error al obtener los productos" };
  
  };
});
//Crear un producto (POST /products): recibe un nombre, llama a Deepseek para generar la descripción y lo guarda.
app.post("/products", (req, res) => {
console.log("Productos enviados corectamente:"

  , req.body)
    .then(response => {
    response.data.results.forEach(result => console.log(`Test de Deep`));
})
.catch(error => console.error("Error:", error));
const agregarProducto = async ({
  nombre_producto,
  categoria_producto,
  venta_producto,
}) => {
  try {
    await pool.query(
      "INSERT INTO producto (nombre_producto, categoria_producto, venta_producto, created_at) VALUES (?, ?, ?, ?)",
      [nombre_producto, categoria_producto, venta_producto, new Date()]
    );
  } catch (error) {
    throw { status: 500, message: "Error al crear el producto" };
  }
};

});

//Obtener un producto específico (GET /products/{id})
app.get("/products/{id}", (req, res) => {

  try {
    pool.query("SELECT FROM producto WHERE id_producto = ?", [id]);
  } catch (error) {
    throw {
      status: 500,
      message: `Error al encontrar el producto con ID ${id}`,
    };
  }

});

//Actualizar un producto (PUT /products/{id})
app.put("/products/{id}", (req, res) => {

const actualizarproducto = async (
  id,
  { nombre_producto, categoria_producto, venta_producto }
) => {
  try {
    await pool.query(
      "UPDATE producto SET nombre_producto = ?, categoria_producto = ?, venta_producto = ? WHERE id_producto = ?",
      [nombre_producto, categoria_producto, venta_producto, id]
    );
  } catch (error) {
    throw {
      status: 500,
      message: `Error al actualizar el producto con ID ${id}`,
    };
  }
};

});

//Eliminar un producto (DELETE /products/{id})
app.delete("/products/{id}", (req, res) => {

  try {
    pool.query("DELETE FROM producto WHERE id_producto = ?", [id]);
  } catch (error) {
    throw {
      status: 500,
      message: `Error al eliminar el producto con ID ${id}`,
    };
  }

});


app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});

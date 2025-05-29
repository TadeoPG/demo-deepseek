import pool from "db.js";

// Agregar un nuevo producto


// Obtener todos los producto
export const listarproducto = async () => {
  try {
    const [rows] = await pool.query("SELECT * FROM producto");
    return rows;
  } catch (error) {
    throw { status: 500, message: "Error al obtener producto" };
  }
};

// Obtener detalles de un producto por ID
export const obtenerDetallesproducto = async (id) => {
  try {
    const [rows] = await pool.query(
      "SELECT * FROM producto WHERE id_producto = ?",
      [id]
    );

    if (rows.length === 1) {
      const producto = rows[0];
      return producto;
    } else {
      throw { status: 404, message: "producto no encontrado" };
    }
  } catch (error) {
    console.error(error);
    throw { status: 500, message: "Error al obtener detalles del producto" };
  }
};

//Obtener formualrio para actualizar producto seleccionado
export async function obtenerDetallesproductoUpdate(id) {
  try {
    const [rows] = await pool.query(
      "SELECT * FROM producto WHERE id_producto = ?",
      [id]
    );

    if (rows.length === 1) {
      return rows[0];
    } else {
      throw { status: 404, message: "producto no encontrado" };
    }
  } catch (error) {
    console.error(error);
    throw { status: 500, message: "Error al obtener detalles del producto" };
  }
}

// Actualizar un producto por ID
export const actualizarproducto = async (
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

// Eliminar un producto por ID
export const eliminarproducto = async (id) => {
  try {
    await pool.query("DELETE FROM producto WHERE id_producto = ?", [id]);
  } catch (error) {
    throw {
      status: 500,
      message: `Error al eliminar el producto con ID ${id}`,
    };
  }
};

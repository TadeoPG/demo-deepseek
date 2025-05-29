
Funcionalidades mínimas:
Crear un producto (POST /products): recibe un nombre, llama a Deepseek para generar la descripción y lo guarda.
Listar todos los productos (GET /products)
Obtener un producto específico (GET /products/{id})
Actualizar un producto (PUT /products/{id})
Eliminar un producto (DELETE /products/{id})
Notas:
Puedes usar base de datos en memoria (como H2, SQLite, Map, etc.) si lo prefieres.
Usar conventional commits que describa el timeline de tu desarrollo.
Puedes usar el lenguaje y stack backend de tu elección.
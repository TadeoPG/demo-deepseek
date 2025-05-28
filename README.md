# 🚀 Desafío Backend con Deepseek

## 🧠 Contexto

Este reto forma parte del proceso del selección. Tu objetivo es desarrollar una miniaplicación backend que integre la API de Deepseek para generar descripciones de productos ficticios y almacenarlas en una base de datos. A través de una API REST construida por ti, el sistema debe permitir **crear, leer, actualizar y eliminar** estas descripciones.

---

## ⏱ Duración del Reto

**1 hora** (07:00 – 08:00)

---

## 🎯 Objetivo

Desarrollar un backend funcional que reciba un nombre de producto, genere una descripción con ayuda de la API de Deepseek, y exponga una API REST con operaciones CRUD completas.

---

## 🧩 Requisitos del Sistema

### Funcionalidades mínimas:

- Crear un producto (`POST /products`): recibe un nombre, llama a Deepseek para generar la descripción y lo guarda.
- Listar todos los productos (`GET /products`)
- Obtener un producto específico (`GET /products/{id}`)
- Actualizar un producto (`PUT /products/{id}`)
- Eliminar un producto (`DELETE /products/{id}`)

### Notas:

- Puedes usar base de datos en memoria (como H2, SQLite, Map, etc.) si lo prefieres.
- Usar conventional commits que describa el timeline de tu desarrollo.
- Puedes usar el lenguaje y stack backend de tu elección.

---

## 🛠 Recomendaciones Técnicas

- Utiliza arquitectura modular (controladores, servicios, repositorios) o una mejor. Queda a tu criterio.
- Maneja errores comunes (producto no encontrado, campos vacíos, etc.).
- Sigue buenas prácticas REST (status codes, verbos HTTP, etc.).
- Documenta tu API con Swagger o Postman (opcional).

---

## 📊 Criterios de Evaluación (evaluados internamente)

| Criterio                                           | Puntos |
| -------------------------------------------------- | ------ |
| Integración o simulación correcta de Deepseek      | 20%    |
| Diseño correcto de la API REST                     | 25%    |
| Implementación funcional del CRUD                  | 20%    |
| Buenas prácticas de código (modularidad, claridad) | 15%    |
| Manejo de errores y validaciones                   | 10%    |
| Documentación o claridad de uso                    | 10%    |

---

## 📝 Entrega

Sube tus cambios a una rama con tu nombre y apellido, ejemplo: tadeo-portillo y asegúrate de que el código pueda ser probado fácilmente.

¡Buena suerte y esfuérzate al máximo! 💪

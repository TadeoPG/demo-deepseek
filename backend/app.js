require('dotenv').config();
const openai = require("openai");
const PORT= process.env.PORT|| 4000; 

const express= require('express');
const cors= require('cors');
const apiRoutes=require('./routes/api')

const app= express();

app.use(express.json());
app.use(cors());

const path=require('path');

const baseDir = path.resolve(__dirname, '..');
const frontendDir = path.join(baseDir, 'frontend');

app.use(express.static(frontendDir));
// Ruta principal que envía el HTML
app.get('/', (req, res) => {
  res.sendFile(path.join(frontendDir, 'index.html'));
});


//RUTAS
app.use('/api', apiRoutes);


//Escuchar
app.listen(PORT || 4000, ()=>{
    console.log(`Servidor escuchando en http://localhost:${PORT}`);

});

























/*
//Servir el front con express (antes de rutas)




Lo ideal será servirlo por separado, especialmente en producción. Esos frameworks tienen sus propios build tools.

mi-app/
├── backend/       # Proyecto Node + Express
│   ├── app.js
│   ├── package.json
│   └── ...
├── frontend/      # Proyecto React, Vue o Next
│   ├── package.json
│   ├── src/
│   ├── public/
│   └── ...
└── README.md
*/


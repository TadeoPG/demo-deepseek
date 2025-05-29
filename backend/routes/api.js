const express = require('express');
const router = express.Router();
const  { callDeepseek }  = require('../controllers/registroController');


router.post('/registrar-producto', async (req, res) => {
  try {    
    const { nombre } = req.body;
    console.log('Nombre ', nombre);
    const respuesta = callDeepseek(nombre);

    res.json(respuesta);

  } catch (error) {

    console.error('Hay un error:', error.message);
    res.status(500).json({ error: 'Error en registro' });
  }
});



router.get('/leer', async (req, res) => {
  try {
    

    res.json(result);
  } catch (error) {

    
    console.error('Hay un error:', error.message);
    res.status(500).json({ error: 'Error en lectura' });
  }
});

router.get('/modificar', async (req, res) => {
  try {
    

    res.json(result);
  } catch (error) {

    
    console.error('Hay un error:', error.message);
    res.status(500).json({ error: 'Error en lectura' });
  }
});


module.exports = router;

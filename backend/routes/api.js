const express = require('express');
const router = express.Router();
const { callDeepseek } = require('../controllers/deepseekController');
const registroController=require('../controllers/registroController');


// router.post('/story', async (req, res) => {
//   try {
//     const { messages } = req.body;
//     const result = await callDeepseek(messages);
//     res.json(result);
//   } catch (error) {
//     console.error('Story error:', error.message);
//     res.status(500).json({ error: 'Error generando cuento con Deepseek.' });
//   }
// });


router.post('/registrar-producto', async (req, res) => {
  try {    
    const nombre = req.body;
    console.log('Nombre ', nombre);
    const respuesta = registroController(nombre);

    res.json(result);

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

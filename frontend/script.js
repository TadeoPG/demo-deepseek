async function ask() {
  const prompt = document.getElementById('nombre').value;

  const respuesta = document.getElementById('response');
  respuesta.textContent = 'Cargando...';

  try{
    const res= w
  } catch(err){

  }


  try {
    const res = await fetch('/api/registrar-producto', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nombre }) 
    });

    const descripcion = await res.json();

  } catch (err) {
    respuesta.textContent = 'Hubo un error al contactar al servidor.';
    console.error(err);
  }
}




// const res = await fetch(`http://localhost:3000/api/ask`, {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({ prompt })
// });
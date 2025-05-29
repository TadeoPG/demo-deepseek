function dummyResponse(req, res) {
  const { question } = req.body;
  console.log("Pregunta recibida:", question);

  res.json({
    answer: `Esta es una respuesta de prueba a tu pregunta: "${question}"`
  });
}

module.exports = { dummyResponse };

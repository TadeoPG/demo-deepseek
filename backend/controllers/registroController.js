const OpenAI = require("openai");


function callDeepseek(nombre_producto) {
    const completion = openai.chat.completions.create({
    messages: [{ role: "system", content: `Genera una descripcion de dos líneas para el producto de nombre ${nombre_producto}` }],
    model: "deepseek-chat",
    });

    console.log(completion.choices[0].message.content);
    return completion.choices[0].message.content;
}

function registroController(req,res){

    const nombre_prod = req.body;
    const descripcion= callDeepseek(nombre_prod);

    return descripcion;

}

const openai = new OpenAI({
        baseURL: 'https://api.deepseek.com',
        apiKey: `${process.env.DEEPSEEK_API_KEY}`
});


module.export= {
    registroController, callDeepseek
}
const OpenAI = require("openai");
const { DatabaseSync } = require('node:sqlite');
const database = new DatabaseSync(':memory:');

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


   database.exec(`
    CREATE TABLE productos(
    key INTEGER PRIMARY KEY,
    nombre TEXT,
    descripction TEXT
    ) ; `);
    
    database.prepare(`INSERT into productos VALUES(${nombre}, ${descripcion})`)


    return descripcion;

}

const openai = new OpenAI({
        baseURL: 'https://api.deepseek.com',
        apiKey: `${process.env.DEEPSEEK_API_KEY}`
});


module.export= {
    callDeepseek
}
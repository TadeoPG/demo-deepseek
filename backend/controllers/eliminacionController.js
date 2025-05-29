const { DatabaseSync } = require('node:sqlite');
const database = new DatabaseSync(':memory:');

function eliminacionController(req,res){
    const id = req.body;

    database.exec(`DELETE from Productos WHERE key=${id}`);


}

module.export= {
    eliminacionControler
}
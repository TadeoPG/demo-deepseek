import { ProductService } from "../service/ProductService.mjs"

export class ProductController{
    static async create(req, res){
        const {name} = req.body;
        const response = await ProductService.create(name);
        return res.status(201).json({
            message: 'Creado correctamente',
            producto: response
        })
    }

    static async updateById(req,res){
        const _id = req.params._id;
        const {name, description} = req.body;
        const response = await ProductService.update(_id, name, description);

        return res.status(200).json({
            message: 'Producto actualizado correctamente',
            producto: response
        })
    }

    static async getAllProducts(req,res){
        const response = await ProductService.getAllProducts();
        return res.status(200).json({response})
    }

    static async getById(req, res){
        const _id = req.params._id;
        const response = await ProductService.getById(_id);

        return res.status(200).json({
            response
        })
    }

    static async deleteById(req,res){
        const _id = req.params._id;
        const response = await ProductService.deleteById(_id);

        return res.status(200).json({
            response
        })    
    }
}
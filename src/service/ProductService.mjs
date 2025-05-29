import product from "../model/product.mjs";
import OpenAI from "openai";

export class ProductService{
    static async create(name){

        const openai = new OpenAI({
            baseURL: 'https://api.deepseek.com',
            apiKey: process.env.DEEP_KEY || 'sk-06f74b93ec39436694cf75b735196cb0'
        });

        const completion = await openai.chat.completions.create({
            messages: [{ role: "system", content: "You are a helpful assistant for create descriptions for products, give me only the descriptions pls about " + name }],
            model: "deepseek-chat",
          });

        const descriptionDeep = completion.choices[0].message.content;

        const NewProduct = new product({
            name: name,
            description: descriptionDeep
        })

        await NewProduct.save()
        return NewProduct;
    }

    static async update(_id, name, description){
        const existingProduct = await product.findById({_id})
        if(!existingProduct) throw new Error('El producto no existe')

        const productUpdated = await existingProduct.updateOne({
            name: name,
            description: description
        })

        return productUpdated;
    }

    static async getAllProducts(){
        return product.find();
    }

    static async getById(_id){
        const existingProduct = await product.findById({_id});
        if(!existingProduct) throw new Error('El producto no existe')

        return existingProduct;
    }

    static async deleteById(_id){
        const existingProduct = product.findById({_id});
        if(!existingProduct) throw new Error('El producto no existe')
        
        await product.findByIdAndDelete({_id});
        return 'El producto se eliminó'
    }
}
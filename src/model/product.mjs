import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    name:{
        type: String
    },
    description:{
        type: String
    }
}, {timestamps: true})

export default mongoose.model('Product', ProductSchema);
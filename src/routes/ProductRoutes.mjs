import Router from "express";
import { ProductController } from "../controller/ProductControler.mjs";

const ProductRouter = Router();

ProductRouter.post('/products', ProductController.create);
ProductRouter.get('/products', ProductController.getAllProducts);
ProductRouter.get('/products/:_id', ProductController.getById);
ProductRouter.put('/products/:_id', ProductController.updateById);
ProductRouter.delete('/products/:_id', ProductController.deleteById);

export default ProductRouter;
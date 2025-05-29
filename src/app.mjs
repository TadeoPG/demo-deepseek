import e from "express";
import cors from "cors"
import ProductRouter from "./routes/ProductRoutes.mjs";
import { connectDB } from "./config/db.mjs";
import { json } from "express";
const app = e();
connectDB();

app.use(cors());
app.use(json())

app.use('/api', ProductRouter);

app.listen(3000, () => {
    console.log('Service is listening on port ' + 3000)
})
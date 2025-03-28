import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/userRoute.js';
import productRouter from './routes/productRoute.js';
import cartRoute from './routes/cartRoute.js';
import orderRouter from './routes/orderRoute.js';


//App config
const app = express();
const port = process.env.PORT || 5000
connectDB();
connectCloudinary();

//middleware 
app.use(express.json());
app.use(cors());

//api endpoints
app.use('/user', userRouter);
app.use('/product', productRouter)
app.use('/cart', cartRoute)
app.use('/order', orderRouter)


app.get('/', (req, res) => {
    res.send("API Working");
})

app.listen(port, ()=> console.log('Server started on PORT: ' + port));
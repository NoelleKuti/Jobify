import express from 'express'
import dotenv from 'dotenv'
dotenv.config();
const app = express();

import connectDB from './db/connect.js';

// middleware
import notFoundMiddleware from './middleware/not-found.js';
import errorHandlerMiddleware from './middleware/error-handler.js';


app.get('/', (req, res) => {
    res.send('Welcome!');
})

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware)
const port = process.env.PORT || 5000;

//connect to mongoose
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URL)
        app.listen(port, () => console.log(`Server running on port ${port}`));        
    } catch (error) {
        console.log(error)
    }
}
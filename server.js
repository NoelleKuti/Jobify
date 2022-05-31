import express from 'express'
import dotenv from 'dotenv'
dotenv.config();
const app = express();

//routers
import authRouter from './routes/authRouter.js';
import jobsRouter from './routes/jobsRouter.js';

// db and authenticateUser
import connectDB from './db/connect.js';

// middleware
import notFoundMiddleware from './middleware/not-found.js';
import errorHandlerMiddleware from './middleware/error-handler.js';

app.use(express.json());


app.get('/', (req, res) => {
    res.send('Welcome!');
})

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/jobs', jobsRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware)
const port = process.env.PORT || 5000;

//connect to mongoose
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URL)
        app.listen(port, () => console.log(`Server running on port ${port}`));        
    } catch (error) {
        console.log(error);
    }
}

start();
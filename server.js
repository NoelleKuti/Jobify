import express from 'express'
import dotenv from 'dotenv'
import 'express-async-errors'
import 'http-status-codes'
import morgan from 'morgan'


dotenv.config();
const app = express();

//routers
import authRoutes from './routes/authRoutes.js';
import jobsRoutes from './routes/jobsRoutes.js';

// db and authenticateUser
import connectDB from './db/connect.js';

// middleware
import notFoundMiddleware from './middleware/not-found.js';
import errorHandlerMiddleware from './middleware/error-handler.js';

if (process.env.NODE_ENV !== 'production') {
	app.use(morgan('dev'));
}

app.use(express.json());
import cors from 'cors'
app.use(cors());

app.get('/', (req, res) => {
    res.json({msg: 'Welcome!'});
})
app.get('/api/v1', (req, res) => {
    res.json({msg: 'API'});
})

app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/jobs', jobsRoutes);

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
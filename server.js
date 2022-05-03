import express from 'express'
import dotenv from 'dotenv'
dotenv.config();
const app = express();

// middleware
import notFoundMiddleware from './middleware/not-found.js';
import errorHandlerMiddleware from './middleware/error-handler.js';

app.get('/', (req, res) => {
    res.send('Welcome!');
})

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware)
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
const express = require('express');
const connectDb = require('./config/dbConnection');
const errorHandler = require('./middleware/errorHandler');

const app = express();
connectDb();

const dotenv = require('dotenv');
dotenv.config();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use('/api/skills', require('./routes/skillRoutes'));
app.use(errorHandler);

app.listen(port, ()=>{
    console.log(port)
})
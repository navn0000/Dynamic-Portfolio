const express = require('express');
const connectDb = require('./config/dbConnection');
const errorHandler = require('./middleware/errorHandler');
const cors = require("cors");
const app = express();
app.use(cors());
connectDb();
const dotenv = require('dotenv');
dotenv.config();
const port = process.env.PORT || 5000;
app.use(express.json());
app.use('/api/skills', require('./routes/skillRoutes'));
app.use('/api/admin', require('./routes/adminRoutes'));
app.use(errorHandler);

app.listen(port, ()=>{
    console.log(port)
})
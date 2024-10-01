const express = require('express');
const mongoose = require ('mongoose');
const dotenv = require('dotenv');
const userRoutes = require('./src/routes/userRoutes');
const serieRoutes = require('./src/routes/serieRoutes');

dotenv.config();
const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI);

app.use('/api/users', userRoutes);
app.use('/api/series', serieRoutes);

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000!');
})
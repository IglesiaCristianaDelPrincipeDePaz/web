require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL);

const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to database'));

const app = express();
app.use(express.json());

// cors to fix issue while fetching
const cors = require('cors');
app.use(cors());

// predicas router
const predicasRouter = require('./routes/predicas.js');
app.use('/predicas', predicasRouter);

// eventos router
// blog router

app.listen(3000, () => {
  console.log('Running');
});

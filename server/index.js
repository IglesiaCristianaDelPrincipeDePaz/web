const express = require('express');
const app = express();
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

const express = require('express');
const router = express.Router();
const Predica = require('../models/predica');

// get all
router.get('/', async (req, res) => {
  try {
    const predicas = await Predica.find();
    res.json(predicas);
  } catch (error) {
    res.json({ message: error.message });
  }
});

// get one

// create one
router.post('/', async (req, res) => {
  const { titulo, autor, fecha, urlVideo } = req.body;
  const predica = new Predica({ titulo, autor, fecha, urlVideo });

  try {
    const newPredica = await predica.save();
    res.json(newPredica);
  } catch (error) {
    res.json({ message: error.message });
  }
});

// update one

// delete one

module.exports = router;

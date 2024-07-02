const express = require('express');
const router = express.Router();
// example
const predicas = [
  {
    id: 1,
    titulo: 'Atrévete a ser diferente',
    autor: 'Juan Serveleon',
    fecha: '2024-06-23',
    urlVideo: 'https://youtu.be/nowlHasXSC8?si=33Fl9zMLJycqjCfu',
  },
  {
    id: 2,
    titulo: 'Peleando por un sueño',
    autor: 'Juan Serveleon',
    fecha: '2024-06-16',
    urlVideo: 'https://youtu.be/pkrXjNFjL6E?si=Z16VcbfusizcwawS',
  },
];

router.get('/', (req, res) => {
  res.send(predicas);
});

module.exports = router;

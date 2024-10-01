const express = require('express');
const authenticate = require('../middlewares/authMiddleware');
const { criarSerie, listarSeries, attSerie, delSerie } = require('../controllers/serieController');
const router = express.Router();

router.post('/', authenticate, criarSerie);
router.get('/', authenticate, listarSeries);
router.put('/:id', authenticate, attSerie);
router.delete('/:id', authenticate, delSerie);

module.exports = router;
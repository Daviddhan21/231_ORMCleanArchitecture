const express = require('express');
const router = express.Router();
const komikController = require('../controllers/komikController');

router.get('/', komikController.getAll);
router.get('/:id', komikController.getById);
router.post('/', komikController.create);
router.put('/:id', komikController.update);
router.delete('/:id', komikController.delete);

module.exports = router;
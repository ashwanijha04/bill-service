const express = require('express');
const { addItem, getItems, getItemById } = require('../controllers/itemController');

const router = express.Router();

router.post('/add-item', addItem);
router.get('/get-items', getItems);
router.get('/get-item/:id', getItemById);

module.exports = router;

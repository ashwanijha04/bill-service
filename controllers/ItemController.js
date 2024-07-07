const itemService = require('../services/ItemService');

const addItem = async (req, res) => {
  try {
    const item = await itemService.addItem(req.body);
    res.send({ success: true, item });
  } catch (error) {
    res.status(500).send({ success: false, error: error.message });
  }
};

const getItems = async (req, res) => {
  try {
    const items = await itemService.getItems();
    res.send({ success: true, items });
  } catch (error) {
    res.status(500).send({ success: false, error: error.message });
  }
};

const getItemById = async (req, res) => {
  try {
    const item = await itemService.getItemById(req.params.id);
    res.send({ success: true, item });
  } catch (error) {
    res.status(500).send({ success: false, error: error.message });
  }
};

module.exports = { addItem, getItems, getItemById };

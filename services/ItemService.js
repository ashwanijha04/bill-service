const Item = require('../models/Item');

const addItem = async (itemData) => {
  const item = new Item(itemData);
  try {
    return await item.save();
  } catch (error) {
    throw new Error('Error adding item');
  }
};

const getItems = async () => {
  try {
    return await Item.find();
  } catch (error) {
    throw new Error('Error fetching items');
  }
};

const getItemById = async (id) => {
  try {
    return await Item.findById(id);
  } catch (error) {
    throw new Error('Error fetching item by ID');
  }
};

module.exports = { addItem, getItems, getItemById };

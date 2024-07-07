const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./config/db');
const itemRoutes = require('./routes/ItemRoutes');

const app = express();
const port = 8081;

app.use(bodyParser.json());
app.use(cors());

connectDB();

app.use('/api/items', itemRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

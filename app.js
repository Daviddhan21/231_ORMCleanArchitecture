const express = require('express');
const { sequelize } = require('./models');
const komikRoutes = require('./routes/komikRoutes');
require('dotenv').config();

const app = express();
app.use(express.json());

app.use('/api/komik', komikRoutes);

const PORT = process.env.PORT || 3000;

sequelize.sync({ alter: true }).then(() => {
  console.log('Database synced & table "komik" ready');
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}).catch((err) => {
  console.error('Failed to sync database:', err);
});
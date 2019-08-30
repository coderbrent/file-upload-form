const express = require('express');
const app = express();
const port = 5000;
const Sequelize = require('sequelize')
const dotenv = require('dotenv').config();

app.listen(port, () => console.log(`server started on ${port}`));

app.get('/api/', (req, res) => {
  
})

const sequelize = new Sequelize(
  process.env.DB_NAME, 
  process.env.DB_USERNAME, 
  process.env.DB_PASS, {
    dialect: "mysql",
    port: 3306,
});

sequelize
  .authenticate()
  .then(function(err) {
    console.log('Connection has been established successfully.');
  })
  .catch(function (err) {
    console.log('Unable to connect to the database:', err);
  });
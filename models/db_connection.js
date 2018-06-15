const Sequelize = require('sequelize');
const CONFIG = require("../config");


const sequelize = new Sequelize(CONFIG.DB, CONFIG.USER, CONFIG.PASSWORD, {
  host: CONFIG.HOST,
  dialect: CONFIG.DIALECT,
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });


  module.exports =  sequelize;
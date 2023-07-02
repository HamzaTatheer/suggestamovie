const Sequelize = require('sequelize');
let DB_HOST= process.env.RDS_HOSTNAME;
let DB_PORT= process.env.RDS_PORT;
let DB_USERNAME= process.env.RDS_USERNAME;
let DB_PASSWORD= process.env.RDS_PASSWORD;
let DB_NAME= process.env.RDS_DB_NAME;

const sequelize = new Sequelize(DB_NAME,DB_USERNAME, DB_PASSWORD, {
  host: DB_HOST,
  port: DB_PORT,
  dialect: 'mysql',
});

module.exports = sequelize;
const Sequelize = require("sequelize");
const db = require("../config/db");

const Customer = db.define("customer", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  lastname: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  phone: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  company: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  web: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  info: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Customer;

const Sequelize = require("sequelize");
const db = require("../database/db");

module.exports = db.sequelize.define(
  "products",
  {
    product_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    product_name: {
      type: Sequelize.STRING
    },
    age: {
      type: Sequelize.INTEGER
    },
    price: {
      type: Sequelize.INTEGER
    }
  },
  {
    timestamps: false
  }
);

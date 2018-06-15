var Sequelize = require("sequelize");

var sequelize = require("./db_connection");

const Response_details = sequelize.define('Response_details', {
    response_id: {
      type: Sequelize.BIGINT,
      primaryKey: true,
    },
    response_text: {
      type: Sequelize.STRING
    }
  });

  module.exports = Response_details;
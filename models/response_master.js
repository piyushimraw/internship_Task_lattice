var Sequelize = require("sequelize");

var sequelize = require("./db_connection");

const Response_details = sequelize.define('Response_details', {
    response_id: {
      type: Sequelize.BIGINT,
    },
    patient_id: {
      type: Sequelize.STRING
    },
    created_on: {
        type: Sequelize.DATEONLY
    }
  });

  module.exports = Response_details;
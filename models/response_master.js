var Sequelize = require("sequelize");

var sequelize = require("./db_connection");

const Response_Master= sequelize.define('Response_Master', {
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

  module.exports = Response_Master;
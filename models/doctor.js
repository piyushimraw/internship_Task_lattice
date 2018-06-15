var Sequelize = require("sequelize");

var sequelize = require("./db_connection");

const Doctor = sequelize.define('Doctor', {
    email_id: {
        type: Sequelize.STRING
    },
    doctor_id: {
        type: Sequelize.BIGINT
    }
  });

  module.exports = Doctor;
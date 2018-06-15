var Sequelize = require("sequelize");

var sequelize = require("./db_connection");

const Patient_Master = sequelize.define('Patient_Master', {
    patient_id: {
      type: Sequelize.BIGINT
    },
    prescription_date: {
      type: Sequelize.DATEONLY
    },
    email_id: {
        type: Sequelize.STRING
    },
    doctor_id: {
        type: Sequelize.STRING
    }
  });

  module.exports = Patient_Master;
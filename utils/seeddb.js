var Patient_Master = require("../models/patieent_master");
var Doctor = require("../models/doctor");


  Patient_Master.sync({force: true}).then(() => {
    // Table created
    return Patient_Master.create({
      patient_id: 001,
      prescription_date: new Date('December 17, 1995 03:24:00'),
      email_id: "piyush.srivastavaimraw@gmail.com",
      doctor_id: 007,
      has_surveyed: false
    });
  });



//     Doctor.sync({force: true}).then(() => {
// //     Table created
//      return Doctor.create({
//       doctor_id: 007,
//       email_id: "piyush.srivastavaimraw@gmail.com",
//     });
//   });
var Patient_Master = require("../models/patieent_master");
var Doctor = require("../models/doctor");
var Response_Details = require("../models/response_details");
var Response_Master =  require("../models/response_master");


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


//     Response_Details.sync({force: true}).then(() => {
// //     Table created
//      return Response_Details.create({
//       response_id: 001,
//       response_text: "Get Well soon",
//     });
//   });


//     Response_Master.sync({force: true}).then(() => {
// //     Table created
//      return Response_Master.create({
//       response_id: 23432324,
//       patient_id: 342312,
//       create_on: new Date('June 1, 2018 03:24:00')
//     });
//   });


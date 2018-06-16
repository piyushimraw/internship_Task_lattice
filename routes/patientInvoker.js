// This endpoint is simply to demonstrate the mailing notification it could be done as a micro-service 
// Running in a seprate microservice which will periodically query the DB to get all the users 
// that did not case1 criterias

var patientInvokerRouter = require("express").Router(),
                 moment  = require("moment");

var mailer = require("../utils/mailer");
var Patient_Master  = require("../models/patieent_master");
var Response_Master = require("../models/response_master");
var Doctor = require("../models/doctor");





/**
 * @api {get} api/patient/:id API to Invoke Mailer
 * @apiDescription This APi will invoke Mailer to notify patient that have not surveyed yet
 * To test this go Patient Response and send the response for useer_id = 001 to various dates and hit the get  route for same id  = 001
 * mail will be sent if response is like more than 5 weeks old
 * @apiGroup Patient
 * @apiName Invoke Patient Mailer
 * @apiSampleRequest http://localhost:4000/api/patient/001
 */

patientInvokerRouter.get("/:id" , (req, res)=> {
    var PatientID = req.params.id;
    console.log(PatientID);
    Patient_Master.findOne({where: {
        patient_id : PatientID
    }}).then( p => {
        var datePrescription =  moment(p.prescription_date);
        if(datePrescription.add(5, "w").isBefore(moment())){
            //Checking if User has Submitted any response
            Response_Master.findOne({where: {patient_id: p.patient_id}})
                            .then(r => {
                                if(moment(r.created_on).add(5, "w").isBefore( moment())){
                                    Doctor.findOne({where: {doctor_id:p.doctor_id}}).then(doc => {
                                        mailer("Doctor Who", doc.email_id);
                                        res.status(200).send(`Sending Mail to ${doc.email_id}`);
                                    });                                   
                                }
                                else {
                                    res.send("No Need to Send the Mail")
                                }
                            }).catch( e => {
                                Doctor.findOne({where: {doctor_id:p.doctor_id}}).then(doc => {
                                    mailer("Doctor Who", doc.email_id);
                                    res.status(200).send(`Sending Mail to ${doc.email_id}`);
                                })
                            });
        }
    }).catch(e => res.status(400).send("Patient Not Found"));

});


// function(req, res){
//     var patientID = req.params.id;
//     Patient_Master.findOne({where: {patient_id: patientID}}).then(patient => {
//         var date = moment(patient.prescription_date);
//         console.log(date);
//         if(date.add(5, "w") < moment()){
//             Doctor.findOne({where: {doctor_id:patient.doctor_id}}).then(doc => {
//                 mailer("Doctor Who", doc.email_id);
//             });
//         }
//         res.json(patient);
//     }).catch(e => {
//         res.status(400).send("User Not Found");
//     }).catch(e => {
//         res.status(500).send("Internal Server Error");
//     });

// });



module.exports = patientInvokerRouter;
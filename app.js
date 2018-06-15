var express = require("express");
var bodyParser = require ("body-parser")
var moment = require("moment");
var path = require("path");

var mailer =  require("./utils/mailer");


var app  = express ();

var Patient_Master = require("./models/patieent_master");
var Response_Details =  require("./models/response_details");
var Response_Master = require("./models/response_master");
var Doctor = require("./models/doctor");
var weekChecker = require("./utils/weekChecker");


//routes 
var Patient_Response_Router = require("./routes/Patient_Response_Router");

weekChecker();


app.use(express.static(path.join(__dirname, 'apidoc')));
app.use(bodyParser.urlencoded({extended: true}));

app.use('/api', Patient_Response_Router);
app.get("/patient/:id", function(req, res){
    var patientID = req.params.id;
    Patient_Master.findOne({where: {patient_id: patientID}}).then(patient => {
        var date = moment(patient.prescription_date);
        console.log(date);
        if(date.add(5, "w") < moment()){
            Doctor.findOne({where: {doctor_id:patient.doctor_id}}).then(doc => {
                mailer("Doctor Who", doc.email_id);
            });
        }
        res.json(patient);
    }).catch(e => {
        res.status(400).send("User Not Found");
    }).catch(e => {
        res.status(500).send("Internal Server Error");
    });

});






app.listen(4000, function(){
    console.log("App is listening on Port 4000");
});
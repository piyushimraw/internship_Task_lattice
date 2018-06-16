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
var Patient_Response_Router = require("./routes/Patient_Response_Router"),
            patientInvoker  = require("./routes/patientInvoker");

weekChecker();


app.use(express.static(path.join(__dirname, 'apidoc')));
app.use(bodyParser.urlencoded({extended: true}));

app.use('/api', Patient_Response_Router);
app.use("/api/patient", patientInvoker );






app.listen(4000, function(){
    console.log("App is listening on Port 4000");
});
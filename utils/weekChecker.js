var moment = require('moment');
var momentTimer = require("moment-timer");
var date = moment();
var mailer = require("./mailer");

var Patient_Master =  require("../models/patieent_master");
var Response_Master = require("../models/response_master");

var day = date.day()

console.log(day);



var Patient = []

var timer = moment.duration(30, "seconds").timer({loop: true}, function() {
    if(day === 5){
        Patient_Master.findAll({where :{has_surveyed: false}})
        .then(patient => {
            patient.forEach(p =>{
                mailer("Doctor Who", p.email_id);
            });
        })
        .catch(e => console.log(e));
    }
});



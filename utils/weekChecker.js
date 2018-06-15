var moment = require('moment');
var momentTimer = require("moment-timer");
var date = moment();
var mailer = require("./mailer");

var Patient_Master =  require("../models/patieent_master");
var Response_Master = require("../models/response_master");




var timerStart = function (){
    var timer = moment.duration(1, "day").timer({loop: true}, function() {
        var day = date.day()
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
}




module.exports = timerStart;


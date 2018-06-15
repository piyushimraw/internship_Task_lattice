var Patient_Response_Router = require("express").Router();

var  Response_Details =  require("../models/response_details");
var  Response_Master =  require("../models/response_master");
var  Patient_Master  =  require("../models/patieent_master");

/**
 * @apiDescription This API is to sending response by user.
 * 
 * Sending Response will reset the has_surveyed flag to true which will be valid for 35 days 
 * 
 *
 * @api {post} api/Response
 * @apiParam {Number} [patientID=001] Will be sent along with post request when user is logged in else this post route can not be accessed by user
 * @apiParam {Number} response_id   Mandatory ID for sample form response.
 * @apiParam {String} response_text Mandatory text for sample.
 * @apiSampleRequest http://localhost:4000/api/Response
 */
Patient_Response_Router.route("/Response")
                        .post((req,res) => {
                            if(req.body.response_id)
                             {
                                Response_Details.create(
                                    {
                                        response_id: req.body.response_id,
                                        response_text: req.body.response_text
                                    }).then(newResponse => {
                                        Patient_Master.findOne({where:{
                                            patient_id: req.body.patientID,
                                        }}).then(p => {
                                            p.updateAttributes({
                                                has_surveyed: true,
                                            })
                                        });
                                        res.status(200).json(newResponse);
                                    }).catch(error => {
                                        res.status(200).send("Error");
                                    }).catch(err => console.log(err))
                             }
                             else{
                                 res.status(500).send('Server Error  or Empty Post');
                             }
                        });

module.exports =  Patient_Response_Router;
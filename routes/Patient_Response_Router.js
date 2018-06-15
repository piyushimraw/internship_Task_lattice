var Patient_Response_Router = require("express").Router();

var  Response_Details =  require("../models/response_details");

/**
 * @apiDescription This API is to sending response by user.
 * 
 * Sending Response will reset the has_surveyed flag to true which will be valid for 35 days 
 * 
 *
 * @api {post} api/Response
 * @apiParam {Number} response_id   Mandatory ID for sample form response.
 * @apiParam {String} response_text Mandatory text for sample.
 * @apiSampleRequest http://localhost:4000/api/Response
 */
Patient_Response_Router.route("/Response")
                        .post((req,res) => {
                            if(req.body.response_id)
                             {
                                 
                                 res.status(200).send("OK");
                             }else{
                                res.status(500).send("Internal Server Error");
                             }
                        });

module.exports =  Patient_Response_Router;
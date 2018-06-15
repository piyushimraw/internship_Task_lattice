define({ "api": [
  {
    "description": "<p>This API is to sending response by user.</p> <p>Sending Response will reset the has_surveyed flag to true which will be valid for 35 days</p>",
    "type": "post",
    "url": "api/Response",
    "title": "",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "response_id",
            "description": "<p>Mandatory ID for sample form response.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "response_text",
            "description": "<p>Mandatory text for sample.</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:4000/api/Response"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/Patient_Response_Router.js",
    "group": "_home_piyush_projects_internship_task_routes_Patient_Response_Router_js",
    "groupTitle": "_home_piyush_projects_internship_task_routes_Patient_Response_Router_js",
    "name": "PostApiResponse"
  }
] });

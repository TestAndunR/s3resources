let AWS = require('aws-sdk');
let SL_GCP = require('slappforge-sdk-gcp');
let sqlConnMgr = require('./SqlConnMgr');
const sql = new SL_GCP.SQL(sqlConnMgr);
const cognito_idp = new AWS.CognitoIdentityServiceProvider();
const s3 = new AWS.S3();

exports.handler = function (event, context, callback) {

    let res = {
        "isBase64Encoded": 1,
        "statusCode": 200,
        "headers": {
            // "headerName": "headerValue"
        },
        "body": event.Name
    }
    
    cognito_idp.listUsers({
        UserPoolId: "us-east-1_22P5Kpusb",
        // AttributesToGet: ["name"],
        Limit: "10"
    }, function (error, data) {
        if (error) {
            // implement error handling logic here

            throw error;
        }
        // your logic goes within this block
        console.log(data)
    });
    // You can pass the existing connection to this function.
    // A new connection will be created if it's not present as the third param.
    // You must always end/destroy the DB connection after it's used.



    callback(null, 'Successfully executed');
}
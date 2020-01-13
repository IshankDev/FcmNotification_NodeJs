'use strict';

var functions = require('firebase-functions');
const admin = require("firebase-admin");
admin.initializeApp();


var registrationToken = "e_3EpuoC-I4:APA91bEqB5w49xT-xrhAnOWClBqco4uwqxLqxbBBaY7--fPwn25uLCRNquw9_A3wURl-SNn8GXH0yApP9IQQ60azpjP7HRs1p8T8Sul-xqYLNqETG_kmJrrpDmnECEch8IPxR3H4D0vy";

var payload = {

    data: {
        title: "Account Deposit",
        body: "A deposit to your savings account has just cleared.",
        account: "Savings",
        balance: "$3020.25"
    }
};

var options = {
    priority: "normal",
    timeToLive: 60 * 60
};

exports.sendToDevice = functions.https.onRequest((request, response) => {
    response.send("Send to Device");
    admin.messaging().sendToDevice(registrationToken, payload, options)
        .then((response) => {
            console.log("Successfully sent message:", response);
            return true;
        })
        .catch((error) => {
            console.log("Error sending message:", error);
        });

});








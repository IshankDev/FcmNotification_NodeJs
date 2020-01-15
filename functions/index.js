'use strict';

var functions = require('firebase-functions');
const admin = require("firebase-admin");
admin.initializeApp();


var registrationToken = "dJhZzoX2ixw:APA91bGSmlvcaFeFtjnnBR8bsnVdZmqM_SGAFp-U6GZhrMAAYQ86TfGSBCftTKTsy8LRfp69ELL7hEX1wXdD1tN24b5Z6Zq73h15MKmRH5IFoMoeuzFwhYlvE6D1r75kshhboZl-DLIu";

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









var admin = require("firebase-admin");
var functions = require('firebase-functions');


var serviceAccount = require("/Users/ishank/NodeJsApiTest/NodeNotificationWork/nodenotificationtest-firebase-adminsdk-aj5w7-f0ec1c6cc1.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://nodenotificationtest.firebaseio.com"
});


var registrationToken = "e_3EpuoC-I4:APA91bEqB5w49xT-xrhAnOWClBqco4uwqxLqxbBBaY7--fPwn25uLCRNquw9_A3wURl-SNn8GXH0yApP9IQQ60azpjP7HRs1p8T8Sul-xqYLNqETG_kmJrrpDmnECEch8IPxR3H4D0vy";

var payload = {
    notification: {
        title: "Account Deposit",
        body: "A deposit to your savings account has just cleared."
    },
    data: {
        account: "Savings",
        balance: "$3020.25"
    }
};

var options = {
    priority: "normal",
    timeToLive: 60 * 60
};

exports.sendToDevice = functions.https.onCall((data) => {

    admin.messaging().sendToDevice(registrationToken, payload, options)
        .then(function (response) {
            console.log("Successfully sent message:", response);
        })
        .catch(function (error) {
            console.log("Error sending message:", error);
        });

});





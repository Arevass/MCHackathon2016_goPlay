var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

app.use(express.static(__dirname + '/public'));

var Simplify = require("./node_modules/simplify-commerce/simplify.js"),
client = Simplify.getClient({
    publicKey: 'sbpb_M2EwNmRlNjEtMDZjZC00NzdiLWJjNWMtY2Y0ZmE4ZjMxZjcw',
    privateKey: 'yK9tO4zFpKqQSmSfEUQgBqGWTalrPDdjWmxBGIxEN/95YFFQL0ODSXAOkNtXTToq'
});

// respond with "hello world" when a GET request is made to the homepage
app.post('/payment', function(req, res) {

  console.log('Amount', req.body.amount);
  console.log('Token', req.body.token);

  client.payment.create({
        amount : req.body.amount,
        token : req.body.token,
        reference : "7a6ef6be31",
        description : "Test Payment",
        currency : "USD"
    }, function(errData, data){

        if(errData){
            console.error("Error Message: " + errData.data.error.message);
            // handle the error

            res.sendStatus(404);
            return;
        }

        console.log("Payment Status: " + data.paymentStatus);
        res.redirect('/success.html');
    });
});


app.listen(3000, function () {
  console.log('The KGB are listening on port 3000!');
});




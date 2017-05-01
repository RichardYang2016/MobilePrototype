// Library
const express = require("express");
const path = require('path');
const bodyParser = require('body-parser');
const logger = require('morgan');
const config = require('./config/config');
const api = require('./routes/api');


// global utilities 
axios = require('axios')

//Main
app = express();
var port = config.PORT;

app.set("views", path.join(__dirname, "www"));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

//set static folder
app.use(express.static(path.join(__dirname, 'www')));

//bodyparser MW

app.use(bodyParser.json({
    limit: '1mb'
}));
app.use(bodyParser.urlencoded({
    extended: false
}));


// Set HTTP Header
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, x-access-token, x-uid');
    next();
});

//API protector.
app.all('*', (req, res, next) => {
   
    if (req.method != "OPTIONS") {
     next()
    } else {
        return res.status(200).send();
    }
});


//Routes
app.use('/api', api);

app.use(function (req, res, next) {
    return res.status(404).send("API Not Found");
})


app.listen(port, function () {
    console.log('Started server:' + port);

});
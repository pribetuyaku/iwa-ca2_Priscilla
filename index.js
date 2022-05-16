const   http = require("http"),
        logger = require("morgan"),
        express = require("express"),
        mongoose = require("mongoose"),
        dotenv = require("dotenv");

//setting the ports
let app = express();
let port = process.env.PORT || 8000;

dotenv.config();

//routes
app.use(express.json());
app.use(logger("tiny"));
app.use(require('./routes'));

//connecting to the db
         mongoose.connect(process.env.dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
        .then((result) => console.log('Connection succeed'))
        .catch((err) => console.log(err));

//listen to the port
app.listen(port, function(err){
    console.log("Listening on port: " + port)
});
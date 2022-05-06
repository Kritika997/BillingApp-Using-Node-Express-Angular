const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");



var app = express();
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
dotenv.config({path:'.env'});

const port = process.env.PORT || 8080

app.listen(port,()=>{
    console.log("server is running perfectly.....")
})
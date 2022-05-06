const express = require("express");
const cookieParser = require("cookie-parser");
const signUpSchema = require("../model/signup");

const app = express();
app.use(express.json());



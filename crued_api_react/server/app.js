require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose"); 
require ("./db/conn");
const users = require("./models/userSchema");
const cors = require("cors");
const router = require("./routes/router");
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');


//port
const port = 8003;

//json
app.use(cors());
app.use(express.json());

// Set up Global configuration access
dotenv.config();

//router
app.use(router);

app.listen(port,() =>{
     console.log(`server is start port numer ${port}`);
}); 
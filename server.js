const dotenv = require("dotenv").config()

const express = require('express');

const logger = require("morgan");

const MoongoseConnect = require('./dataBase/index')

MoongoseConnect.connect()
const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));



app.listen(process.env.PORT, ()=>{
    console.log('runnig app por' + process.env.PORT);
})
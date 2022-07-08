const express = require('express');

const dotenv = require("dotenv").config()
const logger = require("morgan");

const MoongoseConnect = require('./dataBase/index')
MoongoseConnect.connect()

const products = require('./routes/product')

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/product', products)

app.listen(process.env.PORT, ()=>{
    console.log('runnig app por' + process.env.PORT);
})


module.exports = app;
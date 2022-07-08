const express = require('express');

const logger = require("morgan");
const dotenv = require("dotenv");

dotenv.config();
const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));



app.listen(process.env.PORT, ()=>{
    console.log('runnig app por' + process.env.PORT);
})
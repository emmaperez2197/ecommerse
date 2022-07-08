"use strict";

const { Schema, model } = require("mongoose");

const purchaseSchema = Schema({
    
    total:{
        type: Number,
        required: true
    },
   productos: {
       type: Array,
       required: true
   },
   tsCreate: {
        type: Date,
        default: Date.now  
    },

    enable : {
        type: Boolean,
        default: true
    },
    users : {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
     
});

module.exports = model('purchases', purchaseSchema)
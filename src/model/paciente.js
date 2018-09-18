'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    idPaciente:{
        type:Number,
        trim:true
    },
    nomePaciente:{
        type:String,
        trim:true
    },
    nomeSocial:{
        type:String,
        trim:true
    },
    nomeMae:{
        type:String,
        trim:true
    },
    sexo:{
        type:String,
        trim:true
    },
    numDoc:{
        type:String,
        trim:true
    },
    Peso:{
        type:Number,
        trim:true
    }
});

module.exports = mongoose.model('Admin',schema);
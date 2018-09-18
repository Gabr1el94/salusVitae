'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    idAprazado:{
        type:Number,
        trim:true
    },
    idPaciente:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Paciente'
    },
    isConsumido:{
        type:boolean,
        default:false,
        trim:true
    },
    intervalo:{
        type:Number,
        trim:true
    }
});

module.exports = mongoose.model('Aprazamento',schema);
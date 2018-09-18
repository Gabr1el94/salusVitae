'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    idPaciente:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Paciente'
    },
    alergia:[{
        descricao:{
            type:String,
            trim:true
        } 
    }],
    medicamentos:[{
        idMedicamento:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'Medicacao'
        },
        isCheck:{
            type:boolean,
            trim:true
        },
        Obs:{
            type:String,
            default:"",
            trim:true
        },
        dateSupensao:{
            type:Date,
            default:Date.now,
            trim:true
        }
    }]
});

module.exports = mongoose.model('Prescricao',schema);
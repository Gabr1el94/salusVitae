'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    idPaciente:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Paciente'
    },
    idMedicacao:{
        type:Number,
        trim:true
    },
    nomeMedicamento:{
        type:String,
        trim:true
    },
    dosagem:{
        type:String,
        trim:true
    },
    dateFabricacao:{
        type:Date,
        required: true,
    },
    dateValid:{
        type:Date,
        required: true,
    }
});

module.exports = mongoose.model('Medicacao',schema);
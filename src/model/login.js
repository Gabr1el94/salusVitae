'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    idPessoa:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Pessoa'
    },
    user:{
        type:String,
        required:[true,"Usuário como obrigatório"],
        trim:true
    },
    pwd:{
        type:String,
        required:[true,"Senha como obrigatório"],
        trim:true
    }
});

module.exports = mongoose.model('Admin',schema);
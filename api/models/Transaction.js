const mongoose = require('mongoose');

// Rest of your code using mongoose

const TransactionSchema = new mongoose.Schema({
     name:{type: String,required:true},
    price:{type:Number,required:true},
     description: {type: String,required:true},
     datetime: {type: Date, default: Date.now},
 });
 const TransactionModel = mongoose.model('Transaction', TransactionSchema);
 module.exports = TransactionModel;
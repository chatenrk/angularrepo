const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let Issue = new Schema ({
    title : String,
    responsible : String,
    description: String,
    severity: String,
    status: {
        type:String,
        default: 'Open'
    }
});

const model = mongoose.model('Issues',Issue);

module.exports.model = model;
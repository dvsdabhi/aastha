const mongoose = require('mongoose');

const inquirySchema = new mongoose.Schema({
    name : {
        type : String,
        require : true
    },
    email : {
        type : String,
        require : true
    },
    mobile : {
        type : Number,
        require : true
    },
    message : {
        type : String,
        require : true
    }
});

const inquiry = mongoose.model('inquiry',inquirySchema);
module.exports = inquiry;
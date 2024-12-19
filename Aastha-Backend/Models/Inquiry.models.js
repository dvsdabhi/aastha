const mongoose = require('mongoose');
const moment = require('moment-timezone');

const inquirySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    mobile: {
        type: Number,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    status: {
        type: String,
        default: "pending"
    },
    createdAt: {
        type: String, // Store as string in the desired format
        default: () => moment().tz('Asia/Kolkata').format('YYYY-MM-DD HH:mm') // Format the date to the required format
    }
});

const Inquiry = mongoose.model('Inquiry', inquirySchema);
module.exports = Inquiry;

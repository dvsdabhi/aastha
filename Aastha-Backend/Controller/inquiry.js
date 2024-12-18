const Inquiry = require('../Models/Inquiry.models');

const createInquiry = async (req,res) => {
    const { name, email, mobile, message } = req.body.inquiry;
    try {
        const data = new Inquiry ({
            name : name,
            email : email,
            mobile : mobile,
            message : message
        });
        data.save();
        return res.status(200).send({status:200,message : "Successfully send your inquiry.", data:data});
    } catch (error) {
        return res.status(501).send({status:501,message : error.message});
    }
}

module.exports = { createInquiry }
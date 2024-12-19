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

const PendingInquiry = async (req,res) => {
    try {
        const inquiry = await Inquiry.find({status:"pending"});
        if(inquiry){
            return res.status(200).send({status:200,message:"success",data:inquiry});
        } else {
            return res.status(200).send({status:200,message:"No any inquiry pending!",data:inquiry});
        }
    } catch (error) {
        return res.status(404).send({status:404,message:"Something went wrong please try again!"});
    }
}

const SolveInquiry = async ( req, res ) => {
    const { id } = req.params;
    console.log("id=-=-=-",id);
    try {
        const inquiry = await Inquiry.findByIdAndUpdate(
            id,
            { status: "solve" }, // Update status with the new value
            { new: true } // Return the updated inquiry
        );
        // If inquiry not found, send an error
        if (!inquiry) {
            return res.status(404).send({ message: 'Inquiry not found' });
        }

        // Return the updated inquiry
        res.status(200).send({message: 'Status updated successfully',data:inquiry});
    } catch (error) {
        return res.status(404).send({status:404,message:"Something went wrong please try again!"});
    }
}

module.exports = { createInquiry, PendingInquiry, SolveInquiry }
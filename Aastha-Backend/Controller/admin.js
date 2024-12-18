const Admin = require('../Models/admin.models');
const bcrypt = require('bcrypt');
const jwtProvider = require('../middleware/middleware');
const { v4 : uuidv4 } = require('uuid');
const { setUser } = require('../services/auth');

const createAdmin = async (req,res) => {
    const { email, password } = req.body;
    console.log("-=-",req.body);
    try {
        const pass = await bcrypt.hash(password,10);
        const adminData = new Admin ({
            email : email,
            password : pass
        });
        let admin = await adminData.save();
        // const jwt = jwtProvider.generateToken(admin._id);
        const sessionId = uuidv4();
        setUser(sessionId, admin);
        res.cookie("uid",sessionId);
        return res.status(200).send({status:200,message : "Admin create successfully !!.", data:admin});
    } catch (error) {
        return res.status(501).send({status:501,message : error.message});
    }
}

const adminLogin = async (req,res) => {
    const { email, password } = req.body.loginData;
    try {
        if(email && password) {
            const admin = await Admin.findOne({email:email});
            if(admin){
                const pass = await bcrypt.compare(password,admin.password);
                if(pass){
                    // const jwt = jwtProvider.generateToken(admin._id)
                    return res.status(201).send({status:200,message:"login success.....",result:admin});
                } else {
                    return res.status(401).send({status:401, message:"Please enter a valid password"});
                }
            }
        } else {
            return res.status(401).send( {status:401, message : "email & password not valid" });
        }
    } catch (error) {
        return res.status(501).send( {status:501, message : "email is not valid" });
    }
}

module.exports = { createAdmin, adminLogin };
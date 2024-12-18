const mongoose = require("mongoose");

const connectDB = async () => {
    const con = await mongoose.connect("mongodb://localhost:27017/Aastha",{
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    if(con){
        console.log("Database Connect Successfully");
    }
    return con;
}

module.exports = connectDB;
const mongoose = require("mongoose");

const connectDB = async (req, res) => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connect Database Successfully !");
        
    } catch (error) {
        res.status(500)
            .json({ message: "Failed to Database Connection" });
    }
}

module.exports = connectDB;
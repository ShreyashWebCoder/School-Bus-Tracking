const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    phone: {
        type: String,
        required: true,
    },
    // role: {
    //     type: String,
    //     enum: ["parent", "driver", "admin"],
    //     required: true,
    // },
    password: {
        type: String,
        required: true
    },
    children: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Child",
        },
    ],
    notifications: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Notification",
        },
    ],
    // token :{
    // type : String
    // }
}, { timestamps: true });


//  Password Hash using pre()
userSchema.pre("save", async function (next) {
    // console.log(this);

    const user = this;
    if (!user.isModified("password")) {
        //already bcrypt password
        next();
    }

    try {
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(user.password, salt);
        user.password = hashPassword;

    } catch (error) {
        next(error);
    }
})

//  Password Compare 
userSchema.methods.comparePassword = async function (password) {
    return bcrypt.compare(password, this.password);
}

//  Generate JWT Token [Can't store in DB , store on Cookies or local storage]
userSchema.methods.generateAccessToken = async function () {
    try {
        return jwt.sign({
            userId: this._id.toString(),
            email: this.email,
            role: this.role
        },
            process.env.JWT_SECRET_KEY,
            {
                expiresIn: "2d"
            }
        );

    } catch (error) {
        console.error(error.message);
    }
};


module.exports = mongoose.model("User", userSchema);

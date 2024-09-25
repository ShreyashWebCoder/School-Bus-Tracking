const User = require("../models/User.js");
// const Contact = require("../models/Contact.js")
const bcrypt = require("bcryptjs");

//  Register
const register = async (req, res) => {
    const { name, email, phone, password } = req.body;

    try {
        //  Already Exist User
        let userExist = await User.findOne({ email });
        if (userExist) {
            return res.status(400)
                .json({
                    status: 400,
                    message: "User Already Exists"
                });
        }

        //  Create New User 
        const userCreated = await User.create({
            name,
            email,
            phone,
            // role,
            password
        })

        //  Password Encryption
        //  const salt = await bcrypt.genSalt(10);
        //  const hashPassword = await bcrypt.hash(password, salt);

        await userCreated.save();

        if (userCreated) {
            return res.status(201)
                .json({
                    status: 201,
                    message: "Registration Successfully.",
                    // data: userCreated,
                    token: await userCreated.generateAccessToken(),
                    userId: userCreated._id.toString()
                });
        }
    } catch (error) {
        console.error(error.message);
        res.status(500)
            .json({
                status: 500,
                message: "Server Error"
            });
    }
}

//  Login
const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const registerUser = await User.findOne({ email });
        if (!registerUser) {
            return res.status(400)
                .json({
                    status: 400,
                    message: "Invalid Credentials "
                })
        }

        //Password Compared 
        // const isPasswordValid = await bcrypt.compare(password, registerUser.password);
        const isPasswordValid = await registerUser.comparePassword(password);

        if (isPasswordValid) {
            res.status(200)
                .json({
                    status: 200,
                    message: " Login Successfully.",
                    // data: userCreated,
                    token: await registerUser.generateAccessToken(),
                    userId: registerUser._id.toString()
                })
        } else {
            res.status(400)
                .json({
                    status: 400,
                    message: "Invalid Email or Password "
                })
        }

    } catch (error) {
        console.log(error.message);
        res.status(500)
            .json({
                status: 500,
                message: "Internal Server Error"
            })
    }
}



module.exports = { register, login};
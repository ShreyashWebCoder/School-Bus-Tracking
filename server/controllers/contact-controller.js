const Contact = require("../models/Contact.js");

//  Contact Form 
const contactForm = async (req, res) => {
    try {
        const { name, email, message } = req.body;
        const contactAlreadySend = await Contact.findOne({ email });

        if (contactAlreadySend) {
            return res.status(400)
                .json({ message: "Already contact delivered for this email" })
        }
        const response = req.body;
        await Contact.create(response);

        return res.status(200)
            .json({
                status: 200,
                message: "Message send Successfully",
                response: response
            });
            
    } catch (error) {
        console.log(error.message);

        return res.status(500)
            .json({ message: "Message not Delivered" });
    }
}

module.exports = contactForm;
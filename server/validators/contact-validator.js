const z = require("zod");

const contactValidatorSchema = z.object({
    name: z
        .string({ required_error: "Name is required" })
        .trim()
        .min(3, { message: "Name must be at least of 3 character" })
        .max(255, { message: "Name must not be more than 255 character" }),
    email: z
        .string({ required_error: "Email is required" })
        .trim()
        .email({ message: "Invaild Email address" })
        .min(3, { message: "Email must be at least of 3 character" })
        .max(255, { message: "Name must not be more than 255 character" }),
    message: z
        .string({ required_error: "Message is required" })
        .trim()
        .min(3, { message: "Message must be at least of 3 character" })
        .max(500, { message: "Message must not be more than 500 character" }),
})

module.exports = contactValidatorSchema ;
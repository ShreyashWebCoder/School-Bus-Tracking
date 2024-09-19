const z = require("zod");

//  Creating an Object Schema
//Registration Validation Schema
const registerValidatorSchema = z.object({
  name: z
    .string({ required_error: "Username is required" })
    .trim()
    .min(3, { message: "Username must be at least of 3 character " })
    .max(50, { message: "Username must not be more than 50 charaters " }),
  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({ message: "Invalid email address" })
    .min(3, { message: "Email must be at least of 3 character " })
    .max(50, { message: "Email must not be more than 50 charaters " }),
  phone: z
    .string({ required_error: "Phone is required" })
    .trim()
    .min(10, { message: "Phone must be at least of 10 character " })
    .max(20, { message: "Phone must not be more than 20 charaters " }),
  password: z
    .string({ required_error: "Password is required" })
    .trim()
    .min(8, { message: "Password must be at least of 8 character " })
    .max(50, { message: "Password must not be more than 50 charaters " }),
  role: z
    .string({ required_error: "Role is required" })
    .trim()
    .min(1, { message: "Please select one role" }),
  // .max(255, { message: "Select only three Role" })
});

//Login Validation Schema
const loginValidatorSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({ message: "Invalid email address" })
    .min(3, { message: "Email must be at least of 3 character " })
    .max(50, { message: "Email must not be more than 50 charaters " }),
  password: z
    .string({ required_error: "Password is required" })
    .trim()
    .min(8, { message: "Password must be at least of 8 character " })
    .max(50, { message: "Password must not be more than 50 charaters " }),
});

module.exports = { registerValidatorSchema, loginValidatorSchema };

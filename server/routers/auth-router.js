const express = require("express");
const router = express.Router();

//  Controllers
const authController = require("../controllers/auth-controller.js");

//  Middlewares
const validate = require("../middlewares/validate-middleware.js");
const { registerValidatorSchema, loginValidatorSchema } = require("../validators/auth-validator.js");


//  Routers
/*  Auth-Controllers Routes  */
router.route("/register").post(validate(registerValidatorSchema), authController.register);
router.route("/login").post(validate(loginValidatorSchema), authController.login);


module.exports = router;
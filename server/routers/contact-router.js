const express = require("express");
const router = express.Router();

const contactForm = require("../controllers/contact-controller.js");

const validate = require("../middlewares/validate-middleware.js");
const contactValidatorSchema = require("../validators/contact-validator.js");

router.route("/contact").post(validate(contactValidatorSchema), contactForm);


module.exports = router;
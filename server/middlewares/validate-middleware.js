// schema == registerValidatorSchema
const validate = (schema) => async (req, res, next) => {
    try {
        const parseBody = await schema.parseAsync(req.body);
        req.body = parseBody;
        return next();

    } catch (err) {
        const status = 422;
        // const message = err.errors[0].message;
        const message = "Fill input properly";
        const extraDetails = err.issues.map((ele) => (ele.message));

        const error = {
            status,
            message,
            extraDetails
        }
        console.log(error);
        next(error);

        return res.json({ message: error });

    }
}


module.exports = validate;

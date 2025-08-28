
const Joi = require("joi");

const UserContact = (req, res, next) => {
  const schema = Joi.object({
    firstname: Joi.string().min(2).max(50).required(),
    lastname: Joi.string().min(2).max(50).required(),
    email: Joi.string().email().required(),
    number: Joi.number().min(10).max(15).required(),
    message: Joi.string().min(5).max(500).required()
  });

  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ success: false, message: error.details[0].message });
  }

  next(); // ✅ move to controller if valid
};

module.exports =  UserContact;

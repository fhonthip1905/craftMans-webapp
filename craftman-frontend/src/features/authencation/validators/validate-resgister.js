import Joi from "joi";

const registerSchema = Joi.object({
  name: Joi.string()
    .required()
    .trim()
    .messages({ "string.empty": "first name is required." }),
  lastname: Joi.string()
    .required()
    .trim()
    .messages({ "string.empty": "last name is required." }),
  email: Joi.alternatives([Joi.string().email({ tlds: false })]).messages({
    "alternatives.match": "invalid email address.",
  }),
  password: Joi.string()
    .required()
    .pattern(/^[a-zA-Z0-9]{6,}$/)
    .messages({
      "string.empty": "password is required.",
      "string.pattern.base":
        "password must be at least 6 characters ande contain only alphabet and number.",
    }),
  confirmPassword: Joi.string().required().valid(Joi.ref("password")).messages({
    "string.empty": "confirm password is required.",
    "any.only": "password and confirm password did not match.",
  }),
});

const validateRegister = input => {
  const { error } = registerSchema.validate(input, { abortEarly: false });

  if (error) {
    const result = error.details.reduce((acc, el) => {
      acc[el.path[0]] = el.message;
      return acc;
    }, {});

    return result;
  }
};

export default validateRegister;

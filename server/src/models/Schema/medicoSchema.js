import { body } from "express-validator";
import passwordValidator from "password-validator";
const passwordSchema = new passwordValidator();
passwordSchema.is().min(8).has().digits(1);

export const createMedicoSchema = [
  body("username")
    .exists()
    .notEmpty()
    .withMessage("The username must not be empty.")
    .isString()
    .withMessage("The username must be string."),
  body("password")
    .exists()
    .notEmpty()
    .withMessage("Password must not be empty.")
    .isString()
    .withMessage(
      "The password must be a string and must contain at least one number."
    )
    .custom((value) => {
      if (!passwordSchema.validate(value)) {
        return "Password does not meet requirements";
      }
      return true;
    }),
  body("email")
    .exists()
    .notEmpty()
    .withMessage("Email should not be empty.")
    .isEmail()
    .withMessage("Must be in email format"),
];

export const loginMedicoSchema = [
  body("email")
    .exists()
    .notEmpty()
    .withMessage("Email should not be empty.")
    .isEmail()
    .withMessage("Must be in email format"),
  body("password")
    .exists()
    .notEmpty()
    .withMessage("Password must not be empty.")
    .isString()
    .withMessage(
      "The password must be a string and must contain at least one number."
    )
    .custom((value) => {
      if (!passwordSchema.validate(value)) {
        return "Password does not meet requirements";
      }
      return true;
    }),
];

export const validateMedic = (req, res, next) => {
  try {
    const { matricula } = req.body;
    const regexMatricula = /^[a-zA-Z0-9-]{5,20}$/;

    if (!regexMatricula.test(matricula)) {
      return res.status(400).json({
        message: "error matricula invalida",
      });
    }

    next();
  } catch (error) {
    console.log(error);
  }
};

import { body, validationResult } from "express-validator";

const validateUserInput = [
  body("name").notEmpty().withMessage("Name is required"),
  body("email").isEmail().withMessage("Invalid email format"),
  body("mobile")
    .matches(/^[6-9]\d{9}$/)
    .withMessage("Invalid Indian mobile number format"),
  body("rollNo").isInt().withMessage("Roll number must be an integer"),
  body("event").notEmpty().withMessage("Event is required"),
  body("city").notEmpty().withMessage("City is required"),
  body("state").notEmpty().withMessage("State is required"),
];

const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    // console.log("Validation Errors:", errors.array());
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

export { validateUserInput, handleValidationErrors };

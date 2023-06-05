import { body } from "express-validator";

export const registerValidation = [
    body('name').notEmpty().isLength(5).withMessage('Name is required'),
    body('age').isInt().withMessage('Age must be an integer'),
    body('email').isEmail().withMessage('Invalid email'),
];
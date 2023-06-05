import express from 'express'
import { userMid } from '../middleware/userMid.js';
import { registerValidation } from '../validation/userValidation.js';
import { userController } from '../controller/usercontroller.js';

const userRouter = express.Router();

userRouter.get('/', userController.getUser)
userRouter.get('/:id', userController.getUserById)
userRouter.post('/', userController.addUser)
userRouter.delete('/deleteuser/:id', userController.deleteUser)



export default userRouter
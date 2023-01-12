import {Router} from "express"
import {registrationUserController} from "../controllers/userControllers";

const userRouter = Router()

userRouter.post("/registration", registrationUserController)
userRouter.post("/signIn")
userRouter.post("/signOut")
userRouter.get('/activate/:link')
userRouter.get('/refresh')

export {userRouter}
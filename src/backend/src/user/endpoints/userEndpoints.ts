import {Router} from "express"
import {
    activateEmailController, getAllUsersController,
    loginUserController,
    logoutUserController,
    refreshTokenController,
    registrationUserController
} from "../controllers/userControllers";
import * as expressValidator from "express-validator"

const userRouter = Router()

userRouter.post("/registration",
    expressValidator.body("email").isEmail(),
    expressValidator.body("password").isLength({min: 3, max: 32}),
    registrationUserController)
userRouter.post("/signIn", loginUserController)
userRouter.post("/signOut", logoutUserController)
userRouter.get('/activate/:link', activateEmailController)
userRouter.get('/refresh', refreshTokenController)
userRouter.get("/users", getAllUsersController)

export {userRouter}
import {TControllerSignature} from "./utils/controllersType";
import {IUserSchema} from "../models/userModel";
import {
    activateUserService, getAllUsersService,
    loginUserService,
    logoutUserService, refreshTokenUserService,
    registrationUserService
} from "../services/userService";
import * as dotenv from "dotenv"
import {validationResult} from "express-validator"
import {ApiError} from "../exceptions/error";
dotenv.config()

const registrationUserController: TControllerSignature<IUserSchema> = async (req, res, next) => {
    try {
        const errors = validationResult(req)

        if (!errors.isEmpty()) {
            return next(ApiError.BadRequest("Validation error", errors.array()))
        }
        const {email, password} = req.body

        const userData = await registrationUserService(email, password)

        res.cookie("refreshToken", userData.refreshToken, {maxAge: 15 * 24 * 60 * 60 * 1000, httpOnly: true})

        return res.json(userData)
    } catch (e) {
        next(e)
    }
}

const activateEmailController: TControllerSignature<IUserSchema> = async (req, res, next) => {
    try {
        const activationLink = req.params.link
        await activateUserService(activationLink)
        // TODO fix env var
        return res.redirect(process.env.API_CLIENT_URL || "http://localhost:8020")
    } catch (e) {
        next(e)
    }
}

const loginUserController: TControllerSignature<IUserSchema> = async (req, res, next) => {
    try {
        const {email, password} = req.body

        const userData = await loginUserService(email, password)

        res.cookie("refreshToken", userData.refreshToken, {maxAge: 15 * 24 * 60 * 60 * 1000, httpOnly: true})

        return res.json(userData)
    } catch (e) {
        next(e)
    }
}

const logoutUserController: TControllerSignature<IUserSchema> = async (req, res, next) => {
    try {
        const {refreshToken} = req.cookies

        const token = await logoutUserService(refreshToken)
        res.clearCookie("refreshToken")

        return res.json(token)
    } catch(e) {
        next(e)
    }
}

const refreshTokenController: TControllerSignature<IUserSchema> = async (req, res, next) => {
    try {
        const {refreshToken} = req.cookies

        const token = await refreshTokenUserService(refreshToken)

        res.cookie("refreshToken", token, {maxAge: 15 * 24 * 60 * 60 * 1000, httpOnly: true})

        return res.json(token)
    } catch(e) {
        next(e)
    }
}

const getAllUsersController: TControllerSignature<IUserSchema> = async (req, res, next) => {
    try {
        const users =  await getAllUsersService()
        return res.json(users)
    } catch(e) {
        next(e)
    }
}

export {registrationUserController, activateEmailController, loginUserController, logoutUserController, refreshTokenController, getAllUsersController}
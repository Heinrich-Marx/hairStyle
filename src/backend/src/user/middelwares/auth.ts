import {NextFunction, Request, Response} from "express";
import {ApiError} from "../exceptions/error";
import {isNil} from "../../../../utils/nil";
import {validateAccessToken} from "../utils/validateTokens";

// TODO Fix it
const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    try {
        const authHeader = req.headers.authorization

        if (isNil(authHeader)) {
            return next(ApiError.UnauthorizedError())
        }

        const accessToken = authHeader.split(" ")[1]

        if (isNil(accessToken)) {
            return next(ApiError.UnauthorizedError())
        }
        const userData = validateAccessToken(accessToken)

        if (isNil(userData)) {
            return next(ApiError.UnauthorizedError())
        }

         req.user = userData

        next()
    } catch (e) {
        return next(ApiError.UnauthorizedError())
    }
}

export {authMiddleware}
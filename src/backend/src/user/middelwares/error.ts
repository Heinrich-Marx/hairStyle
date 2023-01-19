import {Response, Request, NextFunction} from "express";
import {ApiError} from "../exceptions/error";

const errorMiddleware = (err: Error, req: Request, res: Response, next: NextFunction) => {

	if (err instanceof ApiError) {
		return res.status(err.status).json({message: err.message, errors: err.errors});
	}

	return res.status(500).json({message: err.message});
};

export {errorMiddleware};
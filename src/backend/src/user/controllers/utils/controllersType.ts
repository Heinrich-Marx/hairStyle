import {Response, Request, NextFunction} from "express";
import {TAny} from "../../../../../utils/types";
import * as core from "express-serve-static-core";

type TControllerSignature<ReqBody extends TAny = TAny,ResBody extends TAny = TAny> = (req: Request<core.ParamsDictionary, ResBody ,ReqBody>, res: Response<ResBody>, next: NextFunction) => void

export type {TControllerSignature};
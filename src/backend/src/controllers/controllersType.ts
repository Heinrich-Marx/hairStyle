import { Response, Request} from "express";

type TControllerSignature = (req: Request, res: Response) => void

export type {TControllerSignature}
import {TControllerSignature} from "./controllersType";

const registrationUserController: TControllerSignature = async (req, res) => {
    res.json(["123"])
}

export {registrationUserController}
import {EModelsName} from "./utils/modelsNameEnum";
import {schemaCreator} from "../../utils/modelUtils/schemaCreator";
import {modelCreator} from "../../utils/modelUtils/modelCreator";

interface IUserSchema {
    email: string;
    password: string;
    isActivated: boolean;
    activationLink: string
}

const userSchema = schemaCreator<IUserSchema>({
    email: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    isActivated: {type: Boolean, default: false},
    activationLink: {type: String}
})

const userModel = modelCreator(EModelsName.user, userSchema)

export { userModel, IUserSchema }
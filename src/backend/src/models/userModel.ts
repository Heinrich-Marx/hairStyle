import {Schema, model} from "mongoose"
import {EModelsName} from "./modelsNameEnum";

const userSchema = new Schema({
    email: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    isActivated: {type: Boolean, default: false},
    activationLink: {type: String}
})

const userModel = model(EModelsName.user, userSchema)

export { userModel }
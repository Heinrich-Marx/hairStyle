import {Schema, model} from "mongoose"
import {EModelsName} from "./modelsNameEnum";

const tokenSchema = new Schema({
    user: {type: Schema.Types.ObjectId, ref: EModelsName.user},
    refreshToken: {type: String, unique: true}
})

const tokenModel = model(EModelsName.user, tokenSchema)

export { tokenModel }
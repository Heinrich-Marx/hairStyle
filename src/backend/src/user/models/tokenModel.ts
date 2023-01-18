import {Schema} from "mongoose";
import {EModelsName} from "./utils/modelsNameEnum";
import {schemaCreator} from "../../utils/modelUtils/schemaCreator";
import {modelCreator} from "../../utils/modelUtils/modelCreator";
import {TAny} from "../../../../utils/types";

interface ITokenSchema {
    user: TAny;
    refreshToken: string
}

const tokenSchema = schemaCreator<ITokenSchema>({
	user: {type: Schema.Types.ObjectId, ref: EModelsName.user},
	refreshToken: {type: String, unique: true}
});

const tokenModel = modelCreator(EModelsName.token, tokenSchema);

export { tokenModel };
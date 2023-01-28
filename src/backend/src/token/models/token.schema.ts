import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import * as mongoose from "mongoose";
import { EModelsName } from "../../models/utils/modelsNameEnum";


export type TokenDocument = mongoose.HydratedDocument<Token>;

@Schema()
export class Token {
  @Prop({required: true, unique: true})
  refreshToken: string;

  @Prop({type: [{ type: mongoose.Types.ObjectId, ref: EModelsName.user }]})
  user: EModelsName.user;


}

export const TokenSchema = SchemaFactory.createForClass(Token);

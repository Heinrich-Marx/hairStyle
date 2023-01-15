import {model, Schema} from "mongoose";

const modelCreator = <S extends Schema = Schema>(modelName: string, schema: S) => model(modelName, schema)

export {modelCreator}
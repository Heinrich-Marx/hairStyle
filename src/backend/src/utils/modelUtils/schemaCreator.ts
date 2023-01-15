import {Schema, SchemaDefinition, SchemaDefinitionType} from "mongoose";
import {TAny} from "../../../../utils/types";

const schemaCreator =<S extends TAny = TAny> (obj:SchemaDefinition<SchemaDefinitionType<S>>) => new Schema(obj)

export {schemaCreator}
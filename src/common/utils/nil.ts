import {TAny, TNil} from "./types";

const isNil = (value: TAny): value is TNil =>  value === null || value === undefined;

const isNotNil =<T> (value: T): value is Exclude<T, TNil> => value !== null && value !== undefined;

export {isNotNil, isNil}
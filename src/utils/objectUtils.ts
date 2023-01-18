import {TAny} from "./types";

const objectWithoutProperties =<T extends Record<string, TAny> = Record<string, TAny>>(obj: T, keys: Array<keyof T>) => {
    const target: Record<string, TAny> = {};
    for (let i in obj) {
        if (keys.indexOf(i) >= 0) continue;
        if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
        target[i] = obj[i];
    }
    return target;
}
// TODO fix types
const objectWithNewKeysName =<T extends Record<string, TAny> = Record<string, TAny>>(obj: T, ...keys: Array<[keyof T, string]>) => {
    const newObj:Record<TAny, TAny> = {...obj}

    keys.forEach(([oldKey, newKey]) => {
        if (newObj.hasOwnProperty(oldKey)) {
            newObj[newKey] = newObj[oldKey]
            delete newObj[oldKey]
        }
    })
    return newObj
}

export {objectWithoutProperties, objectWithNewKeysName}
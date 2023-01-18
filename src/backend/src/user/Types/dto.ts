import {TAny} from "../../../../utils/types";

class UserDto {
    email;
    id;
    isActivated;

    constructor(model:Record<string, TAny>) {
        this.email = model.email
        this.id = model._id
        this.isActivated = model.isActivated
    }
}

export {UserDto}
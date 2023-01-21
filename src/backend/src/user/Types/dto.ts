import {TAny} from "../../../../utils/types";

class UserDto {
	email;
	id;
	isActivated;
	activationLink;

	constructor(model:Record<string, TAny>) {
		this.email = model.email;
		this.id = model._id;
		this.isActivated = model.isActivated;
		this.activationLink = model.activationLink;
	}
}

export {UserDto};
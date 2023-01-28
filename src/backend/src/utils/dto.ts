import { TAny } from "./types";

export class UserDto {
	email;
	id;
	isActivated;
	activationLink;
	userRole
	constructor(model:Record<string, TAny>) {
		this.email = model.email;
		this.id = model._id;
		this.isActivated = false;
		this.activationLink = model.activationLink;
		this.userRole = model.userRole
	}
}
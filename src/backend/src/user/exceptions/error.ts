import {TAny} from "../../../../utils/types";

class ApiError extends Error {
	status;
	errors;

	constructor(status: number, message: string, errors:TAny[] = []) {
		super(message);
		this.status = status;
		this.errors = errors;
	}

	static UnauthorizedError() {
		return new ApiError(401, "User unauthorized");
	}

	static BadRequest(message: string, errors:TAny[] = []) {
		return new ApiError(400, message, errors);
	}
}

export {ApiError};
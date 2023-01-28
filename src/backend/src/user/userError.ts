import { TAny } from "../utils/types";

export class UserError extends Error {
  status;
  errors;

  constructor(status: number, message: string, errors:TAny[] = []) {
    super(message);
    this.status = status;
    this.errors = errors;
  }

  static UnauthorizedError() {
    return new UserError(401, "User unauthorized");
  }

   static BadRequest(message: string, errors:TAny[] = []) {
    return new UserError(400, message, errors);
  }

  static ServerError(message: string, errors:TAny[] = []) {
    return new UserError(500, message, errors);
  }
}


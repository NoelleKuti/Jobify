import CustomAPIError from "./custom-api";

export default class UnauthenticatedError extends CustomAPIError {
	constructor(message) {
		super(message);
		this.statusCode = StatusCodes.UNAUTHORIZED;
	}
}
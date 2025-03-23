interface ErrorResponse {
	response?: {
		data?: {
			message?: string | string[];
		};
	};
	message?: string;
}

export const errorCatch = (error: ErrorResponse): string => {
	const message = error?.response?.data?.message;

	return message
		? typeof message === "object" && Array.isArray(message)
			? message[0]
			: message
		: error.message || "Произошла неизвестная ошибка";
};

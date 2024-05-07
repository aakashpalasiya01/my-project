import * as commonService from "../../CommonService" 

interface ErrorType {
	message: string
	status: number
	success: boolean
}

export default function clientErrorHandler (error: ErrorType) {
	const message  = error?.message ? error.message : 'Seems like something went wrong!';
		// Create a temporary element
	const tempDiv = document.createElement("div");
	// Set the HTML content
	tempDiv.innerHTML = message;
	// Retrieve the text content, which will not contain HTML tags
	const plainText = tempDiv.textContent || tempDiv.innerText || "";

	switch (error.status) {
		case 400:
			commonService.forError(plainText);
			break;
		case 401:
			commonService.forError(plainText);
			break;
		case 403:
			commonService.forError(plainText);
			break;
		case 500:
			commonService.forError(plainText);
			break;
		case 504:
			commonService.forError('Sorry, could not access the external resource to refine the data for your request, please try again later!');
			break;
		case 700:
			commonService.forError(plainText);
			break;
		default:
			commonService.forError(plainText ? plainText : 'something went wrong');
			break;
	}
	return Promise.reject(error);
}

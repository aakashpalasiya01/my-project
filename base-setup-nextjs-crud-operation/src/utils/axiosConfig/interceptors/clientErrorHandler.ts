import * as commonService from "../../CommonService" 

interface ErrorType {
	message: string
	status: number
	success: boolean
}

export default function clientErrorHandler (error: ErrorType) {
	const message  = error?.message ? error.message : 'Seems like something went wrong!' ;
	switch (error.status) {
		case 400:
			commonService.forError(message);
			break;
		case 401:
			commonService.forError(message);
			break;
		case 500:
			commonService.forError(message);
			break;
		case 504:
			commonService.forError('Sorry, could not access the external resource to refine the data for your request, please try again later!');
			break;
		case 700:
			commonService.forError(message);
			break;
		default:
			commonService.forError(message ? message : 'something went wrong');
			break;
	}
	return Promise.reject(error);
}

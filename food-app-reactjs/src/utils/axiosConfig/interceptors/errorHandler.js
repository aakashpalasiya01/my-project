import axios from 'axios';
import * as commonService from '../../common/CommonService'

const handleAuthentication = (message) => {
	commonService.forError(message, 'Warning');
	if (localStorage["token"]) {
		localStorage.removeItem('token');
		localStorage.removeItem('user');
		setTimeout(() => {
			window.location.reload()
		}, 1500);

	}
};

export default function errorHandler(error) {
	//hide loader
	commonService.isLoading.onNext(false);
	if (axios.isCancel(error)) {
		return Promise.reject(error);
	}
	if (error.message === "Network Error") {
		commonService.forError('Error connecting server. Please check your internet connection.', 'Error');
		return Promise.reject(error.message);
	}
	const message = error.response ? error.response.data.message : 'Seems like something went wrong!';
	switch (error.response.status) {
		case 400:
			if (message === 'invalid token' || message === 'jwt expired') handleAuthentication(message);
			else commonService.forError(message, 'Warning');
			break;
		case 401:
			handleAuthentication(message);
			break;
		case 500:
			commonService.forError(message, 'Error');
			break;
		case 504:
			commonService.forError('Sorry, could not access the external resource to refine the data for your request, please try again later!', 'Error');
			break;
		case 700:
			commonService.forError(message, 'Error');
			break;
		default:
			commonService.forError(message ? message : 'something went wrong', 'Error');
			break;
	}
	return Promise.reject(error.response);
}

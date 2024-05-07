import * as API from 'api/foodApi'
import actionType from './actionType'
import * as commonService from 'utils/common/CommonService'

export const getAllFood = () => async dispatch => {
    commonService.isLoading.onNext(true);
    dispatch({
        type: actionType.GET_ALL_FOODDATA,
        payload: await API.getAllFoodApi()
    })
    commonService.isLoading.onNext(false);
}

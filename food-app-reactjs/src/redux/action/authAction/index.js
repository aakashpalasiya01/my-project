import actionType from './actionType'
import axios from 'utils/axiosConfig'
import * as commonService from 'utils/common/CommonService'
// import * as API from 'api/authApi'

export const login = (form) => async dispatch => {
    commonService.isLoading.onNext(true);
    const res = await axios.post('api/auth/login', form)
    if(!res.error) {
        dispatch({
            type: actionType.LOGIN,
            payload: res
        })
        localStorage.setItem('user', JSON.stringify(res))
        localStorage.setItem('token', res.key)
        commonService.isLoading.onNext(false);
        return res
    }
}

export const logout = () => async dispatch => {
    commonService.isLoading.onNext(true);
        dispatch({
            type: actionType.LOGOUT,
            payload: null
        })
        localStorage.removeItem('user')
        localStorage.removeItem('token')
        commonService.isLoading.onNext(false);
    }

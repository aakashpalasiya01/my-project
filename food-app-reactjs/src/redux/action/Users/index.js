import * as API from 'api/usersApi'
import actionType from './actionType'
import * as commonService from 'utils/common/CommonService'

export const getUsers = (params) => async dispatch => {
    commonService.isLoading.onNext(true);
    dispatch({
        type: actionType.GET_USERS,
        payload: await API.getUsersApi(params)
    })
    commonService.isLoading.onNext(false);
}

export const getUserById = (id) => async dispatch => {
    commonService.isLoading.onNext(true);
    dispatch({
        type: actionType.GET_USER_BY_ID,
        payload: await API.getUserByIdApi(id)
    })
    commonService.isLoading.onNext(false);
}

export const deleteUserById = (id,userList) => async dispatch => {
    commonService.isLoading.onNext(true);
    const response=await API.deleteUserByIdApi(id)
    const updateduserdata= userList.filter((value)=>value._id !== id)
    dispatch({
        type: actionType.DELETE_USER_BY_ID,
        payload: updateduserdata
    })
    commonService.isLoading.onNext(false);
    return response
}

export const updateUserById = (id,formData) => async dispatch => {
    commonService.isLoading.onNext(true);
    const res = await API.updateUserByIdApi(id,formData)
    dispatch({
        type: actionType.UPDATE_USER_BY_ID,
        payload: res
    })
    commonService.isLoading.onNext(false);
    return res
}

export const addUser = (data) => async dispatch => {
    const res=await API.addUserApi(data)
    console.log(res);

    commonService.isLoading.onNext(true);
    dispatch({
        type: actionType.ADD_USER,
        payload: res
    })
    commonService.isLoading.onNext(false);
    return res
}
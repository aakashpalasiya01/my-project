import actionType from '../action/Users/actionType';

const initialState = {
    users: [],
}
  
const userReducers = (state = initialState, action) => {
    switch (action.type) {
        case actionType.GET_USERS: return (
            {...state, users: action?.payload?.employees}
            )
        case actionType.GET_USER_BY_ID: return (
            {...state, users: action?.payload}
        )
        case actionType.DELETE_USER_BY_ID: return (
            {...state, users: action?.payload}
        )
        case actionType.UPDATE_USER_BY_ID: return (
            {...state, users: action?.payload}
        )
        case actionType.ADD_USER: return (
            {...state, users: action?.payload}
        )
        default: return state
    }
}
  
export default userReducers
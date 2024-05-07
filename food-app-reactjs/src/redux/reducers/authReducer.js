import actionType from '../action/authAction/actionType'
const token = localStorage.getItem('token')
const user = JSON.parse(localStorage.getItem('user'))

const initialState = {
    token,
    user
}
  
const authReducers = (state = initialState, action) => {
    switch (action.type) {
        case actionType.LOGIN: return (
            {...state, token: action.payload.key, user: action.payload}
        )
        case actionType.LOGOUT: return (
            {...state, token: null, user: null}
        )
        default: return state
    }
}
  
export default authReducers
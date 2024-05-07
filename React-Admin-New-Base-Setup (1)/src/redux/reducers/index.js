import { combineReducers } from 'redux'
import auth from './authReducer'
import userReducers from './userReducers'

const reducers = combineReducers({
  auth,
  userReducers,

})
export default reducers
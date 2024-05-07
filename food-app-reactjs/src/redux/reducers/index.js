import { combineReducers } from 'redux'
import auth from './authReducer'
import userReducers from './userReducers'
import foodReducers from './foodReducer'


const reducers = combineReducers({
  auth,
  userReducers,
  foodReducers,

})
export default reducers
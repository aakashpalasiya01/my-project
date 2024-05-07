import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import promiseMiddleware from 'redux-promise-middleware';
import reducers from '../reducers'

let middleware = [thunkMiddleware, promiseMiddleware]

const store = createStore(reducers, applyMiddleware(...middleware))

export default store
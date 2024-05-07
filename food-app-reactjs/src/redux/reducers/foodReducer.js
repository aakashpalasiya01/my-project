import actionType from '../action/Food/actionType';

const initialState = {
    food: [],
}
  
const foodReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.GET_ALL_FOODDATA: return (
            {...state, food: action?.payload}
            )
   
        default: return state
    }
}
  
export default foodReducer
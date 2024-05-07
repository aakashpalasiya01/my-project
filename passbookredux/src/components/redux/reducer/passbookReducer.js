import { ADD_ITEM } from "../actionTypes";
const initialState = {
  list: [],
  remainingAmount:0
};
 const passbookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        list: [...state.list, action.payload],
      }
     

    
    default:
      return state;
  }
};

export default passbookReducer;
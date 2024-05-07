import { ADD_ITEM,DELETE_ITEM,UPDATE_ITEM } from "./actionTypes";
const initialState={
    users:[]
}
 const formReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_ITEM:
        return {
          ...state,
          users:[...state.users,action.payload],
        };
  
      case DELETE_ITEM:
        return {
          ...state,
          users: state.users.filter((user,idx)=>idx !==action.payload)
        };
        case UPDATE_ITEM:
            return {
              ...state,
              users:state?.users?.map(user=>{
                if (user.id===action.payload.id){
                    return action.payload
                }
                return user
              }),
            };
      default:
        return state;
    }
  };
  export default formReducer
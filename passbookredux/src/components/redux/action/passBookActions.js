import { ADD_ITEM } from "../actionTypes";

const addItem = (creditInterest) => {
  
  return {
    type: ADD_ITEM,
    payload:creditInterest,
  };
};


export { addItem};

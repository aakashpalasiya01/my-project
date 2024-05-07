import { ADD_ITEM, DELETE_ITEM, UPDATE_ITEM } from "./actionTypes";

 const addItem = (formData) => {
    return {
      type: ADD_ITEM,
      payload: formData,
    };
  };
const deleteItem = (index) => {
  return {
    type: DELETE_ITEM,
    payload:index
  };
};
const updateItem = (formData) => {
    return {
      type: UPDATE_ITEM,
      payload:formData
    };
  };
  

export { addItem, deleteItem,updateItem };
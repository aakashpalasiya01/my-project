import { createSlice } from "@reduxjs/toolkit";
const userReducers = createSlice({
    name : "user",
    initialState : {
        users : [],
        
    },
    reducers : {
        getUsers : (state,action)=>{
            state.users = action.payload
        },
        deleteUsers : (state,action)=>{
            state.users = action.payload
        },
        updateData : (state,action)=>{
            state.users =action.payload;
        }
    }
})
export const { getUsers,deleteUsers,updateData} =userReducers.actions;
export default userReducers.reducer;
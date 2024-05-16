'use client'
import { PayloadAction, createSlice} from "@reduxjs/toolkit";
import { GroupDataType, InitialRegistrationState, RegisterDataType } from "../../component/Registernow/Registertype";

const initialState:InitialRegistrationState={
    group:[],
    register:null
  
}

export const registerSlice =createSlice({
      name:'register',
      initialState,
      reducers:{
        setGroup:(state,action:PayloadAction<GroupDataType[]>)=>{
            state.group=action.payload
         },
         setRegister:(state,action:PayloadAction<RegisterDataType>)=>{
            state.register=action.payload
         },
      }

})
export const  {setGroup,setRegister}=registerSlice.actions
export default registerSlice.reducer

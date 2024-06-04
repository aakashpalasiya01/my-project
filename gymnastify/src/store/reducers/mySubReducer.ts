"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { InitialSubDtlType,SubDataInterface, Plan_Subscription, InvoiceHistoryItem} from "@/component/Subscription/MySubscription/MySubType";

const initialState:InitialSubDtlType = {
    subscriberDetailList : [],
    mySubLoading:false,
    invoiceHistoryList:[],
    orderLoading:false,
    RecentOrderLoading:false,
    RecentOrders:[],
    InvoiceTableData:[],
};
export const MySubSlice = createSlice({
    name:"mySub",
    initialState,
    reducers:{
        setSubDtl : (state,action:PayloadAction<SubDataInterface>)=>{
            state.subscriberDetailList = [action.payload];
        },
        setSubLoading: (state,action:PayloadAction<boolean>)=> {
            state.mySubLoading = action.payload
        },
        setInvoiceData: (state,action:PayloadAction<Plan_Subscription[]>)=>{
            state.invoiceHistoryList = action.payload
        },
        setInvoiceTableData: (state,action:PayloadAction<any[]>)=>{
            state.InvoiceTableData = action.payload
        },
        setOrderLoading: (state,action:PayloadAction<boolean>)=>{
            state.orderLoading = action.payload
        },
        setRecentOrders: (state,action:PayloadAction<InvoiceHistoryItem[]>) => {
            state.RecentOrders = action.payload;
        },
        setRecentOrderLoading: (state,action:PayloadAction<boolean>)=>{
            state.RecentOrderLoading = action.payload
        },
    }
});

export const {setSubDtl,setSubLoading,setInvoiceData,setOrderLoading,setRecentOrders,setRecentOrderLoading,setInvoiceTableData} = MySubSlice.actions;
export default MySubSlice.reducer;
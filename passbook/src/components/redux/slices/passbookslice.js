import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
  remainingAmount: 0,
  form: {
    transactionamount: 0,
    transactiontype: "credit",
    remark: "",
  },
};
const persistedStateJSON = localStorage.getItem("passbookState");
const persistedState = persistedStateJSON
  ? JSON.parse(persistedStateJSON)
  : initialState;

export const passbookslice = createSlice({
  name: "passbook",
  initialState: persistedState,
  reducers: {
    setList: (state, action) => {
      state.setlist = action.payload;
      localStorage.setItem("passbookState", JSON.stringify(state));
    },

    setForm: (state, action) => {
      state.form = { ...state.form, ...action.payload };
      localStorage.setItem("passbookState", JSON.stringify(state));
    },
    setRemainingAmount: (state, action) => {
      state.remainingAmount = action.payload;
      localStorage.setItem("passbookState", JSON.stringify(state));
    },
    clearForm: (state) => {
      state.form = {
        transactionamount: 0,
        transactiontype: "credit",
        remark: "",
      };
      localStorage.setItem("passbookState", JSON.stringify(state));
    },
    addToPassbook: (state, action) => {
      state.list.push(action.payload);
      localStorage.setItem("passbookState", JSON.stringify(state));
    },
  },
});

export const {
  setList,
  setRemainingAmount,
  setForm,
  clearForm,
  addToPassbook,
} = passbookslice.actions;

export default passbookslice.reducer;

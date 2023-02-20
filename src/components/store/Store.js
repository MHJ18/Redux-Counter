import { configureStore, createSlice } from "@reduxjs/toolkit";
const reducerFn = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    increment(state, action) {
      return state + 1;
    },
    decrease(state, action) {
      return state - 1;
    },
    onclick(state, action) {
      console.log(action);
      return (state += action.payload);
    },
  },
});
export const actions = reducerFn.actions;
const store = configureStore({
  reducer: reducerFn.reducer,
});
export default store;

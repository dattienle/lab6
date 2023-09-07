import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
const store = configureStore({
  reducer: {
    contact: cartSlice.reducer,
  },
});

export default store;

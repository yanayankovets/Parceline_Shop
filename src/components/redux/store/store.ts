import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./reducers/cartSlice";
import chosenItemReducer from "./reducers/chosenItem";
import authReducer from "./reducers/authSlice";
import shopReducer from "./reducers/shopSlice";

export const store = configureStore({
  reducer: {
    list: cartReducer,
    chosenItem: chosenItemReducer,
    auth: authReducer,
    shop: shopReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

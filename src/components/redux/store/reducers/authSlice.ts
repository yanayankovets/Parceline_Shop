import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface cartState {
  user: any;
  isAuth: boolean;
}

const initialState: cartState = {
  user: {},
  isAuth: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<any>) => {
      state.user = action.payload;
      state.isAuth = true;
    },
  },
});

export const { setUser } = authSlice.actions;

export default authSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface shopState {
  value: any[];
}

const initialState: shopState = {
  value: [],
};

export const shopSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setShopItems: (state, action: PayloadAction<any>) => {
      state.value = action.payload;
    },
  },
});

export const { setShopItems } = shopSlice.actions;

export default shopSlice.reducer;

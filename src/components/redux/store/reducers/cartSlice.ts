import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface cartState {
  value: any;
}

const initialState: cartState = {
  value: [],
};

export const listSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<any>) => {
      state.value = [...state.value, action.payload];
    },
    removeItem: (state, action: PayloadAction<any>) => {
      state.value = state.value.filter(
        (el: any) => el.id !== action.payload.id
      );
    },
    clearCart: (state) => {
      state.value = [];
    },
  },
});

export const { addItem, removeItem, clearCart } = listSlice.actions;

export default listSlice.reducer;

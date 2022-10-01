import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface itemState {
  value: any;
}

const initialState: itemState = {
  value: null,
};

export const chosenItemSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    chooseItem: (state, action: PayloadAction<any>) => {
      state.value = action.payload;
    },
  },
});

export const { chooseItem } = chosenItemSlice.actions;

export default chosenItemSlice.reducer;

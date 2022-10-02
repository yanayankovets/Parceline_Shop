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
    addItem: (state, { payload: newCartItem }: PayloadAction<any>) => {
      const alreadyExistingItemInCart = state.value.find(
        (cartItem: any) => cartItem.id == newCartItem.id
      );

      if (alreadyExistingItemInCart) {
        state.value = state.value.map((cartItem: any) => {
          return (cartItem.id = newCartItem.id
            ? {
                ...cartItem,
                count: parseInt(cartItem.count) + parseInt(newCartItem.count),
              }
            : cartItem);
        });
        return;
      }
      state.value = [...state.value, newCartItem];
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

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartProducts: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.cartProducts.find((i) => i.id === action.payload.id);
      if (item) {
        item.quantity += 1;
      } else {
        state.cartProducts.push({ ...action.payload, quantity: 1 });
      }
    },
    deleteFromCart: {},
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;

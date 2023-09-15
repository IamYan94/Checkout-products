import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      if (state.some((product) => product.id === action.payload.id)) {
        // If the item was added to cart, just increment quantity
        return state.map((product) =>
          product.id === action.payload.id
            ? { ...product, quantity: product.quantity + 1 }
            : product
        );
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    removeItem(state, action) {
      const item = state.find((product) => product.id === action.payload.id);

      if (item.quantity > 1) {
        return state.map((product) =>
          product.id === action.payload.id
            ? { ...product, quantity: product.quantity - 1 }
            : product
        );
      } else {
        return state.filter((product) => product.id !== action.payload.id);
      }
    },
    deleteItem(state, action) {
      return state.filter((product) => product.id !== action.payload.id);
    },
  },
});

export const { addItem, removeItem, deleteItem } = cartSlice.actions;
export default cartSlice.reducer;

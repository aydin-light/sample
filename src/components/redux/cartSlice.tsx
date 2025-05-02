import { createSlice } from "@reduxjs/toolkit";

interface CartItem {
  name: string;
  price: number;
  quantity: number;
  inventory: number;
}

const initialState: CartItem[] = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.find((item) => item.name === action.payload.name);
      if (existingItem) {
        existingItem.quantity = Math.min(existingItem.quantity + 1, existingItem.inventory);
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    updateQuantity: (state, action) => {
      const item = state.find((item) => item.name === action.payload.name);
      if (item) {
        item.quantity = Math.max(1, Math.min(action.payload.quantity, item.inventory));
      }
    },
    removeFromCart: (state, action) => {
      return state.filter((item) => item.name !== action.payload.name);
    },
  },
});

export const { addToCart, updateQuantity, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;

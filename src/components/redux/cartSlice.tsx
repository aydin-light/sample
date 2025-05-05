
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
  name: string;
  price: number;
  quantity: number;
  inventory: number;
  image?: string;
}

type CartState = CartItem[];

const initialState: CartState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const existing = state.find((item) => item.name === action.payload.name);
      if (existing) {
        existing.quantity += action.payload.quantity;
      } else {
        state.push(action.payload);
      }
    },
    updateQuantity: (state, action: PayloadAction<{ name: string; quantity: number }>) => {
      const item = state.find((i) => i.name === action.payload.name);
      if (item) {
        item.quantity = Math.max(1, action.payload.quantity);
      }
    },
    removeFromCart: (state, action: PayloadAction<{ name: string }>) => {
      return state.filter((item) => item.name !== action.payload.name);
    },
  },
});

export const { addToCart, updateQuantity, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;

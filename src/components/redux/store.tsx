
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const loadFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem("cart");
    return serializedState ? JSON.parse(serializedState) : [];
  } catch {
    return [];
  }
};

const saveToLocalStorage = (state: any) => {
  try {
    const serializedState = JSON.stringify(state.cart);
    localStorage.setItem("cart", serializedState);
  } catch (e) {
    console.error("Error saving to localStorage", e);
  }
};

const preloadedState = {
  cart: loadFromLocalStorage(),
};

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  preloadedState,
});

store.subscribe(() => saveToLocalStorage(store.getState()));

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;

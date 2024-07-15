import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      const { id } = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      saveToLocal(state.items);
    },
    removeItem(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
      saveToLocal(state.items);
    },
    updateQuantity(state, action) {
      const { id, quantity } = action.payload;
      const itemToUpdate = state.items.find((item) => item.id === id);
      if (itemToUpdate) {
        itemToUpdate.quantity = quantity;
        saveToLocal(state.items);
      }
    },
    updateCart(state, action) {
      const storedItems = JSON.parse(localStorage.getItem('cart'));
      if (storedItems) {
        state.items = storedItems;
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity, updateCart } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;

function saveToLocal(items) {
  localStorage.setItem("cart", JSON.stringify(items));
}

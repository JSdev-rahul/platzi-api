import { createSlice, current } from "@reduxjs/toolkit";
let cart = [];
export const CartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.cart?.find(
        (item) => item.id === action.payload.id
      );
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.cart?.push({ ...action.payload, quantity: 1 });
      }
    },
    incrementQuantity: (state, action) => {
     
      const item = state.cart?.find((item) => item.id === action.payload);
      item.quantity++;
    },
    decrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      if (item.quantity === 1) {
        item.quantity = 1;
      } else {
        item.quantity--;
      }
    },
    removeItem: (state, action) => {
      const removeItem = state.cart.filter(
        (item) => item.id !== action.payload
      );
      state.cart = removeItem;
    },
  },
});

export const cartState = (state) => state.cartState;
export const { addToCart, incrementQuantity, decrementQuantity ,removeItem} = CartSlice.actions;
export default CartSlice.reducer;

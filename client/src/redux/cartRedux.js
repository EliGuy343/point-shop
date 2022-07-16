import {createSlice} from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name:'cart',
  initialState:{
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct:(state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
      state.total = state.total + action.payload.price*action.payload.quantity;
    },
    clearCart:(state) => {
      state.products = [];
      state.quantity = 0;
      state.total = 0;
    },
    loadCart:(state, action) => {
      state.products = action.payload.products;
      state.quantity = action.payload.quantity;
      state.total = action.payload.toal;
      
    }

  }
})

export const { addProduct, clearCart, loadCart } = cartSlice.actions;
export default cartSlice.reducer;
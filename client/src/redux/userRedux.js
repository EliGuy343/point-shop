import {createSlice} from '@reduxjs/toolkit';

const userSlice = createSlice({
  name:'cart',
  initialState:{
    currentUser: null,
    isFetching: false,
    error: false,
  },
  reducers: {
    loginStart:(state) =>{
      state.isFetching = true;
    },
    loginSuccess:(state, action)=>{
      state.isFetching = false;
      state.currentUser = action.payload;
    },
    loginFailure:(state)=>{
      state.currentUser = null;
      state.isFetching = false;
      state.error = true;
    },
    logout:(state) => {
      state.currentUser = null;
      state.isFetching = false;
      state.error = false;
    }
  }
})

export const { 
  loginStart, 
  loginFailure, 
  loginSuccess,
  logout
} = userSlice.actions;
export default userSlice.reducer;
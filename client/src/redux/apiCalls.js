import { loginFailure, loginStart, loginSuccess } from "./userRedux";
import axios from 'axios';
export const login = async (dispatch, user) => {
  dispatch(loginStart)
  try {
    const res = await axios.post('/api/auth/login', user);
    dispatch(loginSuccess(res.data));
  } 
  catch (err) {
    console.log(err);
    dispatch(loginFailure());
  }
}

export const register = async (dispatch, user) => {
  dispatch(loginStart);
  try {
    const res = await axios.post('/api/auth/register', user);
    dispatch(loginSuccess(res.data));
  } 
  catch (err) {
    console.log(err);
    dispatch(loginFailure());
  }
}
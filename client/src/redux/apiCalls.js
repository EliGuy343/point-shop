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

// export const saveCart = async (token, cart) => {
//   const config = {
//     headers: {
//       token:'bearer '+token
//     }
//   };
//   try {
//     const res = await axios.post('/api/cart', cart, config);
//     toast.success('Cart Saved', {
//       position: "bottom-center",
//       autoClose: 5000,
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//       progress: undefined,
//       });
//   }
//   catch(err) {
//     console.log(err);
//     toast.error('Something went wrong', {
//       position: "bottom-center",
//       autoClose: 5000,
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//       progress: undefined,
//       });
//   }
// }

// export const getCart = async (dispatch, token) => {
//   const config = {
//     headers: {
//       'token':'bearer '+ token
//     }
//   };
//   try {
//     const res = await axios.get('/api/cart', config);
//     if(res.data){
//       dispatch(loadCart(res.data));
//     }
//     else {
//       toast.error('Sorry, it seems you don\'t have a cart saved', {
//         position: "bottom-center",
//         autoClose: 5000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         });
//     }
//   }
//   catch(err) {
//     console.log(err);
//   }
// }
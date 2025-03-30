import { configureStore } from '@reduxjs/toolkit'
//import counterReducer from '../redux/reducers/counterSlice'
import cartReducer from '../redux/reducers/cartSlice'


export const store = configureStore({
  reducer: {
   // counter: counterReducer,
    cart: cartReducer,
},
});

export default store;
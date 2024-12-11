import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Userslice"; 

const Appstore = configureStore({
  reducer: {
    user: userReducer, 
  },
});

export default Appstore;

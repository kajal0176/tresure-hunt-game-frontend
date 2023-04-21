import {configureStore} from "@reduxjs/toolkit";
import { getDefaultMiddleware } from '@reduxjs/toolkit';
import authSlice from "./reducer/auth.slice";



const store = configureStore({
    reducer : {
       auth:authSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
      }),
})

export default store;
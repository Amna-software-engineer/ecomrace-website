import { configureStore } from "@reduxjs/toolkit"
import { baseApi } from "../feature/Api"
import productSlice from "../feature/productSlice"

export const store = configureStore({
    reducer:{
        app:productSlice,
      [baseApi.reducerPath]:baseApi.reducer,

    },
    middleware:(getDefaultMiddleware)=>[
        ...getDefaultMiddleware(),baseApi.middleware,
        
    ],
      devTools: process.env.NODE_ENV !== 'production',

    
})
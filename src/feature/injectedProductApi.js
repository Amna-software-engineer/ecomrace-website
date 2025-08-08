import { baseApi } from "./Api";

export const injectedProductApi= baseApi.injectEndpoints({
    endpoints:(builder)=>({
        getProducts:builder.query({
            query:()=>'/Products',
            providesTags:["ProductTag"]
        })
    })
})

export const {useGetProductsQuery}=baseApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi=createApi({
    tagTypes:["ProductTag"],
    baseQuery:fetchBaseQuery({
        baseUrl:"https://67f4b8f9cbef97f40d2f1996.mockapi.io/"
    }),
    endpoints:()=>({})
})
import {configureStore} from "@reduxjs/toolkit";
import {apiSlice} from "../api/apiSlice";
import getFilters from "../../src/pages/MainPage/components/Filters";


const store = configureStore({
    reducer: {getFilters, [apiSlice.reducerPath]: apiSlice.reducer},
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: process.env.NODE_ENV !== 'production'
})

export default store;
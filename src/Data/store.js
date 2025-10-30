import { configureStore } from "@reduxjs/toolkit";
import {dataSliceReducer, popularCelebritiesReducer} from "./slice";

const store = configureStore({
    reducer: {
        data: dataSliceReducer,
        popularCelebrities: popularCelebritiesReducer
    }
});

export default store;

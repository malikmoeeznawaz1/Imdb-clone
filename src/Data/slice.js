import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// we are calling an api to get data "https://api.tvmaze.com/shows"

export const fetchData = createAsyncThunk('imdb/fetchData', async () =>{
    const response = await fetch("https://api.tvmaze.com/shows");
    const data = await response.json();
    return data;
})

export const dataSlice = createSlice({
    name: "data",
    initialState: {
        data: [],
        loading: undefined,
        error: null
    },
    reducers: {},

    extraReducers: (builder) => {
        builder.addCase(fetchData.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(fetchData.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
        });
        builder.addCase(fetchData.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });
    }
});

export default dataSlice.reducer;

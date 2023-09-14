import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    topRates: [],
    status: 'idle',
    error: null,
};

export const fetchTopRates = createAsyncThunk(
    'topRates/fetchTopRates',
    async () => {
        const responseTopRates = await axios.get(
            `${
                import.meta.env.VITE_REACT_APP_BASEURL
            }/movie/top_rated?page=1&api_key=${
                import.meta.env.VITE_REACT_APP_API_KEY
            }`
        );

        return responseTopRates.data.results;
    }
);

const topRatesMoviesSlice = createSlice({
    name: 'topRate',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchTopRates.pending, (state) => {
                state.status = 'loading';
            })

            .addCase(fetchTopRates.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.topRates = action.payload;
            })

            .addCase(fetchTopRates.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export const selectAllTopRatesData = (state) => state.topRates;
export default topRatesMoviesSlice.reducer;

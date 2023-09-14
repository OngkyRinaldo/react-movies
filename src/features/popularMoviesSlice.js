import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    populars: [],
    status: 'idle',
    error: null,
};

export const fetchPopulars = createAsyncThunk(
    'populars/fetchPopulars',
    async () => {
        const responsePopularMovies = await axios.get(
            `${
                import.meta.env.VITE_REACT_APP_BASEURL
            }/movie/popular?page=1&api_key=${
                import.meta.env.VITE_REACT_APP_API_KEY
            }`
        );

        return responsePopularMovies.data.results;
    }
);

const popularsSlice = createSlice({
    name: 'popular',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPopulars.pending, (state) => {
                state.status = 'loading';
            })

            .addCase(fetchPopulars.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.populars = action.payload;
            })

            .addCase(fetchPopulars.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export const selectPopularMovieData = (state) => state.popular;
export default popularsSlice.reducer;

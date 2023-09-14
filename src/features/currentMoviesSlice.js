import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    currentMovies: [],
    status: 'idle',
    error: null,
};

export const fetchCurrentMovies = createAsyncThunk(
    'currentMovies/fetchCurrentMovies',
    async () => {
        const responseCurrentMovies = await axios.get(
            `${
                import.meta.env.VITE_REACT_APP_BASEURL
            }/movie/now_playing?page=1&api_key=${
                import.meta.env.VITE_REACT_APP_API_KEY
            }`
        );

        return responseCurrentMovies.data.results;
    }
);

const currentMoviesSliece = createSlice({
    name: 'currentMovie',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCurrentMovies.pending, (state) => {
                state.status = 'loading';
            })

            .addCase(fetchCurrentMovies.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.currentMovies = action.payload;
            })

            .addCase(fetchCurrentMovies.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export const selectAllCurrentMoviesData = (state) => state.currentMovie;
export default currentMoviesSliece.reducer;

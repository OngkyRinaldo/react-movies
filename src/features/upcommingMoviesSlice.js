import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    upcommings: [],
    status: 'idle',
    error: null,
};

export const fetchUpcommings = createAsyncThunk(
    'upcommings/fetchUpcommings',
    async () => {
        const responseMostViews = await axios.get(
            `${
                import.meta.env.VITE_REACT_APP_BASEURL
            }/movie/upcoming?page=1&api_key=${
                import.meta.env.VITE_REACT_APP_API_KEY
            }`
        );

        return responseMostViews.data.results;
    }
);

const upcommingsSlice = createSlice({
    name: 'upcomming',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUpcommings.pending, (state) => {
                state.status = 'loading';
            })

            .addCase(fetchUpcommings.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.upcommings = action.payload;
            })

            .addCase(fetchUpcommings.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export const selectUcommingMovieData = (state) => state.upcomming;
export default upcommingsSlice.reducer;

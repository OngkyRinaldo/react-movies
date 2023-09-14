import { configureStore } from '@reduxjs/toolkit';
import currentMoviesReducer from '../features/currentMoviesSlice';
import popularsReducer from '../features/popularMoviesSlice';
import upcommingMoviesReducer from '../features/upcommingMoviesSlice';
import topRateMoviesReducer from '../features/topRateMoviesSlice';

export const store = configureStore({
    reducer: {
        currentMovie: currentMoviesReducer,
        popular: popularsReducer,
        upcomming: upcommingMoviesReducer,
        topRates: topRateMoviesReducer,
    },
});

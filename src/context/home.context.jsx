import { createContext, useEffect, useState } from 'react';
import {
    getMostViewed,
    // getNowplaying,
    getUpcoming,
    rated,
    searchMovie,
} from '../api';
import axios from 'axios';

export const UseContext = createContext({
    nowPlaying: [],
    mostViewed: [],
    SearchMostViewed: '',
    upcommings: [],
    SearchUpcommings: '',
    topRated: [],
    SearchTopRated: '',
});

// eslint-disable-next-line react/prop-types
export const HomeProvider = ({ children }) => {
    // start nowPlaying context
    const [nowPlaying, setNowPlaying] = useState([]);

    const getNowplaying = async () => {
        const responseNowPlaying = await axios.get(
            `${
                import.meta.env.VITE_REACT_APP_BASEURL
            }/movie/now_playing?page=1&api_key=${
                import.meta.env.VITE_REACT_APP_API_KEY
            }`
        );

        setNowPlaying(responseNowPlaying.data.results);
    };

    useEffect(() => {
        getNowplaying();
    }, []);

    // end nowPlaying context

    // start mostViewed context
    const [mostViewed, setMostViewed] = useState([]);

    useEffect(() => {
        getMostViewed().then((result) => {
            setMostViewed(result);
        });
    }, []);

    const SearchMostViewed = async (q) => {
        if (q.length > 3) {
            const query = await searchMovie(q);
            setMostViewed(query.results);
        }
    };
    // end mostViewed context

    // start upcommings context

    const [upcommings, setUpcommings] = useState([]);

    useEffect(() => {
        getUpcoming().then((result) => {
            setUpcommings(result);
        });
    }, []);

    const SearchUpcommings = async (q) => {
        if (q.length > 3) {
            const query = await searchMovie(q);
            setUpcommings(query.results);
        }
    };

    // end upcommings context

    // start topRated context
    const [topRated, setTopRated] = useState([]);

    useEffect(() => {
        rated().then((result) => {
            setTopRated(result);
        });
    }, []);

    const SearchTopRated = async (q) => {
        if (q.length > 3) {
            const query = await searchMovie(q);
            setTopRated(query.results);
        }
    };

    // end topRated context

    const value = {
        nowPlaying,
        mostViewed,
        upcommings,
        topRated,
        SearchMostViewed,
        SearchTopRated,
        SearchUpcommings,
    };

    return <UseContext.Provider value={value}>{children} </UseContext.Provider>;
};

import axios from 'axios';

export const getMovieList = async () => {
    const movie = await axios.get(
        `${
            import.meta.env.VITE_REACT_APP_BASEURL
        }/movie/popular?page=1&api_key=${
            import.meta.env.VITE_REACT_APP_API_KEY
        }`
    );

    return movie.data.results;
};

export const rated = async () => {
    const rate = await axios.get(
        `${
            import.meta.env.VITE_REACT_APP_BASEURL
        }/movie/top_rated?page=1&api_key=${
            import.meta.env.VITE_REACT_APP_API_KEY
        }`
    );

    return rate.data.results;
};

export const searchMovie = async (q) => {
    const search = await axios.get(
        `${
            import.meta.env.VITE_REACT_APP_BASEURL
        }/search/movie?query=${q}&page=1&api_key=${
            import.meta.env.VITE_REACT_APP_API_KEY
        }`
    );
    return search.data;
};

import { useEffect, useState } from 'react';

import { getMovieList, searchMovie, rated } from './api';
import MovieList from './components/MovieList';
import SearchBox from './components/SearchBox';
import Banner from './components/Banner';
import TopRate from './components/TopRate';

const App = () => {
    const [popularMovies, setPopularMovies] = useState([]);
    useEffect(() => {
        getMovieList().then((result) => {
            setPopularMovies(result);
        });
    }, []);

    const [topRated, setTopRated] = useState([]);
    useEffect(() => {
        rated().then((result) => {
            setTopRated(result);
        });
    }, []);

    const search = async (q) => {
        if (q.length > 3) {
            const query = await searchMovie(q);
            setPopularMovies(query.results);
        }
    };
    return (
        <div className='w-full h-fit bg-black '>
            <Banner popularMovies={popularMovies} />

            <TopRate topRated={topRated} />

            {/* <SearchBox search={search} /> */}

            <MovieList popularMovies={popularMovies} />
        </div>
    );
};

export default App;

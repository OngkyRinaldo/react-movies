import { useEffect, useState } from 'react';

import { getMostViewed, searchMovie, rated, getUpcoming } from '../api';
import Banner from '../components/Banner.component';

import TopRate from '../components/TopRate.Component';
import MostViewed from '../components/MostViewed.Component';
import Upcomming from '../components/Upcomming.component';

const Home = () => {
    const [mostViewed, setMostViewed] = useState([]);
    useEffect(() => {
        getMostViewed().then((result) => {
            setMostViewed(result);
        });
    }, []);

    const [topRated, setTopRated] = useState([]);
    useEffect(() => {
        rated().then((result) => {
            setTopRated(result);
        });
    }, []);

    const [upcommings, setUpcommings] = useState([]);

    useEffect(() => {
        getUpcoming().then((result) => {
            setUpcommings(result);
        });
    }, []);

    const search = async (q) => {
        if (q.length > 3) {
            const query = await searchMovie(q);
            setMostViewed(query.results);
        }
    };
    return (
        <div className='w-full h-fit bg-black '>
            <Banner mostViewed={mostViewed} />

            <TopRate topRated={topRated} />

            {/* <SearchBox search={search} /> */}

            <MostViewed mostViewed={mostViewed} />

            <Upcomming upcommings={upcommings} />
        </div>
    );
};

export default Home;

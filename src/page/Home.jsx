import { useEffect, useState } from 'react';

import { getNowplaying, getMostViewed, rated, getUpcoming } from '../api';
import Banner from '../components/Banner.component';

import TopRate from '../components/TopRate.Component';
import MostViewed from '../components/MostViewed.Component';
import Upcomming from '../components/Upcomming.component';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/Footer';

const Home = () => {
    const [nowPlaying, setNowPlaying] = useState([]);
    useEffect(() => {
        getNowplaying().then((result) => {
            setNowPlaying(result);
        });
    }, []);

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

    return (
        <main className='w-full h-fit bg-black container mx-auto '>
            <Navbar />
            <Banner nowPlaying={nowPlaying} />
            <Upcomming upcommings={upcommings} mostViewed={mostViewed} />
            <MostViewed mostViewed={mostViewed} />
            <TopRate topRated={topRated} />

            <Footer />
        </main>
    );
};

export default Home;

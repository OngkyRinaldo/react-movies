import Banner from '../components/Banner.component';
import TopRate from '../components/TopRate.Component';
import Upcomming from '../components/Upcomming.component';
import PopularMovie from '../components/PopularMovie.Component';
import Navbar from '../components/navbar/Navbar';
import { useEffect } from 'react';

const Home = () => {
    useEffect(() => {
        document.title = 'Movie  ';
    }, []);
    return (
        <main className='w-full h-fit bg-black container mx-auto '>
            <Navbar />
            <Banner />
            <Upcomming />
            <PopularMovie />
            <TopRate />
        </main>
    );
};

export default Home;

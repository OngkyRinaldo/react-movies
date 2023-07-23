import Banner from '../components/Banner.component';

import TopRate from '../components/TopRate.Component';
import MostViewed from '../components/MostViewed.Component';
import Upcomming from '../components/Upcomming.component';
import Navbar from '../components/navbar/Navbar';

const Home = () => {
    return (
        <main className='w-full h-fit bg-black container mx-auto '>
            <Navbar />
            <Banner />
            <Upcomming />
            <MostViewed />
            <TopRate />
        </main>
    );
};

export default Home;

import { Route, Routes } from 'react-router-dom';
import Home from './page/Home';
import TopRate from './page/TopRate';
import MostViewed from './page/MostViewed';
import Upcomming from './page/Upcomming';
import Footer from './components/Footer';

const App = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='upcomming' element={<Upcomming />} />
                <Route path='mostViewed' element={<MostViewed />} />
                <Route path='topRate' element={<TopRate />} />
            </Routes>
            <Footer />
        </>
    );
};

export default App;

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link } from 'react-router-dom';

const TopRate = ({ topRated }) => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };
    return (
        <div className='text-white container mx-auto my-10 px-5 '>
            <div className='flex items-center justify-between mb-5'>
                <h2>Top Rated</h2>
                <Link to='#' className='text-orange-500 hover:text-white'>
                    View All
                </Link>
            </div>
            <Carousel responsive={responsive} className=' '>
                {topRated.slice(0, 10).map((rate, i) => {
                    return (
                        <div key={i} className='text-center'>
                            <img
                                src={`${
                                    import.meta.env.VITE_REACT_APP_BASEIMGURL
                                }/${rate.backdrop_path}`}
                                alt={rate.title}
                            />
                            <p className='text-lg  mt-3 text-slate-400 hover:text-slate-200'>
                                {rate.title}
                            </p>
                            <p className='text-green-400 text-lg'>
                                {rate.vote_average}
                            </p>
                        </div>
                    );
                })}
            </Carousel>
        </div>
    );
};

export default TopRate;

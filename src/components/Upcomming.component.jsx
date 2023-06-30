import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link } from 'react-router-dom';

const Upcomming = ({ upcommings }) => {
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
        <div className='md:border-y md:border-white  text-white container mx-auto my-10 p-5 '>
            <div className='flex items-center justify-between mb-5'>
                <h2>Upcomming</h2>
                <Link
                    to='upcomming'
                    className='text-orange-500 hover:text-white'
                >
                    View All
                </Link>
            </div>
            <Carousel responsive={responsive} className=' '>
                {upcommings.slice(0, 10).map((upcomming, i) => {
                    return (
                        <div key={i} className='text-center'>
                            <img
                                src={`${
                                    import.meta.env.VITE_REACT_APP_BASEIMGURL
                                }/${upcomming.backdrop_path}`}
                                alt={upcomming.title}
                            />
                            <p className='text-lg  mt-3 text-slate-400 hover:text-slate-200'>
                                {upcomming.title}
                            </p>
                            <p className='text-lg  mt-3 text-red-500 hover:text-slate-200'>
                                {upcomming.release_date}
                            </p>
                        </div>
                    );
                })}
            </Carousel>
        </div>
    );
};

export default Upcomming;

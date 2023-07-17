/* eslint-disable react/prop-types */
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
        <section className='  text-white container mx-auto my-10 p-5 '>
            <div className='flex items-center justify-between mb-5'>
                <h2 className='text-2xl font-bold'>Top Rate Movies</h2>
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
                        </div>
                    );
                })}
            </Carousel>
            <div className='w-fit mx-auto'>
                <Link
                    to='/topRate'
                    className='border border-green text-white py-2 px-5 block mx-auto mt-10 rounded-md hover:bg-green hover:text-black hover:border-white'
                >
                    View More
                </Link>
            </div>
        </section>
    );
};

export default TopRate;

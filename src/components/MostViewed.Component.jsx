/* eslint-disable react/prop-types */
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link } from 'react-router-dom';

const MostViewed = ({ mostViewed }) => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 2,
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
            <div className='flex items-center justify-between mb-5 '>
                <h2 className='text-2xl font-bold'>Popular Movies</h2>
            </div>
            <div className='flex justify-center items-center flex-wrap gap-5'>
                <div className='w-1/5 hidden lg:inline'>
                    <div className=' self-center w-full '>
                        <div className=' text-2xl text-center flex justify-center items-center gap-2 '>
                            <p className='border-t-2 border-green '>Popular</p>
                            <p>Movies</p>
                        </div>
                        <div className=' text-2xl w-full text-center flex justify-center items-center gap-2 '>
                            <p>to</p>
                            <p>Watch</p>
                            <p>Now</p>
                        </div>
                        <div className=' text-md text-slate-500 w-full text-center flex justify-center items-center gap-2 mt-3 '>
                            <p>Most</p>
                            <p>Watched</p>
                            <p className='border-b-2 border-green'>Movies</p>
                        </div>
                        <div className=' text-2xl text-green text-center cursor-pointer mt-3 hover:underline '>
                            <Link to='/mostViewed'>view all</Link>
                        </div>
                    </div>
                </div>
                <Carousel responsive={responsive} className=' flex-1 '>
                    {mostViewed.slice(0, 6).map((rate, i) => {
                        return (
                            <div key={i} className='text-center'>
                                <img
                                    src={`${
                                        import.meta.env
                                            .VITE_REACT_APP_BASEIMGURL
                                    }/${rate.backdrop_path}`}
                                    alt={rate.title}
                                    className='mx-auto block'
                                />
                            </div>
                        );
                    })}
                </Carousel>
            </div>
            <div className='grid grid-cols-4 gap-3 mt-5 lg:hidden'>
                {mostViewed.slice(6, 10).map((rate, i) => {
                    return (
                        <div key={i} className='text-center'>
                            <img
                                src={`${
                                    import.meta.env.VITE_REACT_APP_BASEIMGURL
                                }/${rate.backdrop_path}`}
                                alt={rate.title}
                                className='mx-auto block'
                            />
                        </div>
                    );
                })}
            </div>
            <div className='grid grid-cols-6 gap-5 lg:mt-5 '>
                {mostViewed.slice(6, 12).map((rate, i) => {
                    return (
                        <div key={i} className='text-center hidden lg:inline '>
                            <img
                                src={`${
                                    import.meta.env.VITE_REACT_APP_BASEIMGURL
                                }/${rate.backdrop_path}`}
                                alt={rate.title}
                                className='mx-auto block'
                            />
                        </div>
                    );
                })}
            </div>
            <div className='w-fit mx-auto'>
                <Link
                    to='/mostViewed'
                    className='border border-green text-white py-2 px-5 block mx-auto mt-10 rounded-md hover:bg-green hover:text-black hover:border-white'
                >
                    View More
                </Link>
            </div>
        </section>
    );
};

export default MostViewed;

/* eslint-disable react/prop-types */

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import {
    fetchCurrentMovies,
    selectAllCurrentMoviesData,
} from '../features/currentMoviesSlice';
import { useEffect } from 'react';

const Banner = () => {
    const dispatch = useDispatch();
    const { currentMovies, status, error } = useSelector(
        selectAllCurrentMoviesData
    );
    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchCurrentMovies());
        }
    }, [status, dispatch]);
    return (
        <section className='text-center border-b border-white rounded-lg  mb-5 mt-5  '>
            {status === 'loading' ? (
                <div>Loading...</div>
            ) : status === 'failed' ? (
                <div>Error: {error}</div>
            ) : (
                <Carousel>
                    {currentMovies.slice(0, 3).map((banner, i) => {
                        return (
                            <div
                                className='flex flex-wrap justify-between items-center w-full'
                                key={i}
                            >
                                <div className='w-1/2 hidden lg:inline '>
                                    <p className='text-green'>Movie</p>
                                    <h2 className='text-white text-4xl '>
                                        {banner.title}
                                    </h2>
                                    <p className='mt-3 text-sm text-slate-400 px-7 '>
                                        {banner.overview}
                                    </p>
                                    <div className='flex flex-wrap justify-center items-center mt-5 gap-5 '>
                                        <button className='px-8 py-2 bg-green border text-black text-2xl font-bold rounded-md cursor-pointer hover:bg-black hover:text-white hover:border-green'>
                                            Watch Now
                                        </button>
                                        <Link
                                            className='px-8 py-2 bg-black text-white border border-green text-xl font-bold rounded-md cursor-pointer hover:bg-green hover:text-black hover:border-white'
                                            to='/MostViewed'
                                        >
                                            My List
                                        </Link>
                                    </div>
                                </div>
                                <div className='w-fit  h-fit mx-auto  '>
                                    <img
                                        src={`${
                                            import.meta.env
                                                .VITE_REACT_APP_BASEIMGURL
                                        }/${banner.poster_path}`}
                                        alt={banner.title}
                                        className='text-center '
                                    />
                                </div>
                            </div>
                        );
                    })}
                </Carousel>
            )}
        </section>
    );
};

export default Banner;

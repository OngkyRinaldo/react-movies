/* eslint-disable react/prop-types */

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Banner = ({ nowPlaying }) => {
    return (
        <section className='text-center border-b border-white rounded-lg  mb-5 mt-5  '>
            <Carousel>
                {nowPlaying.slice(0, 3).map((banner, i) => {
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
                                    <button className='px-8 py-2 bg-green text-black text-2xl font-bold rounded-md cursor-pointer'>
                                        Watch Now
                                    </button>
                                    <button className='px-8 py-2 bg-black text-white border border-green text-xl font-bold rounded-md cursor-pointer'>
                                        My List
                                    </button>
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
        </section>
    );
};

export default Banner;

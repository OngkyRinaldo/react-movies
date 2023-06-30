import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Banner = ({ mostViewed }) => {
    return (
        <Carousel className='text-center border-y border-white rounded-lg shadow-lg shadow-white mb-5'>
            {mostViewed.slice(0, 10).map((banner, i) => {
                return (
                    <div key={i} className='w-fit h-fit mx-auto'>
                        <img
                            src={`${
                                import.meta.env.VITE_REACT_APP_BASEIMGURL
                            }/${banner.poster_path}`}
                            alt={banner.title}
                            className='text-center'
                        />
                    </div>
                );
            })}
        </Carousel>
    );
};

export default Banner;

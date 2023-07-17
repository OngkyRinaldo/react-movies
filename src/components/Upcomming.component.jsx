/* eslint-disable react/prop-types */

import 'react-multi-carousel/lib/styles.css';
import { Link } from 'react-router-dom';

const Upcomming = ({ upcommings, mostViewed }) => {
    return (
        <>
            <section className=' text-white container mx-auto my-10 p-5 '>
                <div className='flex items-center justify-between mb-5'>
                    <h2 className='text-2xl font-bold'>Upcomming Movies</h2>
                </div>
                <div className='grid grid-cols-4 gap-2'>
                    {upcommings.slice(0, 4).map((upcomming, i) => {
                        return (
                            <div key={i} className='text-center'>
                                <img
                                    src={`${
                                        import.meta.env
                                            .VITE_REACT_APP_BASEIMGURL
                                    }/${upcomming.backdrop_path}`}
                                    alt={upcomming.title}
                                />
                            </div>
                        );
                    })}
                </div>
                <div className='grid grid-cols-4 md:grid-cols-5 gap-2 mt-5 '>
                    <div className='w-full h-full hidden lg:block self-center'>
                        <div className=' text-lg w-full text-center flex justify-center items-center gap-2 '>
                            <p className='border-t-2 border-green '>Popular</p>
                            <p>Movies</p>
                        </div>
                        <div className=' text-lg w-full text-center flex justify-center items-center gap-2  '>
                            <p>to</p>
                            <p>Watch</p>
                            <p>Now</p>
                        </div>
                        <div className=' text-sm text-slate-500 w-full text-center flex justify-center items-center gap-2 mt-3 '>
                            <p>Most</p>
                            <p>Watched</p>
                            <p className='border-b-2 border-green'>Movies</p>
                        </div>
                        <div className=' text-lg text-green text-center cursor-pointer mt-3 hover:underline '>
                            <Link to='/mostViewed'>view all</Link>
                        </div>
                    </div>
                    {mostViewed.slice(0, 4).map((view, i) => {
                        return (
                            <div
                                key={i}
                                className='text-center hidden lg:block'
                            >
                                <img
                                    src={`${
                                        import.meta.env
                                            .VITE_REACT_APP_BASEIMGURL
                                    }/${view.backdrop_path}`}
                                    alt={view.title}
                                />
                            </div>
                        );
                    })}
                </div>
                <div className='grid grid-cols-4 lg:grid-cols-6 gap-2 mt-5 '>
                    {upcommings.slice(4, 10).map((upcomming, i) => {
                        return (
                            <div
                                key={i}
                                className='text-center hidden lg:block'
                            >
                                <img
                                    src={`${
                                        import.meta.env
                                            .VITE_REACT_APP_BASEIMGURL
                                    }/${upcomming.backdrop_path}`}
                                    alt={upcomming.title}
                                />
                            </div>
                        );
                    })}
                </div>
                <div className='grid grid-cols-4 lg:grid-cols-6 gap-2 mt-5 '>
                    {upcommings.slice(4, 8).map((upcomming, i) => {
                        return (
                            <div key={i} className='text-center  lg:hidden'>
                                <img
                                    src={`${
                                        import.meta.env
                                            .VITE_REACT_APP_BASEIMGURL
                                    }/${upcomming.backdrop_path}`}
                                    alt={upcomming.title}
                                />
                            </div>
                        );
                    })}
                </div>
                <div className='w-fit mx-auto'>
                    <Link
                        to='/upcomming'
                        className='border border-green text-white py-2 px-5 block mx-auto mt-10 rounded-md hover:bg-green hover:text-black hover:border-white'
                    >
                        View More
                    </Link>
                </div>
            </section>
        </>
    );
};

export default Upcomming;

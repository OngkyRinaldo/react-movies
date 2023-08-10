import Navbar from '../components/navbar/NavbarTopRate';
import { useContext, useEffect } from 'react';
import { UseContext } from '../context/home.context';

const TopRate = () => {
    const { topRated, SearchTopRated } = useContext(UseContext);
    useEffect(() => {
        document.title = 'Movie - Top Rate Movie ';
    }, []);

    return (
        <div className='w-full h-fit bg-black '>
            <Navbar search={SearchTopRated} />
            <div className='w-full grid grid-cols-1 md:grid-cols-2 md:gap-2 px-5 pb-5 mt-10 border-b border-white'>
                {topRated.map((rate, i) => {
                    return (
                        <div
                            className='border border-white shadow-lg shadow-slate-200 text-slate-400 mb-5 rounded-lg'
                            key={i}
                        >
                            <img
                                className='block mx-auto object-cover '
                                src={`${
                                    import.meta.env.VITE_REACT_APP_BASEIMGURL
                                }/${rate.poster_path}`}
                                alt={rate.title}
                            />
                            <div className='p-5 text-center text-white text-lg '>
                                <h1 className='font-semibold cursor-pointer '>
                                    {rate.title}
                                </h1>
                                <p className='text-lg inline text-green cursor-pointer '>
                                    {rate.vote_average}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default TopRate;

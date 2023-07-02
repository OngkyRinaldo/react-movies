import { useEffect, useState } from 'react';

import { rated, searchMovie } from '../api';
import Navbar from '../components/navbar/NavbarTopRate';

const TopRate = () => {
    const [topRated, setTopRated] = useState([]);
    useEffect(() => {
        rated().then((result) => {
            setTopRated(result);
        });
    }, []);

    const search = async (q) => {
        if (q.length > 3) {
            const query = await searchMovie(q);
            setTopRated(query.results);
        }
    };

    return (
        <div className='w-full h-fit bg-black '>
            <Navbar search={search} />
            <div className='w-full grid grid-cols-1 md:grid-cols-2 md:gap-2 px-5 pb-5 mt-10'>
                {topRated.map((rate, i) => {
                    return (
                        <div
                            className='border border-white shadow-lg shadow-slate-200 text-slate-400 mb-5 rounded-lg'
                            key={i}
                        >
                            <h1 className='font-semibold text-center p-5'>
                                {rate.title}
                            </h1>
                            <img
                                className='block mx-auto object-cover '
                                src={`${
                                    import.meta.env.VITE_REACT_APP_BASEIMGURL
                                }/${rate.poster_path}`}
                                alt={rate.title}
                            />
                            <div className='p-5 text-center'>
                                <p className='text-green-400 text-lg'>
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

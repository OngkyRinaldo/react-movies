import { useEffect, useState } from 'react';

import { rated } from '../api';

const TopRate = () => {
    const [topRated, setTopRated] = useState([]);
    useEffect(() => {
        rated().then((result) => {
            setTopRated(result);
        });
    }, []);
    return (
        <div className='w-full h-fit bg-black '>
            <div className='w-full flex flex-wrap items-center justify-center gap-2 px-5 pb-5'>
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
                                className=''
                                src={`${
                                    import.meta.env.VITE_REACT_APP_BASEIMGURL
                                }/${rate.poster_path}`}
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

import { useEffect, useState } from 'react';
import { getUpcoming, searchMovie } from '../api';
import Navbar from '../components/navbar/NavbarUpomming';

const Upcomming = () => {
    const [upcommings, setUpcommings] = useState([]);

    useEffect(() => {
        getUpcoming().then((result) => {
            setUpcommings(result);
        });
    }, []);

    const search = async (q) => {
        if (q.length > 3) {
            const query = await searchMovie(q);
            setUpcommings(query.results);
        }
    };
    return (
        <div className='w-full h-fit bg-black '>
            <Navbar search={search} />

            <div className='w-full grid grid-cols-1 md:grid-cols-2 md:gap-2 px-5 pb-5 mt-10 border-b border-white'>
                {upcommings?.map((upcomming, i) => {
                    return (
                        <div
                            className='border border-white shadow-lg shadow-slate-200 text-slate-400 mb-5 rounded-lg'
                            key={i}
                        >
                            <h1 className='font-semibold text-center p-5'>
                                {upcomming.title}
                            </h1>
                            <img
                                className='block mx-auto object-cover '
                                src={`${
                                    import.meta.env.VITE_REACT_APP_BASEIMGURL
                                }/${upcomming.poster_path}`}
                                alt={upcomming.title}
                            />
                            <div className='p-5 text-center'>
                                <p className='text-lg  mt-3 text-slate-400 hover:text-slate-200'>
                                    {upcomming.title}
                                </p>
                                <p className='text-lg  mt-3 text-red-500 hover:text-slate-200'>
                                    {upcomming.release_date}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Upcomming;

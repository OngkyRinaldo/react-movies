import { useEffect, useState } from 'react';
import Navbar from '../components/navbar/NavbarUpomming';

import { useDispatch, useSelector } from 'react-redux';
import {
    fetchUpcommings,
    selectUcommingMovieData,
} from '../features/upcommingMoviesSlice';

const Upcomming = () => {
    const dispatch = useDispatch();
    const { upcommings, status, error } = useSelector(selectUcommingMovieData);
    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchUpcommings());
            document.title = 'Movie - UpComming Movie ';
        }
    }, [status, dispatch]);

    const [searchQuery, setSearchQuery] = useState('');

    const filteredUpcomings = upcommings.filter((upcoming) =>
        upcoming.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className='w-full h-fit bg-black '>
            {/* <Navbar search={SearchUpcommings} /> */}
            <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

            <div className='w-full grid grid-cols-1 md:grid-cols-2 md:gap-2 px-5 pb-5 mt-10 border-b border-white'>
                {status === 'loading' ? (
                    <div>Loading...</div>
                ) : status === 'failed' ? (
                    <div>Error: {error}</div>
                ) : (
                    filteredUpcomings?.map((upcoming, i) => {
                        return (
                            <div
                                className='border border-white shadow-lg shadow-slate-200 text-white text-lg mb-5 rounded-lg'
                                key={i}
                            >
                                <img
                                    className='block mx-auto object-cover'
                                    src={`${
                                        import.meta.env
                                            .VITE_REACT_APP_BASEIMGURL
                                    }/${upcoming.poster_path}`}
                                    alt={upcoming.title}
                                />
                                <div className='p-5 text-center'>
                                    <h1 className='font-semibold cursor-pointer'>
                                        {upcoming.title}
                                    </h1>
                                    <p className='text-lg inline cursor-pointer'>
                                        Release Date:
                                        <span className='text-green px-2'>
                                            {upcoming.release_date}
                                        </span>
                                    </p>
                                </div>
                            </div>
                        );
                    })
                )}
            </div>
        </div>
    );
};

export default Upcomming;

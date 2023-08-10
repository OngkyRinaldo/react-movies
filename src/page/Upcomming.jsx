import { useContext, useEffect } from 'react';
import Navbar from '../components/navbar/NavbarUpomming';
import { UseContext } from '../context/home.context';

const Upcomming = () => {
    const { upcommings, SearchUpcommings } = useContext(UseContext);
    useEffect(() => {
        document.title = 'Movie - UpComming Movie ';
    }, []);

    return (
        <div className='w-full h-fit bg-black '>
            <Navbar search={SearchUpcommings} />

            <div className='w-full grid grid-cols-1 md:grid-cols-2 md:gap-2 px-5 pb-5 mt-10 border-b border-white'>
                {upcommings?.map((upcomming, i) => {
                    return (
                        <div
                            className='border border-white shadow-lg shadow-slate-200 text-white text-lg mb-5 rounded-lg'
                            key={i}
                        >
                            <img
                                className='block mx-auto object-cover '
                                src={`${
                                    import.meta.env.VITE_REACT_APP_BASEIMGURL
                                }/${upcomming.poster_path}`}
                                alt={upcomming.title}
                            />
                            <div className='p-5 text-center '>
                                <h1 className='font-semibold cursor-pointer '>
                                    {upcomming.title}
                                </h1>
                                <p className='text-lg inline cursor-pointer'>
                                    Release Date:
                                    <span className='text-green px-2'>
                                        {upcomming.release_date}
                                    </span>
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

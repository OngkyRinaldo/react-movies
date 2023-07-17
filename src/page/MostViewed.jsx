import { getMostViewed, searchMovie } from '../api';
import { useEffect, useState } from 'react';
import Navbar from '../components/navbar/NavbarMostView';

const MostViewed = () => {
    const [mostViewed, setMostViewed] = useState([]);
    useEffect(() => {
        getMostViewed().then((result) => {
            setMostViewed(result);
        });
    }, []);

    const search = async (q) => {
        if (q.length > 3) {
            const query = await searchMovie(q);
            setMostViewed(query.results);
        }
    };

    return (
        <div className='w-full h-fit bg-black '>
            <Navbar search={search} />
            <div className='w-full grid grid-cols-1 md:grid-cols-2 md:gap-2 px-5 pb-5 mt-10 border-b border-white'>
                {mostViewed.map((view, i) => {
                    return (
                        <div
                            className='border border-white shadow-lg shadow-slate-200 text-slate-400 mb-5 rounded-lg'
                            key={i}
                        >
                            <h1 className='font-semibold text-center p-5'>
                                {view.title}
                            </h1>
                            <img
                                className='block mx-auto object-cover '
                                src={`${
                                    import.meta.env.VITE_REACT_APP_BASEIMGURL
                                }/${view.poster_path}`}
                                alt={view.title}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default MostViewed;

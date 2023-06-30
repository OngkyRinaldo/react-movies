import { getMostViewed } from '../api';
import { useEffect, useState } from 'react';

const MostViewed = () => {
    const [mostViewed, setMostViewed] = useState([]);
    useEffect(() => {
        getMostViewed().then((result) => {
            setMostViewed(result);
        });
    }, []);
    return (
        <div className='w-full h-fit bg-black '>
            <div className='w-full flex flex-wrap items-center justify-center gap-2 px-5 pb-5'>
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
                                className=''
                                src={`${
                                    import.meta.env.VITE_REACT_APP_BASEIMGURL
                                }/${view.poster_path}`}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default MostViewed;

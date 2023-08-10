import { useContext, useEffect } from 'react';
import Navbar from '../components/navbar/NavbarMostView';
import { UseContext } from '../context/home.context';

const MostViewed = () => {
    const { mostViewed, SearchMostViewed } = useContext(UseContext);
    useEffect(() => {
        document.title = 'Movie - Popular Movie ';
    }, []);

    return (
        <main className='w-full h-fit bg-black  '>
            <Navbar search={SearchMostViewed} />
            <section className='container mx-auto'>
                <div className='w-full grid grid-cols-1 md:grid-cols-2 md:gap-2 px-5 pb-5 mt-10 border-b border-white '>
                    {mostViewed.map((view, i) => {
                        return (
                            <div
                                className='border border-white shadow-lg shadow-slate-200 text-slate-400 mb-5 rounded-lg'
                                key={i}
                            >
                                <img
                                    className='block mx-auto object-cover '
                                    src={`${
                                        import.meta.env
                                            .VITE_REACT_APP_BASEIMGURL
                                    }/${view.poster_path}`}
                                    alt={view.title}
                                />

                                <div className='p-5 text-center text-white text-lg '>
                                    <h1 className='font-semibold cursor-pointer '>
                                        {view.title}
                                    </h1>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>
        </main>
    );
};

export default MostViewed;

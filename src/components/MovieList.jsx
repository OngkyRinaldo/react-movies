import React from 'react';

const MovieList = ({ popularMovies }) => {
    return (
        <div className='w-full flex flex-wrap items-center justify-center gap-2 px-5 pb-5'>
            {popularMovies.map((movie, i) => {
                return (
                    <div
                        className='border border-white shadow-lg shadow-slate-200 text-slate-400 mb-5 rounded-lg'
                        key={i}
                    >
                        <h1 className='font-semibold text-center p-5'>
                            {movie.title}
                        </h1>
                        <img
                            className=''
                            src={`${
                                import.meta.env.VITE_REACT_APP_BASEIMGURL
                            }/${movie.poster_path}`}
                        />
                        <div className='p-5 text-center'>
                            <p className=' text-lg'>{movie.release_date}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default MovieList;

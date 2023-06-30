import React from 'react';

const SearchBox = ({ search }) => {
    return (
        <>
            <input
                type='text'
                placeholder='cari film kesayangan...'
                className='movie-search'
                onChange={({ target }) => search(target.value)}
            />
        </>
    );
};

export default SearchBox;

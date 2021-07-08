import React from 'react';

const SearchBox = ({searchfield, searchChange}) => {
    return (
        <div>
            <input 
                className='tc ma2 pv3 ph5 ba b--green br3 bg-lightest-blue' 
                type='search' 
                placeholder='Search for robots...'
                onChange={searchChange}
                />
        </div>
   )
}

export default SearchBox;
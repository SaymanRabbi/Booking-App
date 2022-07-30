import React from 'react';

const Properties = () => {
    return (
        <div className='md:flex  md:px-20 px-10 justify-between items-center'>
            <h2 className=' text-3xl font-medium'>Search Properties To Rent</h2>
            <select class="select max-w-xs select-bordered">
        <option disabled selected>Search With Searchbar</option>
       </select>
        </div>
    );
};

export default Properties;
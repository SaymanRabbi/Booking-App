import React from 'react';
import './SearchBar.css'

const SearchBar = () => {
    return (
        <div className='flex gap-5 px-20 justify-between items-center'>
            <div>
                <h2 className='mb-2'>Location</h2>
                <select class="select max-w-xs select-bordered">
         <option>Search</option> 
       </select>
            </div>
            <div>
                <h2 className='mb-2'>When</h2>
                <select class="select max-w-xs select-bordered">
         <option>Search</option> 
       </select>
            </div>
            <div>
                <h2 className='mb-2'>Price</h2>
                <select class="select max-w-xs select-bordered">
         <option>Search</option> 
       </select>
            </div>
            <div>
                <h2 className='mb-2'>Property Type</h2>
                <select class="select max-w-xs select-bordered">
         <option>Search</option> 
       </select>
            </div>
            <div>
            <button class="btn btn-primary btn-sm">Search</button>

            </div>
        </div>
    );
};

export default SearchBar;
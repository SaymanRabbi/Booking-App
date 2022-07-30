import React, { useState } from 'react';
import './SearchBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocation, faCalendar, faMoneyBill, faHouse } from '@fortawesome/free-solid-svg-icons'
import { DateRange} from 'react-date-range';
import {format, toDate} from 'date-fns';
const SearchBar = () => {
    const [isopen,setIsopen] = useState(false);
    const [date, setDate] = useState([
        {
          startDate: new Date(),
          endDate: null,
          key: 'selection'
        }
      ]);
    return (
        <div className='flex px-20 justify-between items-center'>
            <div>
                <h2 className='flex gap-2 items-center mb-2 font-bold'>
                    Location
                <FontAwesomeIcon icon={faLocation}/>
                </h2>
                <input type="text" placeholder="Type Location" class="input input-bordered w-full max-w-xs" />
            </div>

            {/* Calender */}
            <div className='relative'>
                <h2 className='flex gap-2 items-center mb-2 font-bold'>
                    When
                </h2>
                <h2 className=' font-bold flex items-center gap-5 cursor-pointer' onClick={()=>setIsopen(!isopen)}>{`${format(date[0]?.startDate,"MM/dd/yyyy")}`}
                <FontAwesomeIcon icon={faCalendar}/>
                </h2>
                {
                    isopen && <DateRange
                    editableDateInputs={true}
                    onChange={item => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                        ranges={date}
                        className=" absolute top-20"
                  />
                }
            </div>
            <div>
                <h2 className='flex gap-2 items-center mb-2 font-bold'>
                    Price
                <FontAwesomeIcon icon={faMoneyBill}/>
                </h2>
                <select class="select max-w-xs select-bordered">
        <option disabled selected>Search With Searchbar</option>
       </select>
            </div>
            <div>
                <h2 className='flex gap-2 items-center mb-2 font-bold'>
                    Property Type
                <FontAwesomeIcon icon={faHouse}/>
                </h2>
                <select class="select max-w-xs select-bordered">
        <option disabled selected>Search With Searchbar</option>
       </select>
            </div>
            <div>
               <button className=' btn btn-primary'>Search</button>
            </div>
        
        </div>
    );
};

export default SearchBar;
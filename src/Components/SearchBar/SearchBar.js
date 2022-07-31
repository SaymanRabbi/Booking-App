import React, { useState } from 'react';
import './SearchBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocation, faCalendar, faMoneyBill, faHouse } from '@fortawesome/free-solid-svg-icons'
import { DateRange} from 'react-date-range';
import {format} from 'date-fns';
import useFetch from '../../hooks/useFetch';
import Features from '../Features/Features';
import Rule from '../Rule/Rule';
const SearchBar = () => {
    const [data] = useFetch()
    const maxprice = Math.max(...data.map(item => item.price))
    const [location, setLocation] = useState('')
    const [price,setPrice]=useState('')
    const [property, setProperty] = useState('')
     const [isopen,setIsopen] = useState(false);
    const [date, setDate] = useState([
        {
          startDate: new Date(),
          endDate: null,
          key: 'selection'
        }
    ]);
    const newDate = format(date[0]?.startDate,"MM/dd/yyyy")
    return (
        <>
        <div className='grid md:grid-cols-4 grid-cols-2 px-20 justify-between items-center'>
            <div>
                <h2 className='flex gap-2 items-center mb-2 font-bold'>
                    Location
                <FontAwesomeIcon icon={faLocation}/>
                </h2>
                <select onChange={e=>setLocation(e?.target?.value)}>
                    {
                            data.map(item => <>
                                <option>
                                    All
                                </option>
                            <option key={item?.id} className='font-bold'>
                            { item?.location}
                                </option>
                                
                            </>)
                    }
        
       </select>
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
                        className=" absolute top-20 z-10"
                  />
                }
            </div>
            <div>
                <h2 className='flex gap-2 items-center mb-2 font-bold'>
                    Price
                <FontAwesomeIcon icon={faMoneyBill}/>
                </h2>
                <select onChange={e=>setPrice(e?.target?.value)}>
                    {
                            data?.map(dt =>
                                <>
                                    <option>{maxprice}</option>
                                    <option key={dt?.id} className='font-bold'>
                            { dt?.price}
                            </option>
                                </>
                                )
               }
       </select>
            </div>
            <div>
                <h2 className='flex gap-2 items-center mb-2 font-bold'>
                    Property Type
                <FontAwesomeIcon icon={faHouse}/>
                </h2>
                <select className='text-bold' name='property' onChange={e=>setProperty(e?.target.value)}>
                    {
                            data?.map(item => <>
                                <option>All</option>
                            <option key={item?.id}>
                            {
                                item?.type
                            }
                        </option>
                            </>)
        }
       </select>
            </div>
            
        
        </div>
        <Rule/>
            <Features location={location} price ={price} property={property} date={newDate} />
            </>
    );
};

export default SearchBar;
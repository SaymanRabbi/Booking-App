import { faAreaChart, faBath, faBed } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';

const Features = () => {
    const [data, setData] = useState([])
console.log(data)
    useEffect(() => {
       fetch('fackdata.json').then(res => res.json()).then(data => setData(data))
    },[])
    return (
        <div className='grid grid-cols-3 gap-5 px-10'>
        
            {
                data.map(item => <div className='mx-auto' key={item?.id}>
                    <div class="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src={item?.Picture} className=" h-auto" alt="Shoes" /></figure>
                        <div class="card-body">
                            <p>
                                <span className='font-bold text-indigo-500 text-xl'>${item?.price}</span> <span>/month</span>
                            </p>
                           <h2 class="card-title font-bold">{item?.name}</h2>
                            <p>{item?.location}</p>
                            <div className='flex'>
                                <p className='flex gap-2 items-center'>
                                    <FontAwesomeIcon className=' text-indigo-500' icon={faBed} />
                                    {item?.bades}</p>
                                    <p className='flex gap-2 items-center'>
                                    <FontAwesomeIcon className=' text-indigo-500' icon={faBath} />
                                    {item?.bathroom}</p>
                                    <p className='flex gap-2 items-center'>
                                    <FontAwesomeIcon className=' text-indigo-500' icon={faAreaChart} />
                                    {item?.area}m&sup2;</p>
                                
    </div>
  </div>
</div>


                </div> )
        }
        </div>
    );
};

export default Features;
import { faAreaChart, faBath, faBed } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import useFetch from '../../hooks/useFetch';

const Features = ({ date, price, property, location }) => {
    const [data] = useFetch()
    const datas = data.find(item => item.location === location)
    const propertys = data.find(item => item.type === property)
    const prices = data.find(item => item.price === price)
    const [update, setUpdate] = useState([])
    useEffect(() => {
        setUpdate(data)
        if(datas||propertys||prices){
            setUpdate([datas||propertys||prices])
        }
   },[datas,propertys,prices,data])
    return (
       
            <div className='grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-5 px-10'>
        
        {
            update.map(item => <div className='mx-auto hover:scale-105 transition-transform duration-300 cursor-pointer' key={item?.id}>
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
import React, { useEffect, useState } from 'react';
import ServicesCard from './ServicesCard';

const Services = () => {
    const [services, setServices] = useState([])

    useEffect(()=>{
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])

    return (
        <div className='mt-4'>
            <div className='text-center'>
            <h3 className='text-2xl font-bold text-orange-600'>Our Services</h3>
            <h2 className='text-5xl'>Our Service Area</h2>
            <p>The majority have suffered alteration in some form, by injected humour, <br /> or randomised words which don't look even slightly believable. </p>
            </div>
            {/* card  */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
               {
                services.map(service => <ServicesCard
                key={service._id}
                service={service}
                >

                </ServicesCard>)
               }
            </div>
        </div>
    );
};

export default Services;
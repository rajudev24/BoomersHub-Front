import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Property from './Property';


const Properties = () => {
    const [searchParams] = useSearchParams();
    const [properties, setProperties] = useState([])
    const name = searchParams.get('name')
    const state = searchParams.get('state')
    const city = searchParams.get('city')
    
    
    useEffect(()=>{
        fetch(`http://localhost:5000/property/${name||state||city}`)
        .then(res =>res.json())
        .then(data=> setProperties(data))
    },[])

    return (
        <div className='max-w-5xl  mx-auto mt-16'>
            <div>
                {
                properties.map(property => 
                <Property
                 key={property._id}
                 property={property}
                ></Property>)
                }
            </div>
        </div>
    );
};

export default Properties;
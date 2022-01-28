import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import GoogleMap from './GoogleMap';

const PropertyDetails = () => {
    const { id } = useParams();
    const [property, setProperty] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/property')
            .then(res => res.json())
            .then(data => setProperty(data))
    }, [])

    const propertyInfo = property.find(item => item._id === id)


    return (
        <div className='max-w-6xl  mx-auto mb-10 ' >

            <div className='flex justify-between mt-10 mb-10' >
                <Carousel >
                    <div>
                        <img src={propertyInfo?.images1}
                            className='rounded-xl'
                            alt='img'
                        />
                    </div>
                    <div>
                        <img src={propertyInfo?.images2}
                            className='rounded-xl'
                            alt='img'
                        />
                    </div>
                    <div>
                        <img src={propertyInfo?.images3}
                            className='rounded-xl'
                            alt='img'
                        />
                    </div>
                </Carousel>

                <div className='min-w-[600px] ml-2'>
                    <GoogleMap
                    property={propertyInfo}
                    ></GoogleMap> 
                </div>
            </div> 


            <div className='flex justify-between'>
                <div>
                    <div >
                        <h4 className='font-bold text-2xl'>Street Address</h4>
                        <h5>{propertyInfo?.address} </h5>
                        <span>{propertyInfo?.state} </span>
                        <span>{propertyInfo?.zip_Code} </span>

                        <h5>{propertyInfo?.phone} </h5>
                        <h5>{propertyInfo?.county} </h5>
                    </div>
                    <div >
                        <h4 className='font-bold text-2xl mt-5'>Mailling Address</h4>
                        <h5>{propertyInfo?.address} </h5>
                        <span>{propertyInfo?.state} </span>
                        <span>{propertyInfo?.zip_Code} </span>
                        <h5>{propertyInfo?.county} </h5>
                    </div>
                </div>
                <div>
                    <h2 className='font-bold text-xl' > Name: {propertyInfo?.name} </h2>
                    <h4> Facility/Provider Type: {propertyInfo?.type} </h4>
                    <h4> Capacity: {propertyInfo?.capacity} </h4>
                </div>
            </div>

        </div>
    );
};

export default PropertyDetails;
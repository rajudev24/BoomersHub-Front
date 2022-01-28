import React from 'react';
import { Link } from 'react-router-dom';

const Property = (props) => {
    const { name, address, city, state, zip_Code, images1, _id } = props.property
    return (
        <div className=' md:flex py-7 px-2 pr-4 border-b cursor-pointer hover:opacity-80 hover:shadow-lg transition duration-200 ease-out first:border-t'>
            <div className='relative '>
                <img src={images1}
                    alt='img'
                    priority='true'
                    className='rounded-xl h-24 w-40 md:h-52 md:w-[350px] flex-shrink-0'
                />
            </div>

            <div className='flex flex-col flex-grow md:pl-5'>

                <div className='flex justify-between'>
                    <div className='flex items-center'>
                        <h4 className='font-semibold mr-2'>Name: {name} </h4>
                        <h5 className='mr-4'>State: {state} </h5>
                        <h5 className='mr-4'>Zip: {zip_Code} </h5>
                    </div>

                    <h5>City: {city} </h5>

                </div>
                <div>
                    <h5 className='mt-4'>Address: {address} </h5>
                    <Link to={`/property/${_id}`}> <button className='mt-8 font-semibold border-2 p-2 rounded-xl hover:bg-red-600 hover:text-white py-2 px-4 border-red-400 hover:shadow-lg  active:scale-95 transition transform duration-100 ease-out'>More Details</button></Link>
                </div>
                
            </div>
            
        </div>
    );
};

export default Property;
import React, { useState } from 'react';

const AddProperty = () => {
    const [addProperty, setAddProperty] = useState('')
    const [images, setImages] = useState({})

    const handleInput = (e) => {
        const filed = e.target.name;
        const value = e.target.value
        const newInputValue = { ...addProperty };
        newInputValue[filed] = value;
        setAddProperty(newInputValue)
    }



    


    const handleAddProperty = e => {

        e.preventDefault();
        const formData = new FormData();
        formData.append('name', addProperty.name)
        formData.append('address', addProperty.address)
        formData.append('type', addProperty.type)
        formData.append('city', addProperty.city)
        formData.append('zip_Code', addProperty.zip_Code)
        formData.append('capacity', addProperty.capacity)
        formData.append('images', images)
        formData.append('long', addProperty.long)
        formData.append('lat', addProperty.lat)

        fetch('http://localhost:5000/property',{
            method: 'POST',
            body: formData,
        })
        .then(res =>res.json())
        .then(data => console.log(data))
    }
    return (
        <div >

            <div className='flex justify-center items-center h-[100vh]  bg-gradient-to-r from-purple-500 to-pink-500'>
                <form onSubmit={handleAddProperty} encType='mutlipart/form-data'>
                    <h1 className='font-bold text-4xl flex mx-auto w-1/4 mb-12'>Add Property </h1>
                    <div className='flex'>
                        <div className='mr-2'>
                            <label htmlFor="">Property Name</label> <br />
                            <input type="text"
                                className=' p-4 rounded-lg  my-2 w-[300px]'
                                placeholder='Search by property name'
                                name='name'
                                onBlur={handleInput}
                            />
                        </div>
                        <div className='mr-2'>
                            <label htmlFor="">Address</label> <br />
                            <input type="text"
                                className=' p-4 rounded-lg  my-2 w-[300px]'
                                placeholder='Input address'
                                name='address'
                                onBlur={handleInput}
                            />
                        </div>
                        <div>
                            <label htmlFor="">Property Type</label> <br />
                            <input type="text"
                                className=' p-4 rounded-lg  my-2 w-[300px]'
                                placeholder='Input property type'
                                name='type'
                                onBlur={handleInput}
                            />
                        </div>
                    </div>
                    <div className='flex'>
                        <div className='mr-2'>
                            <label htmlFor="">Add City</label> <br />
                            <input type="text"
                                className=' p-4 rounded-lg  my-2 w-[300px]'
                                placeholder='Input city'
                                name='city'
                                onBlur={handleInput}
                            />
                        </div>
                        <div className='mr-2'>
                            <label htmlFor="">Add Zip Code</label> <br />
                            <input type="text"
                                className=' p-4 rounded-lg  my-2 w-[300px]'
                                placeholder='Zip code'
                                name='zip_Code'
                                onBlur={handleInput}
                            />
                        </div>
                        <div>
                            <label htmlFor="">Property Capacity</label> <br />
                            <input type="text"
                                className=' p-4 rounded-lg  my-2 w-[300px]'
                                placeholder='property capacity'
                                name='capacity'
                                onBlur={handleInput}
                            />
                        </div>
                    </div>
                    <div className='flex'>
                        <div className='mr-2'>
                            <label htmlFor="">Property Images</label> <br />
                            <input type="file"
                                className=' p-4 rounded-lg  my-2 w-[300px]'
                                placeholder='Images'
                                name='images'
                                multiple
                                onBlur={e => setImages(e.target.files[0])}
                            />
                        </div>
                        <div className='mr-2'>
                            <label htmlFor="">Property Longitude</label> <br />
                            <input type="text"
                                className=' p-4 rounded-lg  my-2 w-[300px]'
                                placeholder='longitude'
                                name='long'
                                onBlur={handleInput}
                            />
                        </div>
                        <div>
                            <label htmlFor="">Property Latitude</label> <br />
                            <input type="text"
                                className=' p-4 rounded-lg  my-2 w-[300px]'
                                placeholder='latitude'
                                name='lat'
                                onBlur={handleInput}
                            />
                        </div>
                    </div>
                    <button type='submit' className='px-4 py-2 border  rounded-lg cursor-pointer  transition transform duration-100 ease-out  bg-indigo-700 text-white font-semibold text-xl flex mx-auto w-1/4 mt-8'>Add Property</button>
                </form>
            </div>
        </div>
    );
};

export default AddProperty;
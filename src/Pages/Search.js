import React, { useState } from 'react';
import { createSearchParams, useNavigate } from 'react-router-dom';

const Search = () => {
    const [inuptValue, setInputValue] = useState('')
    const navigate = useNavigate();


    const handleInput = (e)=>{
        const filed = e.target.name;
        const value = e.target.value
        const newInputValue = {...inuptValue};
        newInputValue[filed]= value;
        setInputValue(newInputValue)
    }

    console.log(inuptValue)

    // const searchQuery = { 
    //     name: inuptValue.name,
    //     state: inuptValue.state,
    //     city: inuptValue.city
    // }
    // console.log(searchQuery)

    const handleSearch = e =>{
        navigate({
            pathname:'/properties',
            search: `?${createSearchParams(inuptValue)}`
        })
        e.preventDefault();
    }
    return (
        <div className='flex justify-center items-center h-[100vh]  bg-gradient-to-r from-violet-500 to-fuchsia-500'>
            <form onSubmit={handleSearch}>
            <input  type="text"
            className=' p-4 rounded-lg w-3/4 my-2'
             placeholder='Search by property name' 
             name='name'
             onBlur={handleInput}
             />
            <input  type="text"
            className=' p-4 rounded-lg w-3/4 '
             placeholder='Search by state' 
             name='state'
             onBlur={handleInput}
             />
            <input  type="text"
            className=' p-4 rounded-lg w-3/4 my-2'
             placeholder='Search by city' 
             name='city'
             onBlur={handleInput}
             /> <br />
              <button type='submit' 
                className='px-4 py-2 border  rounded-lg cursor-pointer  transition transform duration-100 ease-out  bg-cyan-600 text-white font-semibold text-lg'
                >Search</button>
            </form>
        </div>
    );
};

export default Search;
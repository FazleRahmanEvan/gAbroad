import React, { useState } from 'react';
import { FaAngleDown } from "react-icons/fa";
import VersityList from '../Universitys/VersityList';

const FindCourse = () => {
  // const [countries, setCountries] = useState([]);

  // function  onChange(e){
  //   if (e.target.checked) {
  //     setCountries((prev) => [...prev, e.target.name]);
  //   } else {
  //     const filteredCountires = countries.filter((c) => c !== e.target.name);
  //     setCountries(filteredCountires);
      
  //   }
 
  // }
  // console.log(countries)

    return (
        <div className='lg:p-10'>
            <h1 className='text-4xl font-medium text-primary mt-16 text-start lg:ml-28'>Find Course <span className='text-secondary'>to Study Abroad</span> </h1>
            <p className='mt-10 text-xl font-medium text-start lg:ml-28'>Browse Institution worldwide</p>

<div >

       {/* <div className="dropdown">
       <button className='border border-black sm:w-60 lg:w-96 p-3 flex justify-around'>Countries <FaAngleDown className=' mt-1'/> </button>
  <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100  w-52">

    <div class="flex items-center mb-4">
    <input 
    onChange={onChange}
    name="Canada"
  
    id="default-checkbox" type="checkbox" value="" class="w-4 h-4 ml-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label for="default-checkbox" class="ml-6 text-sm font-medium text-gray-900 dark:text-gray-300">Canada</label>
    </div>

    <div class="flex items-center mb-4">

    <input 
        onChange={onChange}
        name="Australia"
    id="default-checkbox" type="checkbox" value="" class="w-4 h-4 ml-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label for="default-checkbox" class="ml-6 text-sm font-medium text-gray-900 dark:text-gray-300">Australia</label>
    </div>

    <div class="flex items-center mb-4">
    <input
     onChange={onChange}
     name="UK"
    id="default-checkbox" type="checkbox" value="" class="w-4 h-4 ml-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label for="default-checkbox" class="ml-6 text-sm font-medium text-gray-900 dark:text-gray-300">UK</label>
    </div>

  
 

    <div class="flex items-center mb-4">
    <input 
     onChange={onChange}
     name="Germany"
    id="default-checkbox" type="checkbox" value="" class="w-4 h-4 ml-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label for="default-checkbox" class="ml-6 text-sm font-medium text-gray-900 dark:text-gray-300">Germany</label>
    </div>

  </ul>
  </div> */}

  {/* <div className="dropdown">
  <button className='border border-black sm:w-60 lg:w-96 p-3 flex justify-around'>Course <FaAngleDown className=' mt-1'/> </button>
  <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100  w-52">

    <div class="flex items-center mb-4">
    <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 ml-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label for="default-checkbox" class="ml-6 text-sm font-medium text-gray-900 dark:text-gray-300">Canada</label>
    </div>

    <div class="flex items-center mb-4">
    <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 ml-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label for="default-checkbox" class="ml-6 text-sm font-medium text-gray-900 dark:text-gray-300">Australia</label>
    </div>

    <div class="flex items-center mb-4">
    <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 ml-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label for="default-checkbox" class="ml-6 text-sm font-medium text-gray-900 dark:text-gray-300">UK</label>
    </div>

  
 

    <div class="flex items-center mb-4">
    <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 ml-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label for="default-checkbox" class="ml-6 text-sm font-medium text-gray-900 dark:text-gray-300">Germany</label>
    </div>

  </ul>
  </div>  */}

  {/* <div className="dropdown">
  <button className='border border-black sm:w-60 lg:w-96 p-3 flex justify-around'>University <FaAngleDown className=' mt-1'/> </button>
  <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100  w-52">

    <div class="flex items-center mb-4">
    <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 ml-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label for="default-checkbox" class="ml-6 text-sm font-medium text-gray-900 dark:text-gray-300">Canada</label>
    </div>

    <div class="flex items-center mb-4">
    <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 ml-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label for="default-checkbox" class="ml-6 text-sm font-medium text-gray-900 dark:text-gray-300">Australia</label>
    </div>

    <div class="flex items-center mb-4">
    <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 ml-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label for="default-checkbox" class="ml-6 text-sm font-medium text-gray-900 dark:text-gray-300">UK</label>
    </div>

  
 

    <div class="flex items-center mb-4">
    <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 ml-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label for="default-checkbox" class="ml-6 text-sm font-medium text-gray-900 dark:text-gray-300">Germany</label>
    </div>

  </ul>
  </div> */}

       </div>

       <VersityList></VersityList>

        </div>
    );
};

export default FindCourse;
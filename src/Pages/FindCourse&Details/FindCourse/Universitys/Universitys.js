import React, { useEffect, useState } from 'react';
import { ImBooks } from "react-icons/im";
import { Link } from 'react-router-dom';
import VersityCard from './VersityCard';


const Universitys = ({versity}) => {
    

    return (
       
            <div className='lg:mt-32'>
               
            {
                versity.map(universities=> <VersityCard
                   key={universities._id}
                   universities ={universities}
                   />)
               }
                 

                
                
            </div>

           /* <div className='border  bg-base-100 shadow-2xl lg:mt-24 lg:ml-28 lg:mr-36 mb-16'>
                <div className='grid grid-cols-1 lg:grid-cols-2'>
                <div c {lassName='m-9 lg:ml-20 flex gap-10'>
                    <div>
                    <img className='w-24 ' src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Oxford-University-Circlet.svg/1636px-Oxford-University-Circlet.svg.png" alt="" />
                    </div>
                    <div>
                        <h3 className='text-3xl font-medium text-primary mt-1'>University of Oxford</h3>
                        <div className='flex gap-3 mt-5 ml-1'>
                            <img className='w-5' src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Canada_%28Pantone%29.svg/1200px-Flag_of_Canada_%28Pantone%29.svg.png" alt="" />
                            <div>
                            <p className='text-gray-400 font-medium text-xs'>Vancouver, BC V6T 1Z4, Canada</p>
                          
                            </div>
                           
                        </div>
                        
                        <p className='text-gray-400 font-medium flex text-xs mt-3 gap-3'> <ImBooks className=' text-xl text-black ml-1'/>Advanced Diploma of Information Technology</p>
                    </div>
                </div>
                <div className='lg:mt-28 lg:ml-52'>
                <Link to="/courseDetails"> <button class=" bg-secondary text-black rounded-full font-medium btn-md w-28">Find More</button></Link>
                </div>
              
                </div>

                <div className='flex gap-1 mb-12 mt-3'>

                <div className='bg-blue-800 w-64'>
                     <h4 className='font-medium text-md text-white'>Founded In</h4>
                    <h4 className='font-medium text-xl text-white'>2001</h4>
                </div>
                <div className='bg-blue-800 w-80'>
                     <h4 className='font-medium text-md text-white'>Institution Type</h4>
                    <h4 className='font-medium text-xl text-white'>Private</h4>
                </div>
                <div className='bg-blue-800 w-96'>
                     <h4 className='font-medium text-md text-white'>Estimated Cost Of Living</h4>
                    <h4 className='font-medium text-xl text-white'>9207 gbp/year</h4>
                </div>
                <div className='bg-blue-800 w-60'>
                     <h4 className='font-medium text-md text-white'>World Ranking</h4>
                    <h4 className='font-medium text-xl text-white'>01</h4>
                </div>

            </div>
                
            </div>

            <div className='border bg-base-100 shadow-2xl lg:mt-24 lg:ml-28 lg:mr-36 mb-16'>
                <div className='grid grid-cols-1 lg:grid-cols-2'>
                <div className='m-9 lg:ml-20 flex gap-10'>
                    <div>
                    <img className='w-24 ' src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Oxford-University-Circlet.svg/1636px-Oxford-University-Circlet.svg.png" alt="" />
                    </div>
                    <div>
                        <h3 className='text-3xl font-medium text-primary mt-1'>University of Oxford</h3>
                        <div className='flex gap-3 mt-5 ml-1'>
                            <img className='w-5' src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Canada_%28Pantone%29.svg/1200px-Flag_of_Canada_%28Pantone%29.svg.png" alt="" />
                            <div>
                            <p className='text-gray-400 font-medium text-xs'>Vancouver, BC V6T 1Z4, Canada</p>
                          
                            </div>
                           
                        </div>
                        
                        <p className='text-gray-400 font-medium flex text-xs mt-3 gap-3'> <ImBooks className=' text-xl text-black ml-1'/>Advanced Diploma of Information Technology</p>
                    </div>
                </div>
                <div className='lg:mt-28 lg:ml-52'>
                <Link to="/courseDetails"> <button class=" bg-secondary text-black rounded-full font-medium btn-md w-28">Find More</button></Link>
                </div>
              
                </div>

                <div className='flex gap-1 mb-12 mt-3'>

                <div className='bg-blue-800 w-64'>
                     <h4 className='font-medium text-md text-white'>Founded In</h4>
                    <h4 className='font-medium text-xl text-white'>2001</h4>
                </div>
                <div className='bg-blue-800 w-80'>
                     <h4 className='font-medium text-md text-white'>Institution Type</h4>
                    <h4 className='font-medium text-xl text-white'>Private</h4>
                </div>
                <div className='bg-blue-800 w-96'>
                     <h4 className='font-medium text-md text-white'>Estimated Cost Of Living</h4>
                    <h4 className='font-medium text-xl text-white'>9207 gbp/year</h4>
                </div>
                <div className='bg-blue-800 w-60'>
                     <h4 className='font-medium text-md text-white'>World Ranking</h4>
                    <h4 className='font-medium text-xl text-white'>01</h4>
                </div>

            </div>
                
            </div>


            <div className='border bg-base-100 shadow-2xl lg:mt-24 lg:ml-28 lg:mr-36 mb-16'>
                <div className='grid grid-cols-1 lg:grid-cols-2'>
                <div className='m-9 lg:ml-20 flex gap-10'>
                    <div>
                    <img className='w-24 ' src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Oxford-University-Circlet.svg/1636px-Oxford-University-Circlet.svg.png" alt="" />
                    </div>
                    <div>
                        <h3 className='text-3xl font-medium text-primary mt-1'>University of Oxford</h3>
                        <div className='flex gap-3 mt-5 ml-1'>
                            <img className='w-5' src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Canada_%28Pantone%29.svg/1200px-Flag_of_Canada_%28Pantone%29.svg.png" alt="" />
                            <div>
                            <p className='text-gray-400 font-medium text-xs'>Vancouver, BC V6T 1Z4, Canada</p>
                          
                            </div>
                           
                        </div>
                        
                        <p className='text-gray-400 font-medium flex text-xs mt-3 gap-3'> <ImBooks className=' text-xl text-black ml-1'/>Advanced Diploma of Information Technology</p>
                    </div>
                </div>
                <div className='lg:mt-28 lg:ml-52'>
                <button class=" bg-secondary text-black rounded-full font-medium btn-md w-28">Find More</button>
                </div>
              
                </div>

                <div className='flex gap-1 mb-12 mt-3'>

                <div className='bg-blue-800 w-64'>
                     <h4 className='font-medium text-md text-white'>Founded In</h4>
                    <h4 className='font-medium text-xl text-white'>2001</h4>
                </div>
                <div className='bg-blue-800 w-80'>
                     <h4 className='font-medium text-md text-white'>Institution Type</h4>
                    <h4 className='font-medium text-xl text-white'>Private</h4>
                </div>
                <div className='bg-blue-800 w-96'>
                     <h4 className='font-medium text-md text-white'>Estimated Cost Of Living</h4>
                    <h4 className='font-medium text-xl text-white'>9207 gbp/year</h4>
                </div>
                <div className='bg-blue-800 w-60'>
                     <h4 className='font-medium text-md text-white'>World Ranking</h4>
                    <h4 className='font-medium text-xl text-white'>01</h4>
                </div>

            </div>
                
            </div>


            <div className='border bg-base-100 shadow-2xl lg:mt-24 lg:ml-28 lg:mr-36 mb-16'>
                <div className='grid grid-cols-1 lg:grid-cols-2'>
                <div className='m-9 lg:ml-20 flex gap-10'>
                    <div>
                    <img className='w-24 ' src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Oxford-University-Circlet.svg/1636px-Oxford-University-Circlet.svg.png" alt="" />
                    </div>
                    <div>
                        <h3 className='text-3xl font-medium text-primary mt-1'>University of Oxford</h3>
                        <div className='flex gap-3 mt-5 ml-1'>
                            <img className='w-5' src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Canada_%28Pantone%29.svg/1200px-Flag_of_Canada_%28Pantone%29.svg.png" alt="" />
                            <div>
                            <p className='text-gray-400 font-medium text-xs'>Vancouver, BC V6T 1Z4, Canada</p>
                          
                            </div>
                           
                        </div>
                        
                        <p className='text-gray-400 font-medium flex text-xs mt-3 gap-3'> <ImBooks className=' text-xl text-black ml-1'/>Advanced Diploma of Information Technology</p>
                    </div>
                </div>
                <div className='lg:mt-28 lg:ml-52'>
                <button class=" bg-secondary text-black rounded-full font-medium btn-md w-28">Find More</button>
                </div>
              
                </div>

                <div className='flex gap-1 mb-12 mt-3'>

                <div className='bg-blue-800 w-64'>
                     <h4 className='font-medium text-md text-white'>Founded In</h4>
                    <h4 className='font-medium text-xl text-white'>2001</h4>
                </div>
                <div className='bg-blue-800 w-80'>
                     <h4 className='font-medium text-md text-white'>Institution Type</h4>
                    <h4 className='font-medium text-xl text-white'>Private</h4>
                </div>
                <div className='bg-blue-800 w-96'>
                     <h4 className='font-medium text-md text-white'>Estimated Cost Of Living</h4>
                    <h4 className='font-medium text-xl text-white'>9207 gbp/year</h4>
                </div>
                <div className='bg-blue-800 w-60'>
                     <h4 className='font-medium text-md text-white'>World Ranking</h4>
                    <h4 className='font-medium text-xl text-white'>01</h4>
                </div>

            </div>
                
            </div>
            <div className='border bg-base-100 shadow-2xl lg:mt-24 lg:ml-28 lg:mr-36 mb-16'>
                <div className='grid grid-cols-1 lg:grid-cols-2'>
                <div className='m-9 lg:ml-20 flex gap-10'>
                    <div>
                    <img className='w-24 ' src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Oxford-University-Circlet.svg/1636px-Oxford-University-Circlet.svg.png" alt="" />
                    </div>
                    <div>
                        <h3 className='text-3xl font-medium text-primary mt-1'>University of Oxford</h3>
                        <div className='flex gap-3 mt-5 ml-1'>
                            <img className='w-5' src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Canada_%28Pantone%29.svg/1200px-Flag_of_Canada_%28Pantone%29.svg.png" alt="" />
                            <div>
                            <p className='text-gray-400 font-medium text-xs'>Vancouver, BC V6T 1Z4, Canada</p>
                          
                            </div>
                           
                        </div>
                        
                        <p className='text-gray-400 font-medium flex text-xs mt-3 gap-3'> <ImBooks className=' text-xl text-black ml-1'/>Advanced Diploma of Information Technology</p>
                    </div>
                </div>
                <div className='lg:mt-28 lg:ml-52'>
                <button class=" bg-secondary text-black rounded-full font-medium btn-md w-28">Find More</button>
                </div>
              
                </div>

                <div className='flex gap-1 mb-12 mt-3'>

                <div className='bg-blue-800 w-64'>
                     <h4 className='font-medium text-md text-white'>Founded In</h4>
                    <h4 className='font-medium text-xl text-white'>2001</h4>
                </div>
                <div className='bg-blue-800 w-80'>
                     <h4 className='font-medium text-md text-white'>Institution Type</h4>
                    <h4 className='font-medium text-xl text-white'>Private</h4>
                </div>
                <div className='bg-blue-800 w-96'>
                     <h4 className='font-medium text-md text-white'>Estimated Cost Of Living</h4>
                    <h4 className='font-medium text-xl text-white'>9207 gbp/year</h4>
                </div>
                <div className='bg-blue-800 w-60'>
                     <h4 className='font-medium text-md text-white'>World Ranking</h4>
                    <h4 className='font-medium text-xl text-white'>01</h4>
                </div>

            </div>
                
            </div>


            <div className='border bg-base-100 shadow-2xl lg:mt-24 lg:ml-28 lg:mr-36 mb-16'>
                <div className='grid grid-cols-1 lg:grid-cols-2'>
                <div className='m-9 lg:ml-20 flex gap-10'>
                    <div>
                    <img className='w-24 ' src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Oxford-University-Circlet.svg/1636px-Oxford-University-Circlet.svg.png" alt="" />
                    </div>
                    <div>
                        <h3 className='text-3xl font-medium text-primary mt-1'>University of Oxford</h3>
                        <div className='flex gap-3 mt-5 ml-1'>
                            <img className='w-5' src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Canada_%28Pantone%29.svg/1200px-Flag_of_Canada_%28Pantone%29.svg.png" alt="" />
                            <div>
                            <p className='text-gray-400 font-medium text-xs'>Vancouver, BC V6T 1Z4, Canada</p>
                          
                            </div>
                           
                        </div>
                        
                        <p className='text-gray-400 font-medium flex text-xs mt-3 gap-3'> <ImBooks className=' text-xl text-black ml-1'/>Advanced Diploma of Information Technology</p>
                    </div>
                </div>
                <div className='lg:mt-28 lg:ml-52'>
                <button class=" bg-secondary text-black rounded-full font-medium btn-md w-28">Find More</button>
                </div>
              
                </div>

                <div className='flex gap-1 mb-12 mt-3'>

                <div className='bg-blue-800 w-64'>
                     <h4 className='font-medium text-md text-white'>Founded In</h4>
                    <h4 className='font-medium text-xl text-white'>2001</h4>
                </div>
                <div className='bg-blue-800 w-80'>
                     <h4 className='font-medium text-md text-white'>Institution Type</h4>
                    <h4 className='font-medium text-xl text-white'>Private</h4>
                </div>
                <div className='bg-blue-800 w-96'>
                     <h4 className='font-medium text-md text-white'>Estimated Cost Of Living</h4>
                    <h4 className='font-medium text-xl text-white'>9207 gbp/year</h4>
                </div>
                <div className='bg-blue-800 w-60'>
                     <h4 className='font-medium text-md text-white'>World Ranking</h4>
                    <h4 className='font-medium text-xl text-white'>01</h4>
                </div>

            </div>
                
            </div> */


     
    );
};

export default Universitys;
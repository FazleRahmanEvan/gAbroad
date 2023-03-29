import React from 'react';
import { ImBooks } from "react-icons/im";
import { FaAngleRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

const CourseTitle = () => {
    return (
        <div className='p-8 mt-9'>
              <div className='grid grid-cols-1 lg:grid-cols-2'>
                <div className='m-9 lg:ml-20 flex gap-10'>
                    <div>
                    <img className='w-24 ' src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Oxford-University-Circlet.svg/1636px-Oxford-University-Circlet.svg.png" alt="" />
                    </div>
                    <div>
                        <h3 className='text-3xl font-medium text-primary mt-1'>Diploma in Engineering<span className='text-secondary'> - Aerospace Engineering</span> </h3>
                        <div className='flex gap-3 mt-5 ml-1'>
                            <img className='w-5' src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Canada_%28Pantone%29.svg/1200px-Flag_of_Canada_%28Pantone%29.svg.png" alt="" />
                            <div>
                            <p className='text-gray-400 font-medium text-xs'>Vancouver, BC V6T 1Z4, Canada</p>
                          
                            </div>
                           
                        </div>
                        
                        <p className='text-gray-400 font-medium flex text-xs mt-3 gap-3'> <ImBooks className=' text-xl text-black ml-1'/>Advanced Diploma of Information Technology</p>
                    </div>
                </div>
                <div className='lg:mt-36 lg:ml-96'>
                    <Link to='/applyNow'> <button class=" bg-primary flex text-white rounded-full font-medium btn-md w-32"><span className='mt-3 ml-1'>Apply Now</span> <FaAngleRight className='mt-4 ml-1'/></button></Link>
               
                </div>
              
                </div>
                <div class="divider p-8"></div>
        </div>
    );
};

export default CourseTitle;
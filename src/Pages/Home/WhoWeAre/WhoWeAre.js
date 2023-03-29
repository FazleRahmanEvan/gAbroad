import React from 'react';
import { RiCheckboxBlankFill } from "react-icons/ri";
import { FaAngleRight } from "react-icons/fa";
const WhoWeAre = () => {
    return (
        <div>
            <div class="hero min-h-screen mt-24">
  <div class="hero-content flex-col lg:flex-row gap-16">
  <div className='mb-20'>
      <h1 class="text-5xl font-bold text-primary lg:text-start mt-8 lg:ml-5"> <span className='text-secondary'> Who </span>We Are</h1>
      <p class="py-6 px-6 text-justify mt-10">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi consectetur quo culpa velit nulla soluta aliquid nemo facere minima vitae, tempora sapiente animi nobis rem exercitationem corrupti voluptas mollitia ad commodi ullam porro molestiae? Enim, ut. Fuga quasi iure voluptatibus?</p>
      <div className='mt-8 lg:ml-4'>
        <div className='flex gap-7 mt-4'>
        <RiCheckboxBlankFill className='text-secondary text-xs mt-1'/><p>British Coucil Certified Counselor</p> 
        </div>
        <div className='flex gap-7 mt-4'>
        <RiCheckboxBlankFill className='text-secondary text-xs mt-1'/><p >UCAS Registered Center</p>
        </div>
        <div className='flex gap-7 mt-4'>
        <RiCheckboxBlankFill className='text-secondary text-xs mt-1'/><p>100% Free Consultation By Our EXPERTS</p>
        </div>
        <div className='flex gap-7 mt-4'>
        <RiCheckboxBlankFill className='text-secondary text-xs mt-1'/><p>A Review Of Student's Personal Statement</p>
        </div>
        
      
      </div >
      <button class="btn btn-primary mt-14 lg:mr-96 text-white rounded-full w-32">Find More <FaAngleRight className='
      ml-1'/></button>
    </div>
<div className='grid grid-cols-1 lg:flex gap-7'>
<div class="card w-80 lg:h-2/3 bg-base-100 shadow-xl ">
  <div class="card-body bg-primary rounded-t-lg mb-2">
    <div className=''>
    <p className='text-white text-2xl font-medium'><span className='text-4xl'>20+</span>universitys <br /> and scholarships</p>
    </div>
  </div>
  <figure><img src="https://i.ibb.co/M1Y0tKx/1.png" alt="Shoes" /></figure>
</div>
<div class="card w-80 lg:h-2/3 bg-base-100 shadow-xl lg:mt-16">
  <figure><img src="https://i.ibb.co/7vLxcN7/2.png" alt="Shoes" /></figure>
  <div class="card-body bg-secondary rounded-b-lg mt-2">
    
    <p className='text-black text-2xl font-medium'> <span className='text-4xl'>Certified</span> <br/> education consellor </p>
  </div>
</div>
</div>
   
  </div>
</div>
        </div>
    );
};

export default WhoWeAre;
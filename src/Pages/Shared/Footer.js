import React from 'react';
import { FaFacebookF, FaLinkedin,FaPhoneAlt} from "react-icons/fa"
import { ImLocation } from "react-icons/im";
import { IoMailSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <footer class="footer grid-rows-2  p-12 bg-neutral text-neutral-content">
  <div className=' lg:ml-24 mt-20'>
  <img className='w-36' src="https://i.ibb.co/54Z2VsD/Logo-1.png"/>
  <p className='text-justify text-white w-44'>Since the establishment of “Generation Abroad”, we have been offering higher education consultancy services to students who are dreaming of a quality life abroad.</p>
  </div> 
  <div className='lg:ml-24 lg:mt-16'>
  <p class="text-xl font-medium text-white">Follow Us :</p> 
  <div className="footer-start grid grid-flow-col gap-4 mt-2">
        
            <a className='text-xl' href="/"><FaFacebookF></FaFacebookF></a>
               <a className='text-xl' href="/"><FaLinkedin></FaLinkedin></a> 
               </div>
  </div> 
 
  <div className=' lg:mt-24 text-white '>
    
    <Link to="/"><a class="link link-hover">Home</a> </Link>
    <Link to="/countries"> <a class="link link-hover">Study Destination</a></Link>
    <Link to="/about"><a class="link link-hover">About</a></Link>
    <Link to="/services"><a class="link link-hover">Services</a></Link>
  </div> 
  <div className='  lg:mb--10 text-white'>
    <span class="footer-title">Countries</span> 
    <Link to="/studyCanada"> <a class="link link-hover">Study in Australia</a> </Link>
    <Link to="/studyCanada"> <a class="link link-hover">Study in Canada</a>  </Link>
    <Link to="/studyCanada"> <a class="link link-hover">Study in USA</a> </Link>
    <Link to="/studyCanada">   <a class="link link-hover">Study in UK</a></Link>
   
  
  </div> 
  <div className='lg:ml-10 lg:mt-32 text-white'>
  <Link to="/tearms&use"> <a class="link link-hover">Terms of Use</a> </Link>
  <Link to="/privacyPolicy"> <a class="link link-hover">Privacy Policy</a> </Link>
   
    
   
  </div> 
  <div className='lg:ml-10 text-white'>
  <span class="footer-title">Contact Us</span> 
          <div className="grid grid-flow-col gap-2 mt-2">
          <a><ImLocation></ImLocation></a>
          <p>299 Lafontaine, Rivière-du-Loup,
            <br />
            Quebec, Canada</p>
          </div>
          <div className="grid grid-flow-col gap-2 mt-3 mb-2 ">
          <a><FaPhoneAlt></FaPhoneAlt></a>
          <p>(418) 867-4517</p>
          <p>(418) 867-4517</p>
          </div>
          <div className="grid grid-flow-col gap-2 mt-3 ">
          <a><IoMailSharp></IoMailSharp></a>
          <p >info.gabroad@gmail.com</p>
          </div>
  </div>
</footer>
        </div>
    );
};

export default Footer;
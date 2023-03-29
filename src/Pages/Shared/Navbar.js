import React from 'react';
import logo1 from '../../image/Logo 1.png'
import { FaFacebook,FaTwitter,FaLinkedinIn,FaPhoneAlt} from "react-icons/fa";
import './Navbar.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <div class="navbar bg-base-100 py-8">
        <div class="navbar-start">
          <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabindex="0"
              class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 gap-4"
            >
              <div>
                <h4 className="text-blue-500  font-medium">Follow Us</h4>
                <div className="grid justify-center gap-4 mt-4">
                  <p className="text-blue-400 text-2xl">
                    <FaFacebook />
                  </p>
                  <p className="text-blue-400 text-2xl">
                    <FaTwitter />
                  </p>
                  <p className="text-blue-400 text-2xl">
                    <FaLinkedinIn />
                  </p>
                </div>
              </div>
              <div>
                <a class="btn w-28 bg-yellow-300 rounded-full border-none">
                  Sign In
                </a>
              </div>
              <div>
                <a class="btn w-28 bg-yellow-300 rounded-full border-none">
                  Sign Up
                </a>
              </div>
            </ul>
          </div>
          <div class="w-28 rounded-full ml-16">
            <Link to='/'><img src={logo1} /></Link>
           
          </div>
        </div>
        <div class="navbar-center "></div>
        <div class="navbar-end hidden lg:flex gap-2 lg:mr-16">
          <div>
            <h4 className="text-blue-500  font-medium">Follow Us</h4>
            <div className="flex gap-4 mt-4">
              <p className="text-blue-400 text-2xl">
                <FaFacebook />
              </p>
              <p className="text-blue-400 text-2xl">
                <FaTwitter />
              </p>
              <p className="text-blue-400 text-2xl">
                <FaLinkedinIn />
              </p>
            </div>
          </div>
          <div class="divider divider-horizontal"></div>
          <div>
            <a class="btn w-28 bg-yellow-300 rounded-full border-none text-white">
              Sign In
            </a>
          </div>
          <div class="divider divider-horizontal"></div>
          <div>
            <a class="btn w-28 bg-yellow-300 rounded-full border-none text-white">
              Sign Up
            </a>
          </div>
        </div>
      </div>

      <div class="navbar h-20 bg-slate-800">
        <div class="navbar-start">
          <div class="dropdown">
            <label tabindex="0" class="btn btn-white bg-slate-800 lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabindex="0"
              class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-slate-800 text-white rounded-box w-52"
            >
        
        <li tabIndex={0}>
          <a className="justify-between">
            Study Destination
            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
          </a>
          <ul className="p-2 bg-neutral">
          <li className="mt-4 "><Link to="/countries">Countries</Link></li>
          <li className="mt-4 "><Link to="/findCourse">Find Course</Link></li>
          <li className="mt-4 "><Link to="/findScholarship">Find Scholarship</Link></li>
          </ul>
        </li>
              <li className="mt-4 "><Link to="/services">Services</Link></li>
              <li className="mt-4 "><Link to="/about">About</Link></li>
             

              <li>
                <div class="max-w-md mx-auto mt-3 mb-3">
                  <div class="relative flex items-center w-36 h-10 rounded-lg focus-within:shadow-lg bg-slate overflow-hidden border">
                    <div class="grid place-items-center h-full w-12 text-gray-300">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                    </div>

                    <input
                      class="peer bg-slate-800 h-full w-full outline-none text-sm text-white pr-2"
                      type="text"
                      id="search"
                      placeholder="Search here"
                    />
                  </div>
                </div>
              </li>
              <div>
                <Link to="/applyNow">  <a class="btn btn-sm bg-yellow-300 rounded-full border-none mt-3 mb-4 text-white">
                  Apply Now
                </a></Link>
              
              </div>
              <div className="mt-3 mb-4 ml-10">
                <p className="text-white flex">
                  <FaPhoneAlt className="mr-2 mt-1" /> Contact Us
                </p>
              </div>
            </ul>
          </div>
        </div>
        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal px-1 mr-16 gap-7 text-white">
          <li tabIndex={0}>
          <a className="justify-between">
            Study Destination
            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
          </a>
          <ul className="p-2 bg-neutral">
          <li className="mt-4 "><Link to="/countries">Countries</Link></li>
          <li className="mt-4 "><Link to="/findCourse">Find Course</Link></li>
          <li className="mt-4 "><Link to="/findScholarship">Find Scholarship</Link></li>
          </ul>
        </li>
            <li className=""><Link to="/services">Services</Link></li>
            <li className=" "><Link to="/about">About</Link></li>

            <li>
              <div class="max-w-md mx-auto ml-24">
                <div class="relative flex items-center w-44 h-10 rounded-lg focus-within:shadow-lg bg-slate overflow-hidden border">
                  <div class="grid place-items-center h-full w-12 text-gray-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </div>

                  <input
                    class="peer bg-slate-800 h-full w-full outline-none text-sm text-white pr-2"
                    type="text"
                    id="search"
                    placeholder="Search here"
                  />
                </div>
              </div>
            </li>
            <div>
            <Link to="/applyNow">  <a class="btn btn-sm bg-yellow-300 rounded-full border-none mt-3 mb-4 text-white">
                  Apply Now
                </a></Link>
            </div>
          </ul>
        </div>

        <div className="navbar-end hidden lg:flex mr-20">
          <p className="text-white flex">
            <FaPhoneAlt className="mr-9 mt-1" /> Contact Us
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
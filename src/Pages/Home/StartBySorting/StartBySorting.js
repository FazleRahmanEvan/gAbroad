import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { MdMenuBook } from "react-icons/md";
import { IoIosSchool } from "react-icons/io";
import { AiFillRightCircle } from "react-icons/ai";

const StartBySorting = () => {
  return (
    <div>
      <h1 className="text-primary text-4xl font-medium mt-16 mb-16">
        Start By <span className="text-secondary"> Sorting</span>
      </h1>
      <div className="mb-10 grid justify-items-center">
        <div className=" lg:flex lg:ml- ">
        <div class="card w-80 outline outline-primary bg-base-100 rounded-none shadow-xl">
          <p className="text-3xl mb-7 mt-5 ml-20">
            <IoLocationOutline />
          </p>
          <h3 className="font-medium mb-4">Study Destination</h3>
          <h3 className="font-medium text-3xl mb-3">Countries</h3>
          <div className="card-actions justify-end mr-6">
          <p className="text-2xl text-primary  mb-6 "><AiFillRightCircle/></p>
          </div>
          
        </div>
        <div class="card w-80 outline outline-primary bg-base-100 rounded-none shadow-xl">
          <p className="text-3xl mb-7 mt-5 ml-20">
            <MdMenuBook/>
          </p>
          <h3 className="font-medium mb-4">Career Pathways</h3>
          <h3 className="font-medium text-3xl mb-3">Courses</h3>
          <div className="card-actions justify-end mr-6">
          <p className="text-2xl text-primary  mb-6"><AiFillRightCircle/></p>
          </div>
          
        </div>
        <div class="card w-80 outline outline-primary bg-base-100 rounded-none shadow-xl">
          <p className="text-3xl mb-7 mt-5 ml-20">
            <IoIosSchool />
          </p>
          <h3 className="font-medium mb-4">The Next Step</h3>
          <h3 className="font-medium text-3xl mb-3">Scholarships</h3>
          <div className="card-actions justify-end mr-6">
          <p className="text-2xl text-primary  mb-6"><AiFillRightCircle/></p>
          </div>
          
        </div>
        </div>
       
      </div>
    </div>
  );
};

export default StartBySorting;

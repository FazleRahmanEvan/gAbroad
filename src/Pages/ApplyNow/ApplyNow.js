import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { FaAngleRight } from "react-icons/fa";
import { toast } from "react-toastify";

const ApplyNow = () => {
  const {
    register,
    handleSubmit,
  } = useForm();

const onSubmit = data => {
    axios.post('https://gabroad-server.vercel.app/applicant', data)
    .then(res=> console.log(res) )
    .catch(err=> console.log(err))
    
    toast.success(`Thank You Successfully applied`);

}
  return (
    <div>
      <div className="mt-14">
        <h1 className="text-4xl text-primary font-medium text-start lg:ml-40">
          Student<span className="text-secondary"> Application Form</span>
        </h1>
        <p className="text-justify lg:ml-40 mt-5 lg:w-1/2">
          We will be in touch within 24 hours to arrange your initial
          consultation with ACADEMIC EDUCATION office (Face to Face or Virtual)
        </p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>

      <div className="justify-center">
      <div className=" border-4  border-black-100 shadow-2xl lg:w-9/12 lg:ml-40 mt-20 mb-16">
        <div>
          <h4 className="text-2xl font-medium mt-6 text-start lg:ml-36">
            Application Form
          </h4>
        </div>

        <div class="divider"></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 mt-16 lg:ml-36">
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">First Name</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              {...register("firstName", {
                required:{
                    
                    message:'First Name is Required'
                }
            })}
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Last Name</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              {...register("lastName", {
                required:{
                    
                    message:'Last Name is Required'
                }
            })}
            />
          </div>
        </div>

        <div className="form-control mt-16 mb-6 lg:ml-36">
        <label className="label">
              <span className="label-text">Address</span>
            </label>
        <input type="text" placeholder="Type here" className="input input-bordered w-10/12 " 
         {...register("address", {
          required:{
              
              message:'Address is Required'
          }
      })}/>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 mt-16 lg:ml-36">
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              {...register("email", {
                required:{
                    
                    message:'Email is Required'
                }
            })}
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Country of residence:</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              {...register("CountryResidence", {
                required:{
                    
                    message:'Country Name is Required'
                }
            })}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 mt-16 lg:ml-36">
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Institution Name:</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              {...register("institution", {
                required:{
                    
                    message:'Institution Name is Required'
                }
            })}
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Nationality: </span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              {...register("nationality", {
                required:{
                    
                    message:'Nationality is Required'
                }
            })}
            />
          </div>
        </div>


        <div className="grid grid-cols-1 lg:grid-cols-2 mt-16 mb-14 lg:ml-36">
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Course Name:</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              {...register("course", {
                required:{
                    
                    message:'Course Name is Required'
                }
            })}
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Interested intake year:  </span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              {...register("intakeYear", {
                required:{
                    
                    message:'Intake Year is Required'
                }
            })}
            />
          </div>
        </div>

        <div className="mt-20 mb-16">
        <input type="file" className="file-input file-input-bordered lg:w-9/12 w-full " />
        </div>

        <div class="flex items-center mb-4 mt-16 lg:ml-12">
    <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 ml-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label for="default-checkbox" class="ml-6 text-sm font-medium text-gray-900 dark:text-gray-300">I agree to the service processing personal data.</label>
    </div>
          
          <div className="bg-gray-100 p-6 mb-10 lg:ml-12 lg:w-11/12 mt-8 text-justify">
             <p>Lorem ipsum dolor sit amet consectetur. Convallis dolor pellentesque placerat ullamcorper ultrices tortor turpis. Lobortis sit pharetra arcu id et elit. Eleifend cras non at mauris vulputate sodales amet et. Vestibulum velit faucibus accumsan massa dolor aenean amet purus. Lectus malesuada donec in molestie erat cursus arcu urna. Amet adipiscing tortor purus faucibus cras ac mauris consectetur. Accumsan placerat risus sed et vel morbi sit suspendisse. Vitae nec leo fringilla tellus id egestas amet sapien.</p>
          </div>


        <div class="flex items-center mb-4 mt-16 lg:ml-12">
    <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 ml-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label for="default-checkbox" class="ml-6 text-sm font-medium text-gray-900 dark:text-gray-300">I confirm that the information given on this form is true.</label>
    </div>
          
          <div className="bg-gray-100 p-6 mb-10 lg:ml-12 lg:w-11/12 mt-8 text-justify">
             <p>Lorem ipsum dolor sit amet consectetur. Convallis dolor pellentesque placerat ullamcorper ultrices tortor turpis. Lobortis sit pharetra arcu id et elit. Eleifend cras non at mauris vulputate sodales amet et. Vestibulum velit faucibus accumsan massa dolor aenean amet purus. Lectus malesuada donec in molestie erat cursus arcu urna. Amet adipiscing tortor purus faucibus cras ac mauris consectetur. Accumsan placerat risus sed et vel morbi sit suspendisse. Vitae nec leo fringilla tellus id egestas amet sapien.</p>
          </div>

      </div>
      
      <div className=" flex justify-center mr-6 mt-16 mb-20">
          <button class=" bg-primary flex text-white rounded-full font-medium btn-md w-54"><span className='mt-3 ml-1'>Submit Application</span> <FaAngleRight className='mt-4 ml-1'/></button>
          </div>
      </div>

      </form>

    
      
     
    </div>
  );
};

export default ApplyNow;

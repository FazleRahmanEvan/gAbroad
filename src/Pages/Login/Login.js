import React, { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AiFillGoogleCircle } from "react-icons/ai";
import { useForm } from 'react-hook-form';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import useToken from '../../hooks/useToken';

const Login = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
        ] = useSignInWithEmailAndPassword(auth);

    const {register,formState: { errors },handleSubmit} = useForm()

    const [token] = useToken(user||gUser);

    
    let signInError;

    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

  
    useEffect(() =>{
        if(token){
            // console.log(user||gUser);
            navigate(from, { replace: true });
        }
    },[token,from, navigate])

       
    if(loading || gLoading){
        return <Loading></Loading>
    }

    if(error || gError){
        signInError= <p className='text-red-600'>{error?.message || gError?.message}</p>
    }

    const handleLogin = data => {
        signInWithEmailAndPassword(data.email, data.password);
        console.log(data); 
        // navigate('/')
    }

    return (
        <div className='grid grid-cols-1 lg:flex'>
            <div className='lg:w-6/12'>
                <img src="https://i.ibb.co/z5pX5jw/Sign-Up-Left-panel.png" alt="" />
            </div>

            <div className='lg:w-6/12 mt-28'>
            <h2 className=" text-center text-primary text-4xl font-bold">Log In Account</h2>
            <p className='text-center text-justify lg:px-20 px-7 mt-12 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente sunt aut corporis. Libero earum qui repellat iusto nostrum, quos animi aperiam quia iste ratione, aliquid, quisquam eaque. </p>

<form onSubmit={handleSubmit(handleLogin)}>


    <div className="form-control w-full max-w-xs lg:ml-52 ml-6 mt-8">
      
        <label className="label">
            <span className="label-text">Email</span>
        </label>
        <input type="email"
            placeholder="Your Email"
            className="input input-bordered w-full max-w-xs"
            {...register("email", {
                required:{
                    value: true.valueOf,
                    message:'Email is Required'
                },
                pattern:{
                    value:/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: 'Provide a Valid Email'
                }
            })}
        />
        <label className="label">
        {errors.email?.type === 'required' && <span className="label-text-alt text-red-400">
           {errors.email.message} </span>}
        {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-400">
           {errors.email.message} </span>}
            
        </label>
    </div>
    <div className="form-control w-full max-w-xs lg:ml-52 ml-6 mt-8">
        <label className="label">
            <span className="label-text">Password</span>
        </label>
        <input type="password"
            placeholder="Password"
            className="input input-bordered w-full max-w-xs"
            {...register("password", {
                required:{
                    value: true.valueOf,
                    message:'Password is Required'
                },
                minLength: { value: 8, message: " Must be 8 characters or longer"},
                // minLength: { value: 8, message: "Password must be 8 characters long" },
            })}
        />
        <label className="label">
        {errors.password?.type === 'required' && <span className="label-text-alt text-red-400">
        {errors.password.message} </span>}
        {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-400">
        {errors.password.message} </span>}
        </label>
    </div>


      {signInError}
    <input className='btn w-72 text-white mt-14 bg-primary border-none rounded-full' type="submit" value="Log In"/>
</form>

   <p className='mt-10 mb-10'><small>New To gAbroad?  <Link className='text-secondary ml-2'to= "/signup"> Please Signup</Link></small></p>
  
<div className="divider">OR</div>

<button
    onClick={() => signInWithGoogle()}
    className="btn btn-outline w-72 border-none rounded-full text-white bg-red-500 mt-10 mb-10"
    > <AiFillGoogleCircle className='text-3xl mr-4' /> Continue with Google</button>
            </div>
        </div>
    );
};

export default Login;
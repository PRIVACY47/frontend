
import {useForm } from 'react-hook-form';

import {NavigationBar} from  './Navbar.js'

import {Footer} from "./Footer"

export const Login = () => {

    const {register, watch ,formState: { errors },handleSubmit} = useForm();

    const onSubmit = (data) => {
        console.log(data)
     
    }

    console.log(watch())
    return (

        <>
            <NavigationBar />

            <div className ='flex justify-center my-5'>

          
        <div className ='w-full max-w-xs  ' >
         <form className ='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4' onSubmit={handleSubmit(onSubmit)}>

            <div className ='mb-4'>

            <label className ="block text-gray-700 text-sm font-bold mb-2" >
                EMAIL :
             </label>
            </div>
            <input   className ='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type='text'   {...register("Email",{required:"Email is required",pattern: {value:/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,20}$/ ,message:'Invalid Email'}  ,} )} aria-invalid={errors.Email ? "true" : "false"} />
            
            <br/>
            {errors.Email && errors.Email.message}
            <div className ='mb-4 mt-2'>

             <label className ="block text-gray-700 text-sm font-bold mb-2" >
                Password :
                </label>
            </div>
            <input type="password" className =' shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'   {...register("Password" ,{required:"password should be required",minLength:{value:6 , message:"password should be atleast 6 characters"}})} />
            <br />
            {errors.Password && errors.Password.message}



            <input className ='bg-blue-500 mt-2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outlines' type="submit" value='login'/>

         </form>
         </div>

         </div>
        <Footer />
        </>
    );
}
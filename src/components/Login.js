

import toast, { Toaster } from 'react-hot-toast';
import {NavigationBar} from  './Navbar.js'

import {Footer} from "./Footer"

import TextError from '../components/Dashboard/TextError';




import axios from 'axios';

import {Formik ,Form,Field,ErrorMessage} from 'formik';
import * as Yup from 'yup';

import { useNavigate } from 'react-router-dom';

const initialValues = {email :"", password:"",}

const validationSchema = Yup.object({
    email:Yup.string().email('Invalid email format').required('Required'),
    password:Yup.string().required('Required')
})

export const Login = () => {

    

    

    const navigate = useNavigate()
    const onSubmit = async(values)=>{
       
        try{
            const url = "/api/login"
            const res = await axios.post(url,values)

          
            localStorage.setItem("token", res.data.token);
            navigate('/dashboard')
        }
        catch(err){
            toast.error(err.response.data.message|| "something went wrong")
            console.log(err.response.data.message)
            
        }
    }
   

   
    return (

        <>
        <Toaster />
        <NavigationBar />
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>

            <div >

            <Form className='flex flex-col items-center mt-5' >


            <div className='flex flex-col space-y-2'>
                <label htmlFor = 'email'>Email :</label>
                <Field type='text' className="border border-solid border-gray-300 rounded" id='email' name='email' ></Field>
                <ErrorMessage  name="email" component={TextError}/>
            </div>


            <div className='flex flex-col space-y-2'>

            <label htmlFor = 'password'>Password :</label>
            <Field type='password'  className="border border-solid border-gray-300 rounded" id='password' name='password' ></Field>
            <ErrorMessage  name='password' component={TextError}/>
            </div>

       


            <button 
            className='p-2 mt-4 border rounded border-white bg-blue-700 text-white'
            type='submit'>Submit</button>
            </Form>
            </div>
   
        </Formik>
           
        <Footer />
        </>
    );
}
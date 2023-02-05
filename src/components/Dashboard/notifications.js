import {Formik ,Form,Field,ErrorMessage} from 'formik';
import TextError from './TextError';
import toast, { Toaster } from 'react-hot-toast';
import * as Yup from 'yup';

import axios from 'axios';
const initialValues = {Title :"",Description :"",  On:""}

const validationSchema = Yup.object({
    Title:Yup.string().required('Required'),
    Description:Yup.string().required('Required'),
    On:Yup.date().required('Required')
})

export  const Notifications =()=>{

    //const [Error ,setError] = useState("")
    

    
    const onSubmit = (values ,{ resetForm })=>{
        console.log(values)
        axios.post("api/notifications", 
        values,{
            headers: {
                Authorization: localStorage.getItem("token")
              }

        }
      
       
        )
         .then(function (response) {
            toast('notification saved')
            resetForm();
            console.log(response.data);
          })
          .catch(function (error) {
            console.log(error);
            toast.error(error)

          });
        
    }
  
    return(
        
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        <Form  className='flex flex-col  mt-5' >
        <Toaster/>

            <div className='flex flex-col space-y-2 m-2'>

                <label htmlFor = 'email'>Title</label>
                <Field type='text' className="border border-solid border-gray-300 rounded" id='email' name='Title' ></Field>
                <ErrorMessage  name="Title" component={TextError}/>
            </div>


            

            <div className='flex flex-col space-y-2 m-2'>

                <label htmlFor = 'email'>Description</label>
                <Field type='text' className="border border-solid border-gray-300 rounded" id='email' name='Description' ></Field>
                <ErrorMessage  name="Description" component={TextError}/>
            </div>
           

            <div className='flex flex-col space-y-2 m-2'>
                 
                <label htmlFor = 'email'>date</label>
                <Field type='date'   className="border border-solid border-gray-300 rounded" id='email' name='On' ></Field>
                <ErrorMessage  name="On" component={TextError}/>


            </div>
           
         

            <button  className="p-2 border rounded " type='submit'>Submit</button>
        </Form>
        </Formik>
    )
}


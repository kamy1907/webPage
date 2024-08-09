import { useState } from 'react';
import './App.css';
import {useNavigate} from 'react-router-dom';
import { useForm } from 'react-hook-form';
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'


const FormLogin = ( ) => {
    const [formData, setFormData] = useState({});
    const navigate = useNavigate();
    
    const inputChange = (e)=>{
        setFormData({...formData, [e.target.name]:e.target.value,})
    }
    
    
    // eslint-disable-next-line
    const [dataExist, setDataExist]= useState(false)
const onSubmit=(login)=>{
    localStorage.setItem('login', JSON.stringify(login));

        //getting login data and stored data
        const data = JSON.parse(localStorage.getItem('pee-registered'));
        const loginData = JSON.parse(localStorage.getItem('login'));
        
        //Checking if inputted login data is the same as that of the stored data 
        if (loginData.password===data.password && loginData.email===data.email){
            setDataExist(true)
            console.log('account exists')
            navigate('/Home')
        }else { 
            console.log('account does not exists')
            navigate('/account-error')
        }
}

//Form Validation using YUP
const schema = yup.object().shape({
    email: yup.string().email().required('Input email address').strict(),
    password: yup.string().required("Password must be 4 - 20 characters long").min(4).max(20),
})

const {register,handleSubmit,  formState: {errors}}= useForm({
    resolver: yupResolver(schema)
});

  return (
    <>
    <div className='login'>
        <div className='wrapper'>
            <form onSubmit={handleSubmit(onSubmit)} >
                <h1>Log in</h1>
                <div className='inputBox'>
                    <input type='email' placeholder='Email' name="email" value={formData.email} onChange={inputChange} {...register('email')}/>
                    <i className='bx bx-envelope'></i> 
                    <p >{errors.email?.message}</p>
                </div>

                <div className='inputBox'>
                    <input type='password' placeholder='Password' name="password" value={formData.password} onChange={inputChange} {...register('password')}/>
                    <i className='bx bxs-lock-alt'></i> 
                    <p >{errors.password?.message}</p>
                </div>
                
                <div className='remember-forgot'>
                    <label><input type='checkbox'/>Remember me</label>
                    <a href='http://' >Forgot Password?</a>
                </div>
                <button type='submit' className='btn'>Log in</button>
            </form>
        </div>
    </div>
    </>
  )
}

export default FormLogin
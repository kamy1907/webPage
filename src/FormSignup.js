import { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import { useForm } from 'react-hook-form';
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'


const FormSignup = ( ) => {
    const [formData, setFormData] = useState({});
    
    const inputChange = (e)=>{
        setFormData({...formData, [e.target.name]:e.target.value,})
    }
    
    const navigate = useNavigate();

    const onSubmit=(data)=>{
        localStorage.setItem('data', JSON.stringify(data));
        localStorage.setItem('pee-registered', JSON.stringify(data));
        navigate('/Home');   
    }


const schema = yup.object().shape({
    name: yup.string().required("Input Name"),
    email: yup.string().email().required('Input email address').strict().test('is-email-registered','This email is already registered', (value)=>{
        if(!value) return false;
        const registeredEmail = JSON.parse(localStorage.getItem('pee-registered'));
            return value !== registeredEmail.email;
    }),
    password: yup.string().required("Password must be 4 - 20 characters long").min(4).max(20),
    confirmPassword: yup.string().oneOf([yup.ref("password") ],"passwords don't match").required("Input Password"),
    occ: yup.string().required('Input Occupation')
})

const {register, handleSubmit, formState: {errors}}= useForm({
    resolver: yupResolver(schema)
});

  return (
    <>
   <div className='container'>
        <div className='wrapper signup'>
            <form onSubmit={handleSubmit(onSubmit)} >
                <h1>Sign Up</h1>
                <div className='inputBox'>
                    <input type='text' placeholder='Username' name='fullName'  value={formData.name} onChange={inputChange} {...register('name')} />
                    <i className='bx bxs-user'></i>
                    <p>{errors.name?.message}</p>
                </div>
                <div className='inputBox'>
                    <input type='email' placeholder='Email' name="email" value={formData.email} onChange={inputChange} {...register('email')}/>
                    <i className='bx bx-envelope'></i> 
                    <p>{errors.email?.message}</p>
                </div>
                <div className='inputBox'>
                    <input type='password' placeholder='Password' name="password" value={formData.password} onChange={inputChange} {...register('password')}/>
                    <i className='bx bxs-lock-alt'></i> 
                    <p>{errors.password?.message}</p>
                </div>
                <div className='inputBox'>
                    <input type='password' placeholder='Confirm Password' name="confirmPassword" value={formData.confirmPassword} onChange={inputChange} {...register('confirmPassword')}/>
                    <i className='bx bxs-lock-alt'></i> 
                    <p>{errors.confirmPassword?.message}</p>
                </div>
                <div className='inputBox'>
                    <input type='text' name="occ" placeholder='Occupation' value={formData.occ} onChange={inputChange} {...register('occ')}/>
                    <i className='bx bxs-user'></i> 
                    <p>{errors.occ?.message}</p>
                </div>
                
                <button type='submit' className='btn'>Sign Up</button>
            </form>
        </div>
    </div>
    </>
  )
}

export default FormSignup
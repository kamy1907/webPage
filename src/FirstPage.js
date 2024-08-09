import React from 'react'
import { Link } from 'react-router-dom'

export const FirstPage = () => {
  return (
    <>
      <h1 style={{fontSize:'300%', marginBottom:'0'}}>Get Started </h1>
      <div className='container first'>
        <div className='wrap' >
          <p>Login to get started</p>
          <Link to='/login'><button title='Login'>Login</button></Link>
            <br/>
            Don't have an account? <Link title='Sign up' style={{ color: 'black'}} to='/signup'>Sign Up for an account.</Link>
        </div>
      </div>
    </>
  )
}

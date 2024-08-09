import React from 'react'
import { Link } from 'react-router-dom'

export const AccountError = () => {
  return (
    <div>
      <h1>Account Does Not Exist</h1>
      <Link to='/signup'><button className='btntwo'>Sign Up</button></Link>
      <p>Or</p>
      <Link to='/login'><button className='btntwo'>Try Again</button></Link>
    </div>
  )
}

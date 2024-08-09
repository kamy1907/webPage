import React from 'react'
import { useNavigate } from 'react-router-dom'

const Error = () => {
    const navigate = useNavigate()

    //naviagtes back to previous page
    function goBack (){
        navigate(-1)
    }

  return (
    <div>
        <h1>404</h1>
        <p>PAGE NOT FOUND</p>
        <button title='go back' onClick={goBack}className='btntwo'>Go Back</button>
    </div>
  )
}

export default Error
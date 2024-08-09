import React from 'react';
import './App.css'
import useLogout from './useLogOut'; 

const Logout = () => {
  const logout = useLogout();

  return (
    <button className='btntwo' onClick={logout}>
      Logout
    </button>
  );
};

export default Logout;

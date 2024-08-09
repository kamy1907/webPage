import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { NavBar } from './NavBar';

const EditProfile = () => {

  // eslint-disable-next-line
  const [image, setImage]=  useState(null);
  const [imageUrl, setImageUrl]=  useState(null);
  const [bio, setBio]= useState('');
  const navigate = useNavigate()

  useEffect(()=>{
    const savedImage = localStorage.getItem('userImage');
    if (savedImage){
      setImageUrl(savedImage);
    }
  },[])

  const imageChange = (event)=>{
    const file = event.target.files[0];
    
    //using fileReader to get the image from user inout and pass it to local storage
      if(file){
        const reader = new FileReader();
        reader.onloadend = ()=>{
          setImageUrl(reader.result);
          localStorage.setItem('userImage',reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
//changing user-bio
  const bioChange = (event) =>{
    setBio(event.target.value);
    
  }

  const handleSubmit = ()=>{
    localStorage.setItem('bio', JSON.stringify(bio));
    navigate('/profile')
  }

  return (
    <>
      <NavBar/>
      <div className='fa-fs'>
            <label>Image Preview</label>
          <img src={imageUrl} style={{width: '250px', border: '1px solid black'}} title='image preview' alt='Upload'/>
        <form className='editPage' onSubmit={handleSubmit}>
          <table>
            <tr>
              <td><label>Change your profile picture:</label></td>
              <td><input type='file' accept='image/*' onChange={imageChange}/></td>
            </tr>
            <tr>
              <td><label>Write About Yourself:</label></td>
              <td><textarea style={{border: '2px solid #000',padding:'10px', borderRadius:'5px'}} value={bio} onChange={bioChange} placeholder='input text here...'/></td>
            </tr>
            <tr>
              <td></td>
              <td><button className='btntwo'  type='submit'>Save Changes</button></td>
            </tr>
          </table>
        </form>
      </div>
    </>
  )
}

export default EditProfile
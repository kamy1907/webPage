import { createContext, useEffect, useState } from 'react'
import { Link, useLocation } from "react-router-dom"

export const AppContext = createContext();

const Profile = () => {

  const location = useLocation();
  const [formData, setFormData] = useState({ name: '', age: '',occ:'' });

  useEffect(() => {
    const data = localStorage.getItem('data');
    if (data) {
      setFormData(JSON.parse(data));
    }
  }, [location]);
  
  //get added user-image and user-bio from local storage
  const userImage = localStorage.getItem('userImage');
  const userBio = JSON.parse(localStorage.getItem('bio'));

  
return (<>
        
  <div className='profile'>
    {/* <h1 style={{marginTop: '0'}}>Profile</h1> */}
    <h2>Welcome, {formData.name}</h2>
      <div className='general'>

        <div className="about">
            <u><h3>About Me</h3></u>
            <p>
              {userBio}
            </p>
        </div>

        <div className="midddle">
          <img src={userImage} style={{width: '250px', border: '2px solid pink', borderBlockStyle:'dotted', borderRadius:'100%'}} alt="pfp" ></img>
          <p ><Link className="edit" to='/Editprofile'>Edit Profile<i className='bx bxs-edit'></i></Link></p>
        </div>
    
        <div className="details">
            <u><h3>Details</h3></u>
              <label>Name:</label>
              <p>{formData.name}</p>

              <label>Email Address:</label>
              <p>{formData.email}</p>

              <label>Occupation:</label>
              <p>{formData.occ}</p>
        </div>
      </div>
    </div>
  </>
);
};

export default Profile
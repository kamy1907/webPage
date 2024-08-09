import { useNavigate } from 'react-router-dom'; 
import image from './Assets/profile.png'
const useLogout = () => {
  const navigate = useNavigate(); 

  const logout = () => {
    let prebio = 'Edit Bio';
    // Clear user data from local storage
    localStorage.removeItem('data'); 
    localStorage.removeItem('userImage'); 
    localStorage.setItem('userImage', image)
    localStorage.setItem('bio', JSON.stringify(prebio))

    // Redirect to main page
    navigate('/'); 
    
  };

  return logout;
};

export default useLogout;

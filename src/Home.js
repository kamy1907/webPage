import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'
import News from './News';
import NewsTwo from './NewsTwo';


const Home = () => {

  const location = useLocation();
  const [formData, setFormData] = useState({ name: '', age: '',occ:'' });
  
  useEffect(() => {
    const data = localStorage.getItem('data');
    if (data) {
      setFormData(JSON.parse(data));
    }
  }, [location]);

  return (
  <>
    <section >
      <h1> Welcome, {formData.name}</h1>
    </section>
    <section className='homeContent'>
      <div className='contentDiv'><News/></div>
      <div className='contentDiv'><NewsTwo/></div>
    </section>
    <h2 style={{marginTop: '200px'}}>Other Content Coming Soon...</h2>
  </>
  )
}

export default Home
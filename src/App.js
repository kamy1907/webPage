import { Route, BrowserRouter as Router, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Profile from './Profile';
import Home from './Home';
import FormSignup from './FormSignup';
import FormLogin from './FormLogin';
import Editprofile from './EditProfile';
import Error from './Error';
import { AccountError } from './AccountError';
import { NavBar } from './NavBar';
import { FirstPage } from './FirstPage';
import Settings from './Settings';


function App() {
  return (
    <div className="App">
      <Router>
        <MainLayout/>
      </Router>
    </div>
  );
}

//hiding the Nav bar from several routes
const MainLayout = ()=>{
  const location = useLocation();
  const hideNavBarRoutes = ['/signup','/Editprofile','/','/error', '/login', '/account-error'];

  return(<>
    {!hideNavBarRoutes.includes(location.pathname)&&<NavBar/>}
    <Routes>
            <Route path='/Home' element={<Home />}/>
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/Editprofile' element={<Editprofile />}/>
            <Route path='/Settings' element={<Settings />}/>
            <Route path='*' element={<Error/>}></Route>
          <Route path='/SignUp' element={<FormSignup/>}/>
          <Route path='/login' element={<FormLogin/>}/>
          <Route path='/account-error' element={<AccountError/>}/>
          <Route path='/' element={<FirstPage/>}/>
      </Routes>
  </>)
}

export default App;

import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const NavBar = () => {    
        const [showSearch, setShowSearch] = useState(false);
        const [search, setSearch] = useState('');

        const handleSearch =()=>{
            setShowSearch(!showSearch);
        }
        const handleInputChange = (event)=>{
            setSearch(event.target.value);
        }
        const handleSearchSubmit = (event)=>{
            event.preventDefault();
            console.log('Searching for:',search);
        }
  return (
    <div>
        <nav>
            <div className='nav-links'>
                <ul>
                    <li><Link to='/Home'className='links'title='Home'><i className='bx bxs-home'></i></Link></li>

                    <li><Link to='/profile' className='links'title='Profile'><i className='bx bx-user-circle'></i></Link></li>

                    <li><Link onClick={handleSearch} className='links'title='Search'><i className='bx bx-search-alt'></i></Link></li>

                    <li><Link to='/Settings' className='links'title='Go to Settings'><i className='bx bxs-cog'></i></Link></li>
                </ul>
                
                {showSearch && 
                    (<form className='searchForm' onSubmit={handleSearchSubmit}>
                        <input type='text' value={search} onChange={handleInputChange} placeholder='Search Here'/>
                        <button type='submit' className='btntwo'>Go</button>
                    </form>)
                }
            </div>
        </nav>
    </div>
  )
}

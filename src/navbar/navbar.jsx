import React from 'react'
import { Link } from 'react-router-dom';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import SmsIcon from '@mui/icons-material/Sms';
import "./navbar.css"

const Navbar = () => {
 
  return (
    <div className='navbar-main'>
        
        <div className="navbar">
        <div className="search-logo">
            <LinkedInIcon className="linklogo"  sx={{ fontSize: "7vmin",color:"darkblue" }} />
          
              <SearchIcon sx={{color:"gray"}}/>
            <input type="text" placeholder='Search'/> 
            </div>

            <div className="icon">

             <Link  to="/"> 

             <HomeIcon sx={{fontSize: "4vmin",color:"gray",borderRadius:"2px",
            border:"2px solid transparent",
            '&:hover':{
              color:"black",
              borderBottom:" 2px solid black"
            }}}/>

            </Link>



            <Link to="/connect" >

            <PeopleAltIcon sx={{fontSize: "4vmin",color:"gray",borderRadius:"2px",
            border:"2px solid transparent",
            '&:hover':{
              color:"black",
              borderBottom:" 2px solid black"
            }}}

             /></Link>


             <Link  to="/jobs">

            <BusinessCenterIcon sx={{fontSize: "4vmin",color:"gray",borderRadius:"2px",
            border:"2px solid transparent",
            '&:hover':{
              color:"black",
              borderBottom:" 2px solid black"
            }}}/>
            
            </Link>
             

             <Link to="/jobs">
            <SmsIcon sx={{fontSize: "4vmin",color:"gray",borderRadius:"2px",
            border:"2px solid transparent",
            '&:hover':{
              color:"black",
              borderBottom:" 2px solid black"
            }}}/>
            </Link>


            </div>
        </div>
    </div>
  )
}

export default Navbar

import React, { useContext, useState } from 'react'
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import ArticleIcon from '@mui/icons-material/Article';
import { AppContext } from '../context/context';
import CheckIcon from '@mui/icons-material/Check';
import "./startpost.css"


const Startpost = () => {

  const {k,Limage}=useContext(AppContext)
  

  return (
    
    <div className='startCard'>
      {/* <h1>----{k}--</h1> */}
      <div className='startpost' style={{padding:'10px 5px',display:'flex',justifyContent:'space-around'}}>
        <img 
           src={Limage}
           style={{borderRadius:'50%',marginRight:'7px'}}
        />
        <input className='getinput' 
        style={{
          width:'77%',height:'40px',borderRadius:'20px',
          padding:'0 10px',border:'1px solid grey',backgroundColor:'white'
          
        }}
        type="text" placeholder='Start a post'
        
        />
       
      </div>
      
      <div className='postthese'
       style={{display:'flex',justifyContent:'space-around',margin:'9px 0'}}
       >
       <button className='btnno'><InsertPhotoIcon sx={{color:"rgb(69, 69, 249)",marginRight:'5px'}}/><b style={{color:'rgb(138, 143, 147)'}}> Photo</b></button>
       <button className='btnno'><SmartDisplayIcon  sx={{color:"rgb(50, 165, 50)",marginRight:'5px'}}/><b style={{color:'rgb(138, 143, 147)'}}> Video</b></button>
       <button className='btnno'><EventAvailableIcon sx={{color:'rgb(237, 168, 41)',marginRight:'5px'}}/> <b style={{color:'rgb(138, 143, 147)'}}>Event</b></button>
       <button className='btnno'><ArticleIcon sx={{color:'rgb(232, 92, 22)',marginRight:'5px'}}/> <b style={{color:'rgb(138, 143, 147)'}}>Article</b></button>

      </div>
    </div>
  )
}

export default Startpost

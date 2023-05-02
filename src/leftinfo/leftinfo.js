import React from 'react'
import { useContext } from 'react';
import { AppContext } from '../context/context';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import "./leftinfo.css"
const Leftinfo = () => {

  const {k,name,setName,Limage,setImage}=useContext(AppContext)
  

  return (
    <div className='main' style={{backgroundColor:'white'}}>
        <div className='profilepic' style={{}} >
          <div className='block'></div>
          <img  src={Limage} style={{borderRadius:'50%',border:'2px solid white',margin:'0 43%',marginTop:'-26px',marginBottom:'10px'}} />
           </div>
           <br/>
          <div className='otherinfo'  style={{border:'2px solid rgb(222, 222, 222)',borderColor:' rgb(222, 222, 222) transparent  rgb(222, 222, 222) transparent',textAlign:'center',padding:'5px 0'}} >
         
          <p>UserName</p>
        
          <p style={{color:'grey',marginTop:'4px'}}>web Development</p>
             </div><br/>
             <div className='save'  style={{display:'flex',justifyContent:'space-between',flexDirection:'column'}}>
             <div  style={{textAlign:'center'}}>
              <div style={{display:'flex',justifyContent:'space-around'}}>
             <h5>Connections</h5>
             <h5 style={{color:'rgb(114, 114, 229)'}}>5</h5>
             </div>
             <br/>
             <div style={{display:'flex',justifyContent:'space-around',marginBottom:'2px'}}>
            <h5>Who's viewed your profile</h5>
            <h5 style={{color:'rgb(114, 114, 229)'}}>12</h5>
            </div>
            <br/>
            </div>
          
             </div>
      </div>
   
  )
}

export default Leftinfo

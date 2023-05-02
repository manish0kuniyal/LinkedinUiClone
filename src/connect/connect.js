import React from 'react'
import Leftinfo from '../leftinfo/leftinfo'
import ParaglidingIcon from '@mui/icons-material/Paragliding';
import Rightinfo from '../rightinfo/rightinfo';
import Findconnect from './findconnect';
import "./connect.css"
const Connect = () => {
  return (
    <div style={{margin:'0 15vw'}}>
       <div className='connectionPage' 
       style={{border:'1px solid rgb(184, 184, 184)'
       ,margin:'15px 0',backgroundColor:'white',borderRadius:'10px',
       width:'70vw'
       }}>
        {/* <Leftinfo/> */}
        <div className='toconnect'>
          <div className='topconnect'
          style={{color:'grey',
            display:'flex',margin:' 5px'
           }}
          >
            <p  style={{flex:'.9'}}
           >Invitation</p>
            <p>Manage</p>
          </div>
          <hr></hr>
          <div style={{
            display:'flex',margin:'5px 10px',alignItems:'center'
          }}>
           
          <ParaglidingIcon
           sx={{fontSize:'6vmin',borderRadius:'50%'
           ,border:'2px solid rgb(184, 184, 184)',color:'orange'}}
          />
          <div className='discription'
            style={{display:'flex',alignItems:'center' ,height:'10vh'}}
          >
            <div
             style={{margin:'0 7px'}}
            >
           <b> <p>Arnav Aggarwal</p></b>
          <p>VLSI Enthusiast | 3rd Yr</p>
          </div>
          <div></div>
          <button>Ignore</button>
          <button
          style={{color:'blue',padding:'3px 10px',
            border:'1.7px solid blue',
            borderRadius:'15px'
          }}
          >Accept</button>
          </div></div>
       </div>
       </div>
       <div>
        <Findconnect/>
       </div>
    </div>
  )
}

export default Connect

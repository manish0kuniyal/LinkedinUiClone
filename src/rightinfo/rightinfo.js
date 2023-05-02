import React from 'react'
import "./rightinfo.css"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
const Rightinfo = () => {


  return (
    <div>
      <div className='leftCard' style={{marginTop:'10px'}}>
       <h2 style={{paddingRight:'5px'}}>Linkedin News</h2>
       <br/>
       <ul>
        <li><h5>
          Meta cuttoff nothing much
        </h5>
        <h6 style={{display:'flex'}}>2days ago <li style={{marginLeft:'25px'}}>643 reads</li></h6>
        </li>
        <li><h5>
          Meta cuttoff nothing much
        </h5>
        <h6 style={{display:'flex'}}>2days ago <li style={{marginLeft:'25px'}}>643 reads</li></h6>
        </li>
        <li><h5>
          Meta cuttoff nothing much
        </h5>
        <h6 style={{display:'flex'}}>2days ago <li style={{marginLeft:'25px'}}>643 reads</li></h6>
        </li>
        <li><h5>
          Meta cuttoff nothing much
        </h5>
        <h6 style={{display:'flex'}}>2days ago <li style={{marginLeft:'25px'}}>643 reads</li></h6>
        </li>
        <div className='extra'  style={{display:'none'}}>
        <li><h5>
          Meta cuttoff nothing much
        </h5>
        <h6 style={{display:'flex'}}>2days ago <li style={{marginLeft:'25px'}}>643 reads</li></h6>
        </li>
        <li><h5>
          Meta cuttoff nothing much
        </h5>
        <h6 style={{display:'flex'}}>2days ago <li style={{marginLeft:'25px'}}>643 reads</li></h6>
        </li>
        </div>
       </ul>
       <div className='btn' >
       <button style={{width:'100px',marginLeft:'15px',display:'flex',alignItems:'center'}}
        onClick={()=>{
          const k =document.querySelector('.extra')
          k.style.display='block'

        }}
       
       >Show More <KeyboardArrowDownIcon/></button>
       </div>
      </div>
    </div>
  )
}

export default Rightinfo

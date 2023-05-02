import React, { useContext,useReducer,useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import { AppContext } from '../context/context';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import "./jobs.css"
import Jobto from './jobto';

const Jobs = () => {


  const [inputValue, setInputValue] = useState('');
  const [buttons, setButtons] = useState([]);

  function handleInputChange(event) {
    setInputValue(event.target.value);
  }

  function handleAddButtonClick() {
    if (inputValue) {
      setButtons([...buttons, inputValue]);
      setInputValue('');
    }
  }

  function removItem(index){
   const remo=[...buttons]
   remo.splice(index,1)
   setButtons(remo)
  }




  return (
    <div>
      <div className='jobssection'>

       <div className='suggestions'
        
       >
         <div className='heading'>
          <h2
          style={{
            textAlign:'center',
            margin:'10px 0'
          }}
          >Suggested job search</h2>

          <div className='mainJob'>
          <div
          style={{display:'flex',alignItems:'center',
            width:'70%',
            borderRadius:'30px',backgroundColor:'white',
            padding:'5px 15px', margin:'5px',height:'5vh'
          }}
          >
          <input type='text' value={inputValue} onChange={handleInputChange} placeholder='create a job'
             style={{
              width:"47vmin",
              borderRadius:'10px',padding:'0 10px'
              
            }}
           
          /> <AddCircleOutlineIcon style={{
            fontSize:'20px',color:'blue',marginLeft:'10px'
          }}

           
           onClick={handleAddButtonClick}/>
</div>

<div  className='jobbtn'
   style={{
    margin:"5px",bordeRadius:'5pxw'
   }}
>  
      {buttons.map((buttonText, index) => (
        <button key={index}>{buttonText}<HighlightOffIcon
        style={{color:'grey',marginLeft:'5px'}}
        onClick={()=>removItem(index)}/> </button>
      ))}
         </div>
         </div>
 
         </div>

         <Jobto/>

         </div>

       </div>


      </div>
    
  )
}

export default Jobs
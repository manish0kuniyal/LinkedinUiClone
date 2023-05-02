import React, { useState } from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddIcon from '@mui/icons-material/Add';
// import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import MoodIcon from '@mui/icons-material/Mood';
import RecommendIcon from '@mui/icons-material/Recommend';
import CommentIcon from '@mui/icons-material/Comment';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import SendIcon from '@mui/icons-material/Send'; 
import "./posts.css"
const Posts = () => {
  const[like,setlike]=useState('grey')
  const[comment,setcomment]=useState('grey')
  const[repost,setrepost]=useState('grey')
  const[share,setshare]=useState('grey')

  return (
    <div>
      <div className='postCard'>
        <div className='postby'
          style={{display:'flex',padding:'15px',justifyContent:'space-around'}}
        >
         <AccountCircleIcon
          sx={{fontSize:'7vmin'}}
         />
         <div>
          <h4>Linkdin User</h4>
          <p style={{fontSize:'12px',color:'grey'}}
          >SDE Walmart | SMVDU | Graphic era </p>
          </div>
          <div className='rightPost'
           style={{dispaly:'flex',flexDirection:'row'}}
          >
          <AddIcon sx={{color:'blue'}}/>
          <b><p  style={{ fontSize:'13px' ,color:'blue'}} 
          >Follow</p></b>
          </div>
        </div>
        
        <div className='post'
          style={{fontSize:'15px'}}
        >
          <p> Hello Connections here is an appreciation to all the </p>
         <div className='showem' style={{display:'none'}}> 
           people of React community
          </div>
          <button
            onClick={()=>{
              const l= document.querySelector('.showem')
           
              l.style.display='block'
            }}
          >...read more</button>


          <div className='postimg'
          
          >

            <img 
            style={{width:'100%',height:'80%'
          }}
            src='https://m.media-amazon.com/images/G/31/social_share/amazon_logo._CB633266945_.png'/>
          </div>


        </div>
          
          <div className='reactions'
           style={
            {marginLeft:'5px',display:'flex',justifyContent:'space-around',fontWeight:'bold',fontSize:'10px',marginTop:'5px'}
           }

          >
           <div style={{marginBottom:'10px',display:'flex',alignItems:'center'}}>        
            <MoodIcon sx={{fontSize:'3.3vmin',color:'blue'}}/>
           <RecommendIcon sx={{color:'green',fontSize:'3.3vmin',marginLeft:'-7px'}}/>
           <p 
           >Sarthak Kathpalia and 2,000 others</p>
           </div>

           <div className='othereact'
            style={{display:'flex'}}
           >
             <p>30 comments</p>
             <p
            style={{marginLeft:'5px'}}>12reposts</p>
           </div>

          </div>
      
          <div className='react'
           style={{display:'flex',justifyContent:'space-around',marginBottom:'9px'}}
          >
            
          <button onClick={()=>{setlike('blue')}}
          ><RecommendIcon sx={{color:`${like}`}}/> <b>like</b></button>
           <button onClick={()=>{setcomment('aliceblue')}}
           ><CommentIcon sx={{color:`${comment}`}}/> <b>Comment</b></button>
            <button
            ><AutorenewIcon color={repost}/> <b>Repost</b></button>
            <button 
            ><SendIcon color={share}/></button>

          </div>
        
      </div>
    </div>
  )
}

export default Posts

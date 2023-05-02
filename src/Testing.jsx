import React, { useContext, useReducer } from 'react'
import { AppContext } from './context/context'
import { Button } from '@mui/material'


const initialState={
  user1:{ id:1,
  name:"n1"},
  user2:{id:3,
  name:"O2"}
}

const reducer=(state,action)=>{
  switch(action.type){
    case"change1":
      return{
        ...state,
          user1:{
            name:"O2"
          }
      }
    case"change2":
      return{
        ...state,
          user2:{
            name:"p2"
          }
      }}}

const Comp2 = () => {

  const {k,name,setName,Limage,setImage}=useContext(AppContext)
  const s=setName("llll")

 


  const [state,dispatch]=useReducer(reducer,initialState)

   
  const handlenamea=(item1)=>{
    dispatch({type:"change1"})
  }
  
  const handlenameb=()=>{
    dispatch({type:"change2"})
  }


  return (

    <div>
       Testing data
      <h2>-{name}-{k}----</h2>
      <p>---------------</p>
      <h2>{state.user1.name}</h2>
      <Button onClick={handlenamea}>change1</Button>
      <h2>{state.user2.name}</h2>
      
      <Button onClick={handlenameb}>change2</Button>
      <p>---------------</p>
       <img src={Limage}/>
     

    </div>
  )



}

export default Comp2

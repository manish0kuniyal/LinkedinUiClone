import { AppBar } from "@mui/material";
import axios from "axios";
import { useState,useEffect,useReducer,createContext } from "react";

export const AppContext=createContext(null)





export const LinkdinContext =(props)=>{


let k="context-here"
const[name,setName]=useState("ppopopo")
const[Limage,setImage]=useState("")
const jobs=[]



const UserLog=()=>{
    axios.get("https://randomuser.me/api/?results=50")
    .then(
        data=>setImage(data.data.results[5].picture.thumbnail))
    .catch(error=>console.log(error))
}



const postimg=()=>{

}

postimg()
UserLog()

 return(
    <AppContext.Provider value={{k,name,
        setName,UserLog,Limage,setImage }}>
        {props.children}
    </AppContext.Provider>
 )

}


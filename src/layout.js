import React, { useContext } from 'react'
import "./app.css"
import { BrowserRouter as Router ,Route,Routes } from 'react-router-dom'
import Navbar from './navbar/navbar'
import Comp2 from './Testing'
import Leftinfo from './leftinfo/leftinfo'
import Posts from './posts/posts'
import Rightinfo from './rightinfo/rightinfo'
import Startpost from './startpost/startpost'
import { LinkdinContext } from './context/context'
import Connect from './connect/connect'
import Jobs from './jobs/jobs'
import Newpost from './startpost/newpost'
const Layout = () => {

  return (

    <div >
    <LinkdinContext >
    {/* <Comp2/> */}
    <br/>
      <div className='mainContent' >
       <Leftinfo  />
       <div className='post' >
        <Startpost/>
        
        <Posts/>
        
        <Posts/>
       <Posts/>
       <Posts/>
       </div>
       <Rightinfo/>
      </div>
    </LinkdinContext>
    </div>


  )
}

export default Layout

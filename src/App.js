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
import Layout from './layout'
const App = () => {

  return (
    <div>
      <LinkdinContext>
      <Router>
      
      <Navbar/>
      <Routes>
        <Route path='/' element={<Layout/>}/>
        <Route path='connect'  element={<Connect/>}/>
        <Route path='jobs' element={<Jobs/>}/>
        <Route path='message' element={<Jobs/>}/>
      </Routes>
     </Router>
     </LinkdinContext>
    
   
     
    </div>
  )
}

export default App

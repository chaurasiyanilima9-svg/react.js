import React from 'react'
import { Route, Routes } from 'react-router-dom'
import NavbarCom from '../Components/NavbarCom'

const Routing = () => {
  return (
    <Routes>
      <Route path='/' element={<NavbarCom/>}/>
    </Routes>
  )
}

export default Routing

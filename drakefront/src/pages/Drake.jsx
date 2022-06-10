import React from 'react'
import 'react-bootstrap/'
import { Fragment } from 'react'
import AuthPage from '../component/header/authPage'
import SignUp from '../component/auth/SignUp'
import Dashboard from '../component/dashboard/Dashboard'

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {Link} from 'react-router-dom'

function Drake() {
  return (
    
    <div className="">
      <div>
      <Router>
        <Routes>
          <Route element={<AuthPage />} path="/" />
          <Route element={<SignUp />} path="/signup" />
          <Route element={<Dashboard />} path="/dashboard" />

          {/* <Home/> */}
        </Routes>
      </Router>
      {/* <Footer /> */}
    </div>
    </div>
  )
}

export default Drake
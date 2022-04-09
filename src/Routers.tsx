import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import DashBoard from './components/dashboard/dashboard'

const Routers: React.VFC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DashBoard />} />
      </Routes>
    </Router>
  )
}

export default Routers

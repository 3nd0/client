import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const Routers: React.VFC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<></>} />
      </Routes>
    </Router>
  )
}

export default Routers

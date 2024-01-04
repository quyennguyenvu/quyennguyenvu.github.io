import React from 'react'

import { HashRouter, Route, Routes, Navigate } from 'react-router-dom'

import Home from './pages/home'
import Resume from './pages/resume'

function Router() {
  return (
    <HashRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/resume" element={<Resume />} />
        {/* Not Found */}
        <Route element={() => <Navigate to="/" />} />
      </Routes>
    </HashRouter>
  )
}

export default Router

import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home'
import Explore from './pages/Explore';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore/" element={<Explore />} />

      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
import React from 'react'
import HomePage from './pages/HomePage'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from './components/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />

        {/* Not Found Route */}
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
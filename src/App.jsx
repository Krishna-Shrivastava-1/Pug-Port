import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from './Pages/Homepage/Homepage'
import loadvido from './assets/lodfer.gif'
const App = () => {
  const [loading, setloading] = useState(true)
  useEffect(() => {
    const timer = setTimeout(() => {
      setloading(false)
    }, 1500);
    return () => clearTimeout(timer)
  }, [])

  return (
    <div>
      {
        loading ? (
          <div className='w-full h-screen flex items-center justify-center bg-black flex-col' >
            <img className='w-38 flex items-center justify-center' src={loadvido} alt="" />
            <h3 className='text-white text-center w-full flex items-center justify-center' >Loading...</h3>
          </div>
        ) :
          (
            <Routes>
              <Route path='/' element={<Homepage />} />
            </Routes>
          )
      }

    </div>
  )
}

export default App

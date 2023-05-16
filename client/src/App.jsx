import { useState } from 'react'

import './App.css'
import Admin from './Admin'
import { Route, Routes } from 'react-router-dom'
import AddCoin from './AddCoin'
import UpdateCoin from './UpdateCoin'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="App">
      <Routes>
  <Route path='/' element={<Admin/>}/>
  <Route path='/addcoin' element={<AddCoin/>}/>
  <Route path='/updatecoin' element={<UpdateCoin/>}/>
 </Routes>
    </div>
    </>

  
  )
}

export default App

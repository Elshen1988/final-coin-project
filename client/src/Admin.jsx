import { useState } from 'react'

import './App.css'
import { Link } from 'react-router-dom'
import AddCoin from './AddCoin'

function Admin() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1>Admin panel</h1>
     <div className='d-flex justify-content-between'>
     <form>
      <label>
      <input type='search' name='' id=''></input>
      </label>
      <input type='submit' value="search" className='btn'>
      </input>
     </form>
     <Link to="addcoin">
        <button  className='add btn'>Add new coin</button>
     </Link>
     
     </div>
     <ul>
      <li className='d-flex'>
        <img src='data:image/jpeg;base64,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' alt=''/>
        <div>
          <h4>xgdfg dfgdfg</h4>
          <p>sdgsdfgsdfgsdfbv sdfgsdfgsdf sdfgsdfgsdf sdfgsdfgfd</p>
        </div>
        <Link to="/updatecoin"><button className='btn edit btn-action'>Edit</button></Link>
        <button  className='btn delete btn-action'>Delete</button>
      </li>
     </ul>
    </>
  )
}

export default Admin

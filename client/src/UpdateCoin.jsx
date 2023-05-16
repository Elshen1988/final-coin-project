import React from 'react'

const UpdateCoin = () => {
  return (
    <div>
      <h1>Update Coin</h1>
      <form>
        <label>
          <span>coin name</span>
          <input type='text'/>
        </label>
       
        <label>
        <span>quality</span>
          <input type='text'/>
        </label>
        <label>
        <span>Full Description</span>
          <textarea name=''id=''cols="10"rows="4"></textarea>
        </label>
        
        <label>
        <span>Denomination</span>
          <input type='text'/>
        </label> 
        <label>
        <span>Year</span>
          <input type='text'/>
        </label>
        <label>
        <span>Price</span>
          <input type='text'/>
        </label> 
       
      
        <label>
        <span>Weight</span>
          <input type='text'/>
        </label>
        
        <label>
        <span>contry</span>
          <input type='text'/>
        </label>
      
        <label>
        <span>Coin Face image</span>
          <input type='file'/>
        </label>
        <label>
        <span>composition</span>
          <input type='text'/>
        </label>
        <label>
        <span>Short Description</span>
          <textarea name=''id=''cols="10"rows="4"></textarea>
        </label>
        <label>
        <span>Category</span>
          <select>
            <option>Commemorative</option>
            <option>Exclusive</option>
            <option>Bullion</option>
          </select>
        </label>
        <label>
        <span>Coin Back image</span>
          <input type='file'/>
        </label>
       
      
        <input type='submit' value="Search" className='btn'/>
        
      </form>
      </div>
  )
}

export default UpdateCoin

import React from 'react'

const AddCoin = () => {
  return (
    <div>
      <h1>Add Coin Panel</h1>
      <form action='http://localhost:8080/add' method='post' enctype="multipart/form-data">
        <label>
          <span>coin name</span>
          <input type='text' name='coin_name'/>
        </label>
       
        <label>
        <span>quality</span>
          <input type='text' name='quality'/>
        </label>
        <label>
        <span>Full Description</span>
          <textarea name='fulldesc'id='' cols="10"rows="4"></textarea>
        </label>
        
        <label>
        <span>Denomination</span>
          <input type='text' name='denomination'/>
        </label> 
        <label>
        <span>Year</span>
          <input type='text' name='year'/>
        </label>
        <label>
        <span>Price</span>
          <input type='text' name='price'/>
        </label> 
       
      
        <label>
        <span>Weight</span>
          <input type='text' name='weght'/>
        </label>
        
        <label>
        <span>contry</span>
          <input type='text' name='country'/>
        </label>
      
        <label>
        <span>Coin Face image</span>
          <input type='file' name='coinface'/>
        </label>
        <label>
        <span>composition</span>
          <input type='text' name='conposition'/>
        </label>
        <label>
        <span>Short Description</span>
          <textarea name='shortdesc'id=''cols="10"rows="4"></textarea>
        </label>
        <label>
        <span>Category</span>
          <select name='category'>
            <option>Commemorative</option>
            <option>Exclusive</option>
            <option>Bullion</option>
          </select>
        </label>
        <label>
        <span>Coin Back image</span>
          <input type='file' name='coin_back'/>
        </label>
       
      
        <input type='submit' value="Search" className='btn'/>
        
      </form>
      </div>
  )
}

export default AddCoin

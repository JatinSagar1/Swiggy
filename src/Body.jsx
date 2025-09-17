import React from 'react'
import './css/Body.css'
import Rest from './Rest'

const Body = () => {
  return (
    <>
    <div className='body'>
        <h1 className='heading'>Welcome to Swiggy</h1>
        <br />

        <input type="text" className='filter' placeholder='Search Restaurants'/>
        <button className='filter-btn'>Search</button>

        <div className='container'>
          <Rest/>
        </div>
    </div>
    </>
  )
}

export default Body
import React from 'react'
import './Body.css'
import Rest from './Rest'

const Body = () => {
  return (
    <>
    <div className='body'>
        <h1 className='heading'>Welcome to Swiggy</h1>

        <div className='container'>
          <Rest/>
        </div>
    </div>
    </>
  )
}

export default Body
import React from 'react'
import Navbar from './Navbar'
import Body from './Body'
import Parent from './Parent'

const App = () => {
  return (
    <>
    <Parent>

      <Navbar/>
      <Body/>

    </Parent>
    </>
  )
}

export default App
import React from 'react'
import './css/Body.css'
import Rest from './Rest'
import { Context } from './Context';

const Body = () => {
  const { searchText, setSearchText, setFiltered, restData } = React.useContext(Context);
  return (
    <>
    <div className='body'>
        <h1 className='heading'>Welcome to Swiggy</h1>
        <br />

        <input type="text" className='filter' placeholder='Search Restaurants'
        onChange={(e)=>setSearchText(e.target.value)}
        onKeyDown={(e)=>{
            if(e.key == "Enter"){
                const data = restData.filter((e)=>e?.info?.name?.toLowerCase()?.includes(searchText.toLowerCase()));
                setFiltered(data);
            }
        }}
        />
        <button className='filter-btn' onClick={()=>{
          const data = restData.filter((e)=>e?.info?.name?.toLowerCase()?.includes(searchText.toLowerCase()));
          setFiltered(data);
        }}>Search</button>

        <div className='container'>
          <Rest/>
        </div>
    </div>
    </>
  )
}

export default Body
import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react'
import RestMenuCard from './RestMenuCard'
import { foodImgs } from './urls'

import "./css/RestMenu.css"

const RestMenu = () => {
  const {id} = useParams();
  const [menu, setMenu] = useState([null]);
  const [infoCard, setInfoCard] = useState(null);
  // console.log(id)

  async function getData() {
    try{
      
      const rawData = await fetch(`https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.63270&lng=77.21980&restaurantId=${id}`);
      const data = await rawData.json();
      const cards = data?.data?.cards;
      // console.log("cards", cards);

      const infocard = cards.find((e)=>{
        return e?.card?.card?.info;
      })
      const maininfo = infocard?.card?.card?.info;
      console.log("maininfo", maininfo);
      setInfoCard(maininfo);
      
      const groupcard = cards.find((e)=>{
        return e?.groupedCard?.cardGroupMap?.REGULAR?.cards;
      })
      // console.log("groupcard", groupcard)

      const restmenu = groupcard?.groupedCard?.cardGroupMap?.REGULAR?.cards;
      // console.log("restmenu", restmenu);

      const items = restmenu.filter((e)=>{
        return e?.card?.card?.itemCards;
      })

      setMenu(items);
      // console.log("items", items);
      
    }
    catch(err){
      console.log(err);
    }
  }
  
  useEffect(() => {
    getData();
  }, [id]);

  const {
    cloudinaryImageId,
    name,
    avgRatingString,
    areaName,
    city
  } = infoCard || {};

  return (
    <>
    <div className='info-card'>
      <img src={`${foodImgs}${cloudinaryImageId}`} alt="" />
      <h2>{name}</h2>
      <h4>{avgRatingString}⭐</h4>
      <h4>{areaName}</h4>
      <h4>{city}</h4>
    </div>

    <div className='menu-grid'>
    {menu.map((e)=>
      e?.card?.card?.itemCards.map((i)=>(
        <RestMenuCard key={i?.card?.info?.id} i={i}/>
      )
      
    )
  )}
    </div>
    </>
  )
}

export default RestMenu
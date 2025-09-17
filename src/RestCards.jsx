import React from 'react'
import './css/RestCards.css'

const RestCards = ({restData}) => {

    // console.log(restData);

    const {
        name,
        avgRating,
        areaName,
        cloudinaryImageId
    } = restData?.info || {};

    const {deliveryTime} = restData?.info?.sla ||{};

    // console.log(name);
    // console.log(avgRating);
    // console.log(areaName);
    // console.log(deliveryTime);

  return (
    <>
    <div className='cards-container'>

    <div className='cards'>
        <img src={`${"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"}${cloudinaryImageId}`} alt="" />
        <h2>{name}</h2>
        <h4>{avgRating}⭐</h4>
        <h4>{areaName}</h4>
        <h4>{deliveryTime}- {deliveryTime+5} mins</h4>
    </div>

    </div>
    </>
  )
}

export default RestCards
import React from 'react'
import { foodImgs } from './urls';

import "./css/RestMenuCard.css"

const RestMenuCard = ({i}) => {

  // console.log(i)

  const {
    id,
    name,
    price,
    defaultPrice,
    imageId,
    description
  } = i?.card?.info || {};

  const {
    rating
  } =i?.card?.info?.ratings?.aggregatedRating || {};

  return (
    <>
    <div key={id} className='menu-card'>
      <div className='menu-card-info'>
        <div className='menu-card-name'>{name}</div>
        <div className='menu-card-price'>₹{price ? price/100 : defaultPrice /100}</div>
        <div className='menu-card-rating'>{rating}</div>
        <div className='menu-card-description'>{description}</div>
      </div>
      <img src={`${foodImgs}${imageId}`} alt={name} className='menu-card-img' />
    </div>
    </>
  )
}

export default RestMenuCard
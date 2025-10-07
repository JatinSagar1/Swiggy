import React from 'react'
import { foodImgs } from './urls'

import "./css/RestMenuCard.css"

const Typesinmenu = ({types}) => {

    const title = types?.title

    // console.log(title)
    console.log(types)
  return (
    <>
    <div  className='types-names'>
        <h2> {`${title} (${types?.itemCards?.length})`} </h2>
        <p>⬇️</p>
        </div >

        <div className='typesmenu' >

        {
            types?.itemCards?.map((e)=>{
               const rating = e?.card?.info?.ratings?.aggregatedRating?.rating
                return ( <div className='menu-card' key={e?.card?.info?.id}>

                    <div className='menu-card-info' key={e?.card?.info?.id}>
                     <p className='menu-card-name' >{e?.card?.info?.name}</p>
                     <p className='menu-card-price' >₹{e?.card?.info?.price? e?.card?.info?.price/100 : e?.card?.info?.defaultPrice/100}</p>
                     <p className='menu-card-rating' > {rating} </p>
                     <p className='menu-card-description'> {e?.card?.info?.description}</p>
                     </div>
                     <img className='menu-card-img' src={`${foodImgs}${e?.card?.info?.imageId}`} alt={e?.card?.info?.name} />
                    
                </div>
                )
            }
        )
    }

    </div>
    </>
  )
}

export default Typesinmenu
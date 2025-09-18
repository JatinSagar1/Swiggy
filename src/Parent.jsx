import React, { useEffect } from 'react'
import { useState } from 'react';
import { Context } from './Context';

const Parent = ({children}) => {

    const [restData, setRestData] = useState([]);
    const [filtered, setFiltered] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [error, setError] = useState(null);

    async function getData() {
        try {
            const data = await fetch("https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=28.63270&lng=77.21980&carousel=true&third_party_vendor=1");
            // const data = await fetch("https://www.swiggy.com/mapi/restaurants/list/v5?lat=28.63270&lng=77.21980&collection=83633&tags=layout_CCS_NorthIndian&sortBy=&filters=&type=rcv2&offset=0&carousel=true&third_party_vendor=1");
            if (!data.ok) {
                throw new Error(`HTTP error! status: ${data.status}`);
            }
            const json = await data.json();
            const cards = json?.data?.cards;
            if (!Array.isArray(cards)) {
                setRestData([]);
                setError('No cards array found in response.');
                return;
            }
            const restcard = cards.find((e) => e?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            const rest = restcard?.card?.card?.gridElements?.infoWithStyle?.restaurants;
            console.log(rest);

            if (!Array.isArray(rest)) {
                setRestData([]);
                setError('No restaurants found in response.');
                return;
            }
            setRestData(rest);
            setError(null);
            setFiltered(rest);
        } catch (error) {
            setError(error.message);
            setRestData([]);
        }
    }

  useEffect(()=>{
    getData();
  },[])

  return (
    <>
    <Context.Provider  value={{restData, setRestData, filtered, setFiltered, error, setError, searchText, setSearchText}}>
        {children}
    </Context.Provider>
    </>
  )
}

export default Parent
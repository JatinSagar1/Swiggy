import React, { useEffect, useState } from 'react';
import RestCards from './RestCards';


const Rest = () => {

    const [restData, setRestData] = useState([]);
    const [error, setError] = useState(null);

    async function getData() {
        try {
            const data = await fetch("https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=28.63270&lng=77.21980&carousel=true&third_party_vendor=1");
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
            if (!Array.isArray(rest)) {
                setRestData([]);
                setError('No restaurants found in response.');
                return;
            }
            setRestData(rest);
            setError(null);
        } catch (error) {
            setError(error.message);
            setRestData([]);
        }
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <>
            <div className='container'>
                {error && (
                    <div style={{ color: 'red', margin: '1rem' }}>Error: {error}</div>
                )}
                <div className='cards-container'>
                    {Array.isArray(restData) && restData.length > 0 ? (
                        restData.map((restData) => (
                            <RestCards restData={restData} key={restData?.info?.id} />
                        ))
                    ) : !error ? (
                        <div>No restaurants found.</div>
                    ) : null}
                </div>
            </div>
        </>
    );
}

export default Rest
import React from 'react';
import RestCards from './RestCards';
import { Context } from './Context';



const Rest = () => {

    const { restData, filtered, error} = React.useContext(Context);
    return (
        <>
            <div className='container'>
                {error && (
                    <div style={{ color: 'red', margin: '1rem' }}>Error: {error}</div>
                )}
                <div className='cards-container'>
                    {Array.isArray(restData) && restData.length > 0 ? (
                        filtered.map((restData) => (
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
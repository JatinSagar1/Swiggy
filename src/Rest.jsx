import React from 'react';
import RestCards from './RestCards';
import { Context } from './Context';
import { Link } from 'react-router-dom';



const Rest = () => {

    const { restData, filtered, error} = React.useContext(Context);
    return (
        <>
            <div className='container'>
                {error && (
                    <div style={{ color: 'red', margin: '1rem' }}>Error: {error} <br /> Please Download CORS Extension and start to Use</div>
                )}
                <div className='cards-container'>
                    {Array.isArray(restData) && restData.length > 0 ? (
                        filtered.map((e) => {
                            return(
                                <Link key={e?.info?.id} to={`rest/${e?.info?.id}`} >
                                <RestCards restData={e} key={e?.info?.id} />
                                </Link>
                            )
                            
})
                    ) : !error ? (
                        <div>No restaurants found.</div>
                    ) : null}
                </div>
            </div>
        </>
    );
}

export default Rest
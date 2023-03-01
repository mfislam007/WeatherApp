import React, { useState } from 'react';

const Forecast = () => {

    let [responseObj, setResponseObj] = useState({});

    function getForecast() {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '0cf73d8730msh29f1b6b0287ea26p1e7dd5jsn3748fa1410d2',
                'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
            }
        };
        
        fetch('https://open-weather13.p.rapidapi.com/city/landon', options)
            .then(responseObj => responseObj.json())
            .then(responseObj => {setResponseObj(responseObj)})
    };
    
    return (
        <div>
            <h2>Find Current Weather Conditions</h2>
            <div>
                {JSON.stringify(responseObj)}
            </div>
            <button onClick={getForecast}>
                Get Forecast
            </button>
        </div>
    );
}

export default Forecast;
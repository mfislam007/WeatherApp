import React, { useState } from 'react';
import Conditions from '../Conditions/Conditions';
import classes from './Forecast.module.css';


const Forecast = () => {

    let [responseObj, setResponseObj] = useState({});

    let [city, setCity] = useState('');
    let [unit, setUnit] = useState('imperial');

    let [error, setError] = useState(false);
    let [loading, setLoading] = useState(false);

    const uriEncodedCity = encodeURIComponent(city);

    function getForecast(e) {
        e.preventDefault();

    if (city.length === 0) {
        return setError(true);
    }

    setError(false);
    setResponseObj({});
    setLoading(true);

    let uriEncodedCity = encodeURIComponent(city);

        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
                'X-RapidAPI-Host': 'openweather43.p.rapidapi.com'
            }
        };
        
        fetch(`https://openweather43.p.rapidapi.com/weather?units=${unit}&q=${uriEncodedCity}`, options)
            .then(responseObj => responseObj.json())
            .then(responseObj => {
                if (responseObj.cod !==200){
                    throw new Error()
                }
                
                setResponseObj(responseObj);
                setLoading (false);
            })
            .catch(err => {
                setError(true);
                setLoading(false);
                console.log(err.message);
            });
    };
    
    return (
        <div>
            <h2>Find Current Weather Conditions</h2>
            
            <form onSubmit={getForecast}>
                <input
                    type = "Text"
                    placeholder="Enter City"
                    maxLength="50"
                    className={classes.textInput}
                    value = {city}
                    onChange = {(e)=>
                    setCity(e.target.value)
                    }
                />
                <lebel className ={classes.Radio}>
                    <input
                        type = "radio"
                        name = "units"
                        checked = {unit === "imperial"}
                        value = "imperial"
                        onChange={(e)=>
                        setUnit(e.target.value)
                        }
                    />
                    Fahrenheit
                </lebel>
                <lebel className={classes.Radio}>
                    <input
                    type = "radio"
                    name = "units"
                    checked = {unit === "matric"}
                    value = "matric"
                    onChange={(e)=>
                    setUnit(e.target.value)
                    }
                    />
                    Celcious
                </lebel>
                <button className = {classes.Button} type = "submit"> Get Forcast</button>
            </form>

            <Conditions
                responseObj = {responseObj}
                error = {error}
                loading = {loading}
                />

        </div>
    );
}

export default Forecast;
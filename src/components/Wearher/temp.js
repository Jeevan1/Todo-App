import React, { useEffect, useState } from 'react';
import Weatheritem from './weatheritem';
import "./style.css";

const Temp = () => {
    const [searchValue, setSearchValue] = useState("ktm");
    const [tempInfo, setTempInfo] = useState({});
    const getWeatherInfo = async() => {
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=fb6430722456aeaa102c7f241b03ae27`;

            let res = await fetch(url);
            let data = await res.json();
            const {temp, humidity, pressure} = data.main;
            const {main:weathermood} = data.weather[0];
            const {name} = data;
            const {speed} = data.wind;
            const {country, sunset} = data.sys;
            const myNewWeatherInfo = {
                temp,
                humidity,
                pressure,
                weathermood,
                name,
                speed,
                country,
                sunset,
            };
            setTempInfo(myNewWeatherInfo);

        }catch(error){
            console.log(error);
        }
    };

    useEffect(()=>{
        getWeatherInfo();
    },[]);
    return (
        <>
            <div className="wrap">
                <div className="search">
                    <input type="search" placeholder='search..' autoFocus id='search' value={searchValue} onChange={(e) => setSearchValue(e.target.value)} className='searchTerm' />
                    <button className='searchButton' type='button' onClick={getWeatherInfo}></button>
                </div>
            </div>
            {/* //article */}
            <Weatheritem tempInfo={tempInfo} />
            
        </>
    )
}

export default Temp;
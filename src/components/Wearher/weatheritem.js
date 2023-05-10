import React from 'react';

const Weatheritem = ({tempInfo}) => {
    const {temp,
        humidity,
        pressure,
        weathermood,
        name,
        speed,
        country,
        sunset,} = tempInfo;
  return (
    <>
        <article className='widget'>
                <div className="weatherIcon">
                    <i className='wi wi-day-sunny'></i>
                </div>
                <div className="weatherInfo">
                    <div className="temperature">
                        <span>{temp}&deg;</span>
                        <div className="description">
                            <div className="weatherCondition">sunny</div>
                            <div className="place">KTM,Nepal</div>

                        </div>
                    </div>
                </div>
                <div className="date">{new Date().toLocaleString()}</div>
                <div className="extra-temp">
                    <div className="temp-info-minmax">
                        <div className="two-sided-section">
                            <p><i className="wi wi-sunset"></i></p>
                            <p className="extra-info-leftside">
                                07:43 PM <br />
                                Sunset
                            </p>
                        </div>
                        <div className="two-sided-section">
                            <p><i className="wi wi-sunset"></i></p>
                            <p className="extra-info-leftside">
                                07:43 PM <br />
                                Sunset
                            </p>
                        </div>
                        
                    </div>
                    <div className="weather-extra-info">
                    <div className="two-sided-section">
                            <p><i className="wi wi-humidity"></i></p>
                            <p className="extra-info-leftside">
                                07:43 PM <br />
                                Humidity
                            </p>
                        </div>
                        <div className="two-sided-section">
                            <p><i className="wi wi-humidity"></i></p>
                            <p className="extra-info-leftside">
                                07:43 PM <br />
                                Humidity
                            </p>
                        </div>
                    </div>

                </div>
            </article>
    </>
  )
}

export default Weatheritem;
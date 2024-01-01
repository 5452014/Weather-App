import './Weather.css'
import React, { useState } from 'react'
import clearimg from './Assets/clear.png'
import cloudimg from './Assets/cloud.png'
import dizzleimg from './Assets/drizzle.png'
import humidityimg from './Assets/humidity.png'
import rainimg from './Assets/rain.png'
import searchimg from './Assets/search.png'
import snowimg from './Assets/snow.png'
import windimg from './Assets/wind.png'
const Weather = () => {
  let API_KEY ="d7b0334bd9b4e16cc0c725fd2ce4f2b9";
  let API_URL ="https://api.openweathermap.org/data/2.5/weather?q"
  const [wicon,setWicon]=useState(clearimg);
  const search=async()=>{
   const element=document.getElementsByClassName("cityInput");
   if(!element[0].value===""){
    return 0;
   }
    let url = `${API_URL}=${element[0].value}&units=metric&appid=${API_KEY}`;
    let response=await fetch(url);
    let data= await response.json()
    const humidity=document.getElementsByClassName("humidity-percent");
    const wind=document.getElementsByClassName('wind-rate');
    const temprature=document.getElementsByClassName('weather-temp');
    const location=document.getElementsByClassName('weather-location');
    humidity[0].innerHTML=Math.floor(data.main.humidity)+" % ";
    wind[0].innerHTML=Math.floor(data.wind.speed)+" km/hr ";
    temprature[0].innerHTML = Math.floor(data.main.temp) +" ° C";
    location[0].innerHTML=data.name;

    if (data.weather[0].icon==="01d" || data.weather[0].icon==="01n") {
      setWicon(clearimg)
    } else if (data.weather[0].icon === "02d" || data.weather[0].icon === "02n") {
      setWicon(cloudimg)
    } else if (data.weather[0].icon === "03d" || data.weather[0].icon === "03n"){
      setWicon(dizzleimg)
    } else if (data.weather[0].icon === "04d" || data.weather[0].icon === "04n") {
      setWicon(dizzleimg)
    } else if (data.weather[0].icon === "09d" || data.weather[0].icon === "09n") {
      setWicon(rainimg)
    } else if (data.weather[0].icon === "10d" || data.weather[0].icon === "10n") {
      setWicon(dizzleimg)
    } else if (data.weather[0].icon === "13d" || data.weather[0].icon === "13n") {
      setWicon(snowimg)
    }  else{
      setWicon(clearimg)
    }
  }
  return (
    
    <div className='container'>
    <div className='top-bar'>
    <input type='text' className='cityInput' placeholder='Search' />
    <div className='search_icon' onClick={()=>{search()}}> 
    <img src={searchimg} alt='search_icon'  />
    </div>
    </div>
    <div className='weather-img'>
   <img src={wicon} alt='cloud_icon' />
    </div>
      <div className='weather-temp'>24° C</div>
          <div className='weather-location'>London</div>
          <div className='data-container'>
            <div className='element'>
                <img  src={humidityimg} alt='' className='icon'/>
                <div className='data'>
                <div className='humidity-percent'>74%</div>
                <div className='text'>Humidity</div>
            </div>
          </div>
          
          <div className='element'>
              <img src={windimg} alt='' className='icon' />
              <div className='data'>
              <div className='wind-rate'>18 km/hr</div>
              <div className='text'>Wind Speed</div>
          </div>
      </div>
    </div>
    </div>
     
  )
}

export default Weather
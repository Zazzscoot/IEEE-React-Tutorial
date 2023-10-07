import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import {NavBar} from './navbar'

import { useState, useEffect } from 'react'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  //useState demo
  
  
  const [time, setTime] = useState()
  const [temperature, setTemperature] = useState()
  const [weather, setWeather] = useState()
  const [wind, setWind] = useState()
  const [pressure, setPressure] = useState()
  const [precipitation, setPrecipitation] = useState()
  const [humidity, setHumidity] = useState()
  const [feelsLike, setFeelsLike] = useState()
  const [uv, setUV] = useState()

  const [location, setLocation] = useState("Toronto, Ontario")
  //useEffect demo
  const getWeatherData = async () => {
    // gets all the data from API
    // filters through some of it into our state variables
    const data = {
      key: process.env.REACT_APP_API_KEY,
    }
    const hi = await fetch(`http://api.weatherapi.com/v1/current.json?key=${data.key}&q=${location}&aqi=no`)
    const content = await hi.json()

    setFeelsLike(content.current.feelslike_c)
    setHumidity(content.current.humidity)
    setUV(content.current.uv)
    setPrecipitation(content.current.precip_mm)
    setPressure(content.current.pressure_mb)
    setWind(content.current.wind_kph)
    setWeather(content.current.condition.text)
    setTemperature(content.current.temp_c)
    setTime(content.current.last_updated)

    return content.current
  }


  //@ts-ignore
  useEffect(() => {
    //put your function that runs here
    getWeatherData()
  },
  [location])


  
  return (
    <>
   
    <main
      className={`min-h-screen ${inter.className}`}
    >
      <NavBar />
      
      {/* Showing high-level weather info */}
      <div
        className="flex flex-row items-start justify-start flex-1"
      >
        <div
          className="flex flex-col items-stretch justify-start flex-1 ml-14 mr-14 mt-14 pl-2 pr-10 border-gray-300 border-r-2 border-solid"
        >
          <h1
            className="font-bold text-4xl font-sans"
          >
            Weather of {location}
          </h1>
          <h3>
            Last Updated: {time}
          </h3>

          {/* {UseState Demo} */}
          <button
            className="bg-gray-200 rounded-lg hover:bg-gray-400"
            onClick={() => {setLocation(location === "Toronto, Ontario" ? "London, Ontario" : "Toronto, Ontario")}}
          >
            Wait I'm in {location === "Toronto, Ontario" ? "London" : "Toronto"}
          </button>

          <h1
            className="text-yellow-500 font-semibold text-9xl mt-8 border-b-4 border-gray-300 border-solid pb-4 mb-3"
          >
            {temperature}°C
          </h1>
          <div
            className="flex items-center"
          >
            <Image src={'/sunny.png'} alt="sunny" width={100} height={100} />
            <h1
              className="text-yellow-500 font-semibold text-3xl mt-3 pl-5"
            >
              {weather}
            </h1>
          </div>
          
          
        </div>

        {/* Showing detailed weather info */}
        <div className="self-center items-stretch ml-14 mr-14 mt-10 px-2 w-1/3">
          <TableItem type="Wind" data={wind}/>
          <TableItem type="Pressure" data={pressure}/>
          <TableItem type="Precipitation" data={precipitation}/>
          <TableItem type="Humidity" data={humidity}/>
          <TableItem type="Feels Like" data={feelsLike}/>
          <TableItem type="UV" data={uv}/>
        </div>
          
          
      </div>     
    </main>
    </>
  )
}

const TableItem = (props:any) => {
  return (
    <div className="flex flex-row items-center w-1/2 mr-16 border-b-2 border-gray-300 border-solid pb-2 w-5/6 mt-3">
      <Image src={`/${props.type}.png`} alt="wind" width={50} height={50}/>
      <div className="flex-grow text-start pl-4">
        {props.type}
      </div>
      <div className="flex-grow text-end pr-4">
        {props.data}
      </div>
    </div>
)
}


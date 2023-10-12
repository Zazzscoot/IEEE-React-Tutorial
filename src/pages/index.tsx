import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import {NavBar} from './navbar'

import { useState, useEffect } from 'react'


const inter = Inter({ subsets: ['latin'] })

interface content {
  feelslike_c: number,
  humidity: number,
  uv: number,
  precip_mm: number,
  pressure_mb: number,
  wind_kph: number,
  condition: {
    text: string
  }
  temp_c: number,
  last_updated: string
}

export default function Home() {

  //useState demo
  const [content, setContent] = useState<content>()

  const [location, setLocation] = useState("Toronto, Ontario")
  //useEffect demo
  const getWeatherData = async () => {
    // gets all the data from API
    // filters through some of it into our state variables
    const data = {
      key: process.env.NEXT_PUBLIC_API_KEY,
    }
    const hi = await fetch(`http://api.weatherapi.com/v1/current.json?key=${data.key}&q=${location}&aqi=no`)
    const content = await hi.json()
    setContent(content.current)
    return content.current
  }
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
          <div className="flex flex-row items-center">
            <h1
              className="font-bold text-4xl font-sans mr-3"
            >
              Weather of {location}
            </h1>
            {/* {UseState Demo} */}
            <button
              className="bg-gray-200 rounded-lg hover:bg-gray-400 px-2"
              onClick={() => {setLocation(location === "Toronto, Ontario" ? "London, Ontario" : "Toronto, Ontario")}}
            >
              Wait I'm in {location === "Toronto, Ontario" ? "London" : "Toronto"}
            </button>
          </div>
          <h3>
            Last Updated: {content?.last_updated}
          </h3>

          <h1
            className="text-yellow-500 font-semibold text-9xl mt-8 border-b-4 border-gray-300 border-solid pb-4 mb-3"
          >
            {content?.temp_c}°C
          </h1>
          <div
            className="flex items-center"
          >
            <Image src={'/sunny.png'} alt="sunny" width={100} height={100} />
            <h1
              className="text-yellow-500 font-semibold text-3xl mt-3 pl-5"
            >
              {content?.condition.text}
            </h1>
          </div>
          
          
        </div>

        {/* Showing detailed weather info */}
        <div className="self-center items-stretch ml-14 mr-14 mt-10 px-2 w-1/3">
          <TableItem type="Wind" data={content?.wind_kph}/>
          <TableItem type="Pressure" data={content?.pressure_mb}/>
          <TableItem type="Precipitation" data={content?.precip_mm}/>
          <TableItem type="Humidity" data={content?.humidity}/>
          <TableItem type="Feels Like" data={content?.feelslike_c}/>
          <TableItem type="UV" data={content?.uv}/>
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


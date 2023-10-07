import Image from 'next/image'
import { NavBar } from '../navbar'
import { useState, useEffect} from 'react'



export default function Weekly() {
  const [allcontent, setAllcontent] = useState<any[]>([])
  const getForecastData = async () => {
    const data = {
      key: "28e16256783040ab9dc122111230710",
      q: "Toronto",
      numDays: "3",
    }
    const hi = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${data.key}&q=${data.q}&days=${data.numDays}&aqi=no&alerts=no`)
    const content = await hi.json()
    setAllcontent(content.forecast.forecastday)
    console.log(content)
    
  }
  useEffect( () => {
    getForecastData();
  },[])

  if(!allcontent || !allcontent[0]) return <h1>Loading...</h1>

  return (
    <>
      <NavBar />
      <div
        className="flex flex-row items-center mx-5 justify-center h-full mt-32 sm:mt-8 md:mt-8 mb:5"
      >
        {/* {TODAY} */}
        {allcontent.map((dayData) => {
          return (
            <Card 
              date={dayData.date}
              temperature={dayData.day.maxtemp_c}
              weather={dayData.day.condition.text}
              rain={dayData.day.daily_chance_of_rain}
              icon={dayData.day.condition.icon}
            />
          )
        })}      
      </div>
    </>
  )
}

const Card = (props:any) => {
  return (
    <div className="w-1/4 bg-white h-auto border-2 border-solid rounded-lg flex flex-col items-center p-3 drop-shadow-sm mx-5 hover:bg-gray-100 transition duration-500 ease-in-out bg-opacity-50">
          <h1 className="font-semibold text-xl font-sans">
            {props.date}
          </h1>
          <div className="flex items-start self-start pl-11">
            <h1 className="font-bold text-7xl font-sans">
            {props.temperature}
            </h1>
            <h2 className="font-bold text-2xl font-sans pt-2">
              °C
            </h2>
          </div>
          <Image src={`https://${props.icon}`} alt="sunny" width={150} height={150} className="self-start pt-4 pl-3" />
          <h1 className="self-start pl-11">
            {props.weather}
          </h1>
          <div className='flex flex-row justify-stretch items-center pt-8'>
            <Image src="/precipitation.png" alt="precipitation" width={40} height={40} className="self-start mr-3" />
            <h1>{props.rain ?  props.rain : "No"} chance of Rain!</h1>
          </div>
        </div>
  )
}
import Image from 'next/image'
import { NavBar } from '../navbar'
export default function Weekly() {
  return (
    <>
      <NavBar />
      <div
        className="flex flex-row items-center mx-5 justify-center h-full mt-32 sm:mt-8 md:mt-8 mb:5"
      >
        {/* {TODAY} */}
        <div className="w-1/4 bg-white h-auto border-2 border-solid rounded-lg flex flex-col items-center p-3 drop-shadow-sm mx-5 hover:bg-gray-100 transition duration-500 ease-in-out bg-opacity-50">
          <h1 className="font-semibold text-xl font-sans">
            Saturday, October 7th, 2023
          </h1>
          <div className="flex items-start self-start pl-11">
            <h1 className="font-bold text-7xl font-sans">
              14
            </h1>
            <h2 className="font-bold text-2xl font-sans pt-2">
              °C
            </h2>
          </div>
          <Image src="/sunny.png" alt="sunny" width={150} height={150} className="self-start pt-4 pl-3" />
          <h1 className="self-start pl-11">
            Sunny
          </h1>
          <div className='flex flex-row justify-stretch items-center pt-8'>
            <Image src="/precipitation.png" alt="precipitation" width={40} height={40} className="self-start mr-3" />
            <h1>No chance of Rain!</h1>
          </div>
        </div>

        {/* {TOMMOROW} */}
        <div className="w-1/4 bg-white h-auto border-2 border-solid rounded-lg flex flex-col items-center p-3 drop-shadow-sm mx-5 hover:bg-gray-100 transition duration-500 ease-in-out bg-opacity-50">
          <h1 className="font-semibold text-xl font-sans">
            Sunday, October 8th, 2023
          </h1>
          <div className="flex items-start self-start pl-11">
            <h1 className="font-bold text-7xl font-sans">
              15
            </h1>
            <h2 className="font-bold text-2xl font-sans pt-2">
              °C
            </h2>
          </div>
          <Image src="/cloudy.png" alt="sunny" width={150} height={150} className="self-start pt-4 pl-3" />
          <h1 className="self-start pl-11">
            Cloudy
          </h1>
          <div className='flex flex-row justify-stretch items-center pt-8'>
            <Image src="/precipitation.png" alt="precipitation" width={40} height={40} className="self-start mr-3" />
            <h1>No chance of Rain!</h1>
          </div>
        </div>
        
        {/* {MONDAY} */}
        <div className="w-1/4 bg-white h-auto border-2 border-solid rounded-lg flex flex-col items-center p-3 drop-shadow-sm mx-5 hover:bg-gray-100 transition duration-500 ease-in-out bg-opacity-50">
          <h1 className="font-semibold text-xl font-sans">
            Monday, October 9th, 2023
          </h1>
          <div className="flex items-start self-start pl-11">
            <h1 className="font-bold text-7xl font-sans">
              16
            </h1>
            <h2 className="font-bold text-2xl font-sans pt-2">
              °C
            </h2>
          </div>
          <Image src="/rain.png" alt="sunny" width={150} height={150} className="self-start pt-4 pl-3" />
          <h1 className="self-start pl-11">
            Rain
          </h1>
          <div className='flex flex-row justify-stretch items-center pt-8'>
            <Image src="/precipitation.png" alt="precipitation" width={40} height={40} className="self-start mr-3" />
            <h1>50% chance of rain!</h1>
          </div>
        </div>
      </div>
    </>
  )
}
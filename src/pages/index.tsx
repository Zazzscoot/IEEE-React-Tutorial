import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import {NavBar} from './navbar'

import { useState, useEffect } from 'react'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  //useState demo
  let location = "Toronto, Ontario"
  // const changeLocation = () => {
  //   location = ("London, Ontario")
  // }
  
  return (
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
            As of 8:53AM
          </h3>

          {/* {UseState Demo} */}
          {/* <button
            className="bg-gray-200 rounded-lg hover:bg-gray-400"
            onClick={changeLocation}
          >
            Wait I'm in London
          </button> */}

          <h1
            className="text-yellow-500 font-semibold text-9xl mt-8 border-b-4 border-gray-300 border-solid pb-4 mb-3"
          >
            7°C
          </h1>
          <div
            className="flex items-center"
          >
            <Image src={'/sunny.png'} alt="sunny" width={100} height={100} />
            <h1
              className="text-yellow-500 font-semibold text-3xl mt-3 pl-5"
            >
              SUNNY
            </h1>
          </div>
          
          <h2
            className="text-gray-400 font-semibold pl-5"
          >
            No chance of Rain within the next 3 hours
          </h2>
          
          
        </div>

        {/* Showing detailed weather info */}
        <div className="self-center items-stretch ml-14 mr-14 mt-10 px-2 w-1/3">
          <TableItem type="Wind" data="33.1km/h"/>
          <TableItem type="Pressure" data="1010.0mb"/>
          <TableItem type="Precipitation" data="0.0mm"/>
          <TableItem type="Humidity" data="67%"/>
          <TableItem type="Feels Like" data="10°C"/>
          <TableItem type="UV" data="3.0"/>
        </div>
          
          
      </div>     
    </main>
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


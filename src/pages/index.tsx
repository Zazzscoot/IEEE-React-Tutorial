import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import {NavBar} from './navbar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`min-h-screen ${inter.className}`}
    >
      <NavBar />
      <div
        className="inline-flex flex-col items-start justify-start flex-1 w-3/5"
      >
        <div
          className="flex flex-col items-stretch justify-start flex-1 ml-14 mr-14 mt-14 px-2"
        >
          <h1
            className="font-bold text-4xl font-sans"
          >
            Weather of Toronto, Ontario
          </h1>
          <h3>
            As of 8:53AM
          </h3>
          <h1
            className="text-yellow-500 font-semibold text-9xl mt-8 border-b-4 border-gray-300 border-solid pb-4"
          >
            7°C
          </h1>
          {/* <Image src={'/sunny.png'} alt="sunny" width={100} height={100} /> */}
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
        <div
            className="flex flex-row justify-center ml-14 mr-14 mt-10 px-2 w-5/6"
          >
            <TableItem type="Wind" data="33.1km/h"/>
            <TableItem type="Pressure" data="1010.0mb"/>
        </div>
        <div
            className="flex flex-row justify-center ml-14 mr-14 mt-5 px-2 w-5/6"
          >
            <TableItem type="Precipitation" data="0.0mm"/>
            <TableItem type="Humidity" data="67%"/>
        </div>
        <div
            className="flex flex-row justify-center ml-14 mr-14 mt-5 px-2 w-5/6"
          >
            <TableItem type="Feels Like" data="10°C"/>
            <TableItem type="UV" data="3.0"/>
        </div>
          
          
      </div>

      
    </main>
  )
}

const TableItem = (props:any) => {
  return (
    <div
      className="flex flex-row items-center w-1/2 mr-16 border-b-2 border-gray-300 border-solid pb-2"
    >
      <Image src={`/${props.type}.png`} alt="wind" width={50} height={50}/>
      <div
        className="flex-grow text-start pl-4"
      >
        {props.type}
      </div>
      <div
        className="flex-grow text-end pr-4"
      >
        {props.data}
      </div>
    </div>
)
}


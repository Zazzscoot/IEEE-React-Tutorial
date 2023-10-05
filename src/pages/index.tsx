import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`min-h-screen ${inter.className}`}
    >
      <div
        className={`flex flex-row items-stretch justify-start flex-1 w-full bg-gray-800`}
      >
        <Image src={'/BESTLOGO.png'} alt="BESTLOGO" width={300} height={300}
          className="pb-3 pr-3 bg-gray-800 opacity-100 hover:bg-gray-700 transition duration-300 ease-in-out "
        />
        <IEEEBUTTON text="DOG"/>
      </div>
    </main>
  )
}

const IEEEBUTTON = (props:any) => {
  return (
    <>
      <button
        className="px-10 hover:bg-gray-700 text-white font-bold transition-colors duration-300 ease-in-out"
      >
        {props.text}
      </button>
    </>
  )
}

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export const NavBar = (props:any) => {
  const [text, setText] = useState("IEEE's Weather App")
  return (
    <div
    className={`flex flex-row items-stretch content-center justify-start flex-1 w-full drop-shadow`}
    >
      <Image src={'/BESTLOGO.png'} alt="BESTLOGO" width={200} height={200}
        className="p-3 pt-2 opacity-100 hover:bg-gray-100 transition duration-500 ease-in-out mx-10"
      />
      <h1 className="flex self-center font-bold text-xl mx-2">{text}</h1>
      <CustomButton text="Today" url="/"/>
      <CustomButton text="Weekly" url="/weekly"/>
      <button
        onClick={() => {
          setText("Something else")
        }}
      >Change text of website</button>
    </div>
  )
}
const CustomButton = (props:any) => {
  const handleClick = () => {
    window.location.href= props.url
    props.text = "Something else"
  }
  
  return (
    <>
      <button
        onClick={handleClick}
        className="px-10 text-black font-bold hover:bg-gray-200 transition duration-500 ease-in-out self-center py-6"
      >
        {props.text ? props.text : "No Name"}
      </button>
    </>
  )
}


import Image from 'next/image'
import Link from 'next/link'

export const NavBar = (props:any) => {
  return (
    <div
    className={`flex flex-row items-stretch content-center justify-start flex-1 w-full drop-shadow`}
    >
      <Image src={'/BESTLOGO.png'} alt="BESTLOGO" width={200} height={200}
        className="p-3 pt-2 opacity-100 hover:bg-gray-100 transition duration-500 ease-in-out mx-10"
      />
      <h1 className="flex self-center font-bold text-xl mx-2">Scott's Weather App</h1>
      <CustomButton text="Today"/>
      <CustomButton text="Weekly"/>
    </div>
  )
}
export const CustomButton = (props:any) => {
  const link = props.text === "Weekly" ? "/weekly" : "/"
  return (
    <>
      <Link
        href={link}
        className="px-10 text-black font-bold hover:bg-gray-200 transition duration-500 ease-in-out self-center py-6"
      >
        {props.text}
      </Link>
    </>
  )
}

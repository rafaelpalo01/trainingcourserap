import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { signIn } from "next-auth/react";



const Header = () => {
  return (
    <div>

      <div>
        <div className="bg-black text-white ">
        <Link href="/"><h1 className="cursor-pointer leading-none md:text-xl md:font-bold md:uppercase md:px-64 md:pt-6 px-2 px-10 pt-6">Rafael Hood Crew</h1></Link>
        <Link href="/"><h2 className="cursor-pointer leading-3 border-b-4 border-amber-400 md:px-96 md:pb-6 pb-6 px-16">PH Provider</h2></Link>
      </div>
      </div>  

      <div className="pt-2 pb-2 md:flex md:justify-evenly font-bold">
        <div className="flex">
        <Link href="/"><div className="pl-1 cursor-pointer hover:text-gray-600 hover:underline hover:underline-offset-4 hover:decoration-4 hover:decoration-amber-400 transtition ease-out duration">Home</div></Link>
        </div>
        <div className="flex">
        <h1 className="pl-1 cursor-pointer hover:text-gray-600 hover:underline hover:underline-offset-4 hover:decoration-4 hover:decoration-amber-400 transtition ease-out duration">Special Offers</h1>
        </div>
        <div className="flex">
        <h1 className="pl-1 cursor-pointer hover:text-gray-600 hover:underline hover:underline-offset-4 hover:decoration-4 hover:decoration-amber-400 transtition ease-out duration">Support</h1>
        </div>
        <div className="flex">
        <Link href="/enroll"><div className="pl-1 cursor-pointer hover:text-gray-600 hover:underline hover:underline-offset-4 hover:decoration-4 hover:decoration-amber-400 transtition ease-out duration">List of Enrollee</div></Link>
        </div>
        <div className="flex">
        <h1 className="pl-1 cursor-pointer hover:text-gray-600 hover:underline hover:underline-offset-4 hover:decoration-4 hover:decoration-amber-400 transtition ease-out duration">Sign Up </h1>
        </div>
        <div className="flex">
        <button className="pl-1 cursor-pointer hover:text-gray-600 hover:underline hover:underline-offset-4 hover:decoration-4 hover:decoration-amber-400 transtition ease-out duration" onClick={() =>{
        signIn();
        }}>Login</button>
        </div>
      </div>     
      </div>
  )
}
export default Header

import React from 'react'
import {
    Link
  } from 'react-router-dom'

export default function Navbar(props) {
  return (

    <>

    <div>



        <nav className="flex py-4 bg-slate-300 px-32 dark:bg-slate-600">
            <div className="flex w-full justify-between text-gray-500">
                <div className="flex">
                    
                    <div className="text-3xl font-bold mr-24 text-zinc-600 dark:text-neutral-300 hover:cursor-pointer"> <a href="/">Bro-Grammers </a></div>
                    
                    <ul className="flex text-gray-500 dark:text-neutral-200 mt-2 font-medium text-lg">
                        
                        <li>
                            <Link className="mx-4 hover:cursor-pointer" to="/"> Home </Link>
                        </li>
                        <li> 
                            <Link className="mx-4 hover:cursor-pointer" to="/Courses">Courses </Link> 
                        </li>
                        {/* <li className="mx-4 hover:cursor-pointer"> Internship </li> */}
                        <li>
                            <Link className="mx-4 hover:cursor-pointer" to="/about"> About </Link>                    
                        </li>
                        
                    </ul>
                </div>


                <div className="text-lg font-medium space-x-2">
                    <button className=" px-8 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-500"><span>Login</span></button>
                    <button className=" px-8 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-500"><span>Sign In</span></button>
                    {/* <button className="px-8 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-500" role='switch'><span> Theme </span> </button> */}
                </div>



                
                <div className="Hamburger space-y-1 mt-5 md:hidden">
                    <ul className="line w-6 h-1 bg-gray-500" ></ul>
                    <ul className="line w-6 h-1 bg-gray-500" ></ul>
                    <ul className="line w-6 h-1 bg-gray-500" ></ul>
                </div>
            </div>

        </nav>
    
    
    
    </div>
    
    </>
  )
}

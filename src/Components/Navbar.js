import React, {useState} from 'react'
import {
    Link
  } from 'react-router-dom'

  export default function Navbar(props) {
      
      const [open, SetOpen] = useState("false");
      const toggleHamburger = ()=>{
        console.log(open);
        SetOpen(!open)
        console.log("Hamburger Toggled")
      }

  return (

    <>

    <div className="mx-auto ">



        <nav className=" flex py-2 bg-slate-300 lg:px-32 md:px-30 px-6 dark:bg-slate-600">
            <div className=" w-full justify-between text-gray-500">


                <div className="lg:flex justify-between w-full ">

                
                            <div className=" text-xl items-center lg:text-3xl font-bold text-zinc-600 dark:text-neutral-300 hover:cursor-pointer lg:mt-2"> <a href="/"> Bro-Grammers </a>
                            </div>

                            <div className="Hamburger absolute right-8 top-4 cursor-pointer" onClick = {toggleHamburger}>

                                    <div className=" space-y-1 my-auto lg:hidden">
                                    <ul className={`line w-5 md:w-6 h-0.5 bg-gray-500 duration-[1200ms] ${open ? `` : `rotate-45 translate-y-1`}`} ></ul>
                                    <ul className={`line w-5 md:w-6 h-0.5 bg-gray-500 duration-500 ${open ? `` : `opacity-0 translate-x-10`} `} ></ul>
                                    <ul className={`line w-5 md:w-6 h-0.5 bg-gray-500 duration-500 ${open ? `` : `rotate-[135deg] -translate-y-2`} `} ></ul>
                                    </div>
                            </div>
                            
                            <div className={`Links z-10 py-2 lg:static absolute bg-slate-300 dark:bg-slate-600 left-0 w-full lg:w-auto items-center duration-500 ${ open ? `-top-96` : `top-11`} `}>
                                <ul className={` items-center space-y-3 lg:space-y-0 lg:space-x-8 mt-2 flex lg:flex-row flex-col text-gray-500 dark:text-neutral-200 font-medium text-lg lg:text-xl`}>  
                                    <li>
                                    <Link className=" hover:cursor-pointer" to="/"> Home </Link>
                                    </li>
                                    <li> 
                                    <Link className=" hover:cursor-pointer" to="/Courses"> Courses </Link> 
                                    </li>
                                    <li>
                                    <Link className=" hover:cursor-pointer" to="/about"> About </Link>                    
                                    </li>
                                </ul>
                            </div>


                        <div className= "items-center absolute top-2 lg:static right-20 text-sm lg:text-lg lg:mt-2 font-medium">
                            <button className=" px-6 py-1 bg-blue-600 text-white rounded-full hover:bg-blue-500"><span>Sign In</span></button>
                        </div>


                </div>

            </div>

        </nav>
    
    
    
    </div>
    
    </>
  )
}

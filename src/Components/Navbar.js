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

    <div className=" mx-auto ">



        <nav className="fixed w-full z-50 flex bg-slate-300 lg:px-32 px-6 dark:bg-slate-600 shadow-2xl shadow-black/75">
            <div className="w-full bg-slate-300 dark:bg-slate-600 justify-between text-gray-500">


                <div className="lg:flex justify-between w-full ">

                
                            <div className="absolute text-2xl z-20 items-center lg:text-3xl font-bold text-zinc-600 dark:text-neutral-300 bg-slate-300 dark:bg-slate-600 w-full py-4 left-0 pl-6 lg:pl-0 lg:static lg:w-auto hover:cursor-pointer lg:mt-2"> <a href="/"> Bro-Grammers </a>
                            </div>

                            <div className="Hamburger z-20 absolute right-6 top-6 cursor-pointer" onClick = {toggleHamburger}>

                                    <div className=" space-y-1 my-auto lg:hidden">
                                    <ul className={`line w-5 md:w-6 h-0.5 bg-gray-500 duration-[1200ms] ${open ? `` : `rotate-45 translate-y-1`}`} ></ul>
                                    <ul className={`line w-5 md:w-6 h-0.5 bg-gray-500 duration-500 ${open ? `` : `opacity-0 translate-x-10`} `} ></ul>
                                    <ul className={`line w-5 md:w-6 h-0.5 bg-gray-500 duration-500 ${open ? `` : `rotate-[135deg] -translate-y-2`} `} ></ul>
                                    </div>
                            </div>
                            
                            <div className={`Links z-10 py-5 lg:static absolute bg-slate-300 dark:bg-slate-600 left-0 w-full lg:w-auto items-center duration-500 ${ open ? `-top-96` : `top-11`} `}>
                                <ul className={` items-center space-y-3 lg:space-y-0 lg:space-x-8 mt-2 flex lg:flex-row flex-col text-gray-500 dark:text-neutral-200 font-medium text-lg lg:text-xl`}>  
                                    <li onClick={toggleHamburger}>
                                    <Link className=" hover:cursor-pointer" to="/"> Home </Link>
                                    </li>
                                    <li onClick={toggleHamburger}> 
                                    <Link className=" hover:cursor-pointer" to="/Courses"> Courses </Link> 
                                    </li>
                                    <li onClick={toggleHamburger}>
                                    <Link className=" hover:cursor-pointer" to="/about"> About </Link>                    
                                    </li>
                                </ul>
                            </div>


                        <div className= "items-center z-20 absolute top-4 lg:static right-16 text-sm lg:text-lg lg:mt-6 font-medium">
                            <button className=" px-6 py-1 bg-blue-600 text-white rounded-full hover:bg-blue-500"><span>Sign In</span></button>
                        </div>


                </div>

            </div>

        </nav>
    
    
    
    </div>
    
    </>
  )
}

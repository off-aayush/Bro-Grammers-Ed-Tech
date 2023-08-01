import React from 'react'


export default function About() {
  return (
    <>

    <div className="mx-auto bg-neutral-200 dark:bg-slate-900 dark:text-neutral-200">

        <div className="mx-2 md:mx-16 pt-32 items-center flex flex-wrap justify-between ">
        
              <div className="lg:w-1/3 w-auto mt-10">
                  <div className="md:text-7xl text-5xl">
                    <h1> Online <b> classes </b> </h1>
                    <h1> <b>from the best </b> </h1>
                    <h1> instructors </h1>
                    </div>
                      
              </div>

              <div className="max-w-3xl w-auto mt-6">
              <img src="/img/Instructor.jpg"/>
              </div>

        </div>

        <div className="flex flex-wrap mx-2 md:mx-16 mt-14 pb-24 justify-between">

              <div className="w-auto lg:w-1/3   items-center">
                 <h2 className="text-3xl md:text-5xl"><b>Introduction</b></h2>
                 <p className="text-lg md:text-2xl" >Get rid of the routine feel for your learning process and replace lame methods with fun and enagaging ones</p>
              </div>

              <div className="w-auto lg:w-1/2 md:mt-32 mt-16 ml-8 flex items-center">
              <input className="pb-3 md:w-96 border-b-2 border-black dark:border-neutral-200 bg-transparent focus:outline-none" placeholder="Put your email here"></input>
              <button className="px-8 text-lg py-[5.5px] bg-black text-white dark:bg-neutral-200 dark:text-slate-900"><p>Sign up</p></button>
              </div>

        </div>

    </div>

    </>
  )
}

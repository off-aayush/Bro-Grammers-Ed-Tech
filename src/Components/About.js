import React from 'react'


export default function About() {
  return (
    <>

    <div className="container mx-auto flex justify-between px-20 pt-14 pb-36 bg-neutral-200 dark:bg-slate-900 dark:text-neutral-200">
        
        <div className="m-auto mt-10">
            <div className="m-auto text-7xl">
              <h1> Online <b> classes </b> </h1>
              <h1> <b>from the best </b> </h1>
              <h1> instructors </h1>
              </div>
                <div className="ml-52 m-auto mt-8">
                    <h2><b>Introduction</b></h2>
                    <p>Get rid of the routine feel fro your learning process and replace lame methods with fun and enagaging ones</p>
                </div>
                <input className="ml-28 m-auto w-72 px-4 mt-24 pb-1 border-b-2 border-black dark:border-neutral-200 bg-transparent focus:outline-none" placeholder="Put your email here"></input>
                <button className="px-8 py-[5.5px] bg-black text-white dark:bg-neutral-200 dark:text-slate-900"><p>Sign up</p></button>
        </div>

        <img className="max-w-3xl ml-14 m-auto " src="/img/Instructor.jpg"/>
    </div>

    </>
  )
}

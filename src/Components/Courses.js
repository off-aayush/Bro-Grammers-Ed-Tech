import React from 'react';
import CourseItem from './CourseItem';
import { Data } from './CourseData';
import { useState } from 'react';


// Will add a new component as a paid courses, will display some paid courses with a new navbar beneath only to swtich between courses
// Also will redirect the home page butons like 'See Courses' & 'Read More' to course & About component respectively


export default function Courses(props) {

    const [search, setSearch] = useState("");

    return (

        <>

            <div className={`pt-9 mx-auto md:px-14 px-2 pb-12 bg-neutral-200 dark:bg-slate-900 dark:text-neutral-200`}>


                <img src="img/Skill Up Summer.webp" className="bg-cover bg-center cursor-pointer pt-8 md:w-[1400px] m-auto rounded-2xl" alt="Course " />

                <div className="mt-12 mx-12 space-y-8">
                    <h1 className="text-4xl">
                        <b>Online Courses</b>
                    </h1>

                    <div className=" grid md:grid-cols-2 gap-5 border-gray-300 border-b-2 dark:border-neutral-600">

                        <h1 className="cursor-pointer text-xl">
                            Free Library
                        </h1>

                        <div className="mb-3">
                            <div className="relative mb-4 flex w-full flex-wrap items-stretch">
                                <input
                                    type="search"
                                    className="relative m-0 block w-[1px] min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary dark:focus:text-neutral-200" 
                                    placeholder="Search Courses"
                                    aria-label="Search"
                                    aria-describedby="button-addon2"
                                    onChange={(event) => setSearch(event.target.value)} />

                                <span
                                    className="input-group-text flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-neutral-700 dark:text-neutral-200"
                                    id="basic-addon2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        className="h-5 w-5">
                                        <path
                                            fillRule="evenodd"
                                            d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                                            clipRule="evenodd" />
                                    </svg>
                                </span>
                            </div>
                        </div>

                    </div>




                    {/* To be implemented later using the CoursesItem Component and using the course information through API  */}

                    <div className="Courses mx-auto grid md:grid-cols-3 grid-cols-1 gap-10">{

                        Data.filter((item) => {
                            return search.toLowerCase() === "" ? item : item.name.toLowerCase().includes(search)
                        }).map((element) => {
                            return <div key={element.id} className="">
                                <CourseItem CourseUrl={element.url} ImageUrl={element.img} CourseName={element.name} Time={element.time} Language={element.language} Enrolled={element.enrolled} />
                            </div>

                        })
                    }


                    </div>






                </div>


            </div>

        </>
    )
}

import React from 'react';
import CoursesItem from './CoursesItem';

export default function Courses(props) {
  return (

    <>

    <div className={`px-14 pb-12 bg-neutral-200 dark:bg-slate-900 dark:text-neutral-200`}>


        <img src="img/Skill Up Summer.webp" className="cursor-pointer pt-8 w-[1400px] m-auto rounded-2xl"/>
        
        <div className="mt-12 mx-12 space-y-8">
            <h1 className="text-4xl">
                <b>Online Courses</b>
            </h1>
            <h1 className="cursor-pointer text-xl pb-4 border-gray-300 border-b-2">
                Free Library
            </h1>



             <div className=" flex m-auto w-full space-x-4">
                

                {/* To be implemented later using the CoursesItem Component and using the course information through API 
                
                <CoursesItem CourseUrl="https://www.youtube.com/playlist?list=PLlHtucAD9KT2VKBwCZooIvDAiJQZ0Hrur"  ImageUrl="img/UiUx.jpg" CourseName="User Experience & User Interface" Time="3 Hrs" Language="Enlgish" Enrolled="2008" /> */}


                

                    <div className="cursor-pointer border-2 border-gray-300  rounded-t-3xl rounded-b-2xl hover:shadow-xl hover:shadow-gray-400" >
                        <a href='https://www.youtube.com/playlist?list=PLlHtucAD9KT2VKBwCZooIvDAiJQZ0Hrur' target='_blank'>
                        <img src="img/UiUx.jpg" className="max-w-xs rounded-t-3xl"/>
                        <p className="text-xl ml-6 my-2"><b>User Experience & User Interface</b></p>
                        <p className="ml-6 mb-4"> 3 Hrs | English | 2008 Enrolled </p>
                        </a>
                    </div>

                    <div className="cursor-pointer border-2 border-gray-300  rounded-t-3xl rounded-b-2xl hover:shadow-xl hover:shadow-gray-400">
                    <a href='https://www.youtube.com/playlist?list=PLgUwDviBIf0oF6QL8m22w1hIDC1vJ_BHz' target='_blank'>
                        <img src="img/DSACPP2.jpg" className="max-w-xs rounded-t-3xl"/>
                        <p className="text-xl ml-6 my-2"><b>DataStructures With C++</b></p>
                        <p className="ml-6 mb-4"> 3 Hrs | English | 2008 Enrolled </p>
                        </a>
                    </div>

                    <div className="cursor-pointer border-2 border-gray-300  rounded-t-3xl rounded-b-2xl hover:shadow-xl hover:shadow-gray-400">
                    <a href='https://www.youtube.com/playlist?list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ' target='_blank'>
                        <img src="img/DSAJAVA.jpg" className="max-w-xs rounded-t-3xl"/>
                        <p className="text-xl ml-6 my-2"><b>DataStrucutres With JAVA</b></p>
                        <p className="ml-6 mb-4"> 3 Hrs | English | 2008 Enrolled </p>
                        </a>
                    </div>

                    <div className="cursor-pointer border-2 border-gray-300  rounded-t-3xl rounded-b-2xl hover:shadow-xl hover:shadow-gray-400">
                    <a href='https://scrimba.com/learn/learnreact' target='_blank'>
                        <img src="img/ReactJS.jpg" className="max-w-xs rounded-t-3xl"/>
                        <p className="text-xl ml-6 my-2"><b>React Development</b></p>
                        <p className="ml-6 mb-4"> 3 Hrs | English | 2008 Enrolled </p>
                        </a>
                    </div>

            </div>

            
            <div className=" flex m-auto w-full space-x-4">

                    <div className="cursor-pointer border-2 border-gray-300  rounded-t-3xl rounded-b-2xl hover:shadow-xl hover:shadow-gray-400">
                        <a href='https://www.codecademy.com/resources/docs/general/full-stack' target='_blank'>
                        <img src="img/Full_Stack.png" className="max-w-xs rounded-t-3xl"/>
                        <p className="text-xl ml-6 my-2"><b>FullStack Web Development</b></p>
                        <p className="ml-6 mb-4"> 3 Hrs | English | 2008 Enrolled </p>
                        </a>
                    </div>

                    <div className="cursor-pointer border-2 border-gray-300  rounded-t-3xl rounded-b-2xl hover:shadow-xl hover:shadow-gray-400">
                    <a href='https://www.youtube.com/playlist?list=PL0rxPh2ovQP_JTqkFUtaZzBXzppx-VSWn' target='_blank'>
                        <img src="img/JS.png" className="max-w-xs rounded-t-3xl"/>
                        <p className="text-xl ml-6 my-2"><b>Expert JavaScript</b></p>
                        <p className="ml-6 mb-4"> 3 Hrs | English | 2008 Enrolled </p>
                        </a>
                    </div>

                    <div className="cursor-pointer border-2 border-gray-300  rounded-t-3xl rounded-b-2xl hover:shadow-xl hover:shadow-gray-400">
                    <a href='https://www.youtube.com/playlist?list=PLC3y8-rFHvwh8shCMHFA5kWxD9PaPwxaY' target='_blank'>
                        <img src="img/NodeJS.jpeg" className="max-w-xs rounded-t-3xl"/>
                        <p className="text-xl ml-6 my-2"><b>Node JS for Beginners</b></p>
                        <p className="ml-6 mb-4"> 3 Hrs | English | 2008 Enrolled </p>
                        </a>
                    </div>

                    <div className="cursor-pointer border-2 border-gray-300  rounded-t-3xl rounded-b-2xl hover:shadow-xl hover:shadow-gray-400">
                    <a href='https://www.mygreatlearning.com/academy/learn-for-free/courses/my-sql-basics' target='_blank'>
                        <img src="img/SQL.png" className="max-w-xs rounded-t-3xl"/>
                        <p className="text-xl ml-6 my-2"><b>MySQL For Beginners</b></p>
                        <p className="ml-6 mb-4"> 3 Hrs | English | 2008 Enrolled </p>
                        </a>
                    </div>

            </div>

            
            <div className=" flex m-auto w-full space-x-4">

                    <div className="cursor-pointer border-2 border-gray-300  rounded-t-3xl rounded-b-2xl hover:shadow-xl hover:shadow-gray-400">
                        <a href='https://www.youtube.com/playlist?list=PLfqMhTWNBTe3LtFWcvwpqTkUSlB32kJop' target='_blank'>
                        <img src="img/Java.jpg" className="max-w-xs rounded-t-3xl"/>
                        <p className="text-xl ml-6 my-2"><b>Advanced Java</b></p>
                        <p className="ml-6 mb-4"> 3 Hrs | English | 2008 Enrolled </p>
                        </a>
                    </div>

                    <div className="cursor-pointer border-2 border-gray-300  rounded-t-3xl rounded-b-2xl hover:shadow-xl hover:shadow-gray-400">
                    <a href='https://www.youtube.com/playlist?list=PLTjRvDozrdlxj5wgH4qkvwSOdHLOCx10f' target='_blank'>
                        <img src="img/Python.jpg" className="max-w-xs rounded-t-2xl"/>
                        <p className="text-xl ml-6 my-2"><b>Python Programming</b></p>
                        <p className="ml-6 mb-4"> 3 Hrs | English | 2008 Enrolled </p>
                        </a>
                    </div>

                    <div className="cursor-pointer border-2 border-gray-300  rounded-t-3xl rounded-b-2xl hover:shadow-xl hover:shadow-gray-400">
                    <a href='https://www.mygreatlearning.com/ai/free-courses' target='_blank'>
                        <img src="img/AI.png" className="max-w-xs rounded-t-3xl"/>
                        <p className="text-xl ml-6 my-2"><b>Artificial Intelligence</b></p>
                        <p className="ml-6 mb-4"> 3 Hrs | English | 2008 Enrolled </p>
                        </a>
                    </div>

                    <div className="cursor-pointer border-2 border-gray-300  rounded-t-3xl rounded-b-2xl hover:shadow-xl hover:shadow-gray-400">
                    <a href='https://youtube.com/playlist?list=PLxCzCOWd7aiHGhOHV-nwb0HR5US5GFKFI' target='_blank'>
                        <img src="img/ML.jpeg" className="max-w-xs rounded-t-2xl"/>
                        <p className="text-xl ml-6 my-2"><b>Machine Learning</b></p>
                        <p className="ml-6 mb-4"> 3 Hrs | English | 2008 Enrolled </p>
                        </a>
                    </div>
               


            </div> 


        </div>



        

    </div>
    
    </>
  )
}

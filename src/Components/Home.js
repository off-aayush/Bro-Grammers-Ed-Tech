import React, {useState} from 'react'

function App() {
    // const slides = [
    //     {
    //         url: 'https://media.istockphoto.com/id/1148918504/photo/positive-businesswoman-in-her-office-working-on-the-laptop.jpg?b=1&s=170667a&w=0&k=20&c=XmFjpfxnVNGUPiC_EcBkwc4hlasfDyOQtTaRENFS5DY='
    //     },
    //     {
    //         url: 'https://unsplash.com/photos/g1Kr4Ozfoac'
    //     },
    //     {
    //         url: 'https://unsplash.com/photos/505eectW54k'
    //     },
    //     {
    //         url: 'https://unsplash.com/photos/4-EeTnaC1S4'
    //     },
    //     {
    //         url: 'https://unsplash.com/photos/uWVWQ8gF8PE'
    //     },
    // ];
}

export default function Home() {
  return (

    <>

    <div className="w-full bg-neutral-200 scroll-smooth pb-12 dark:bg-slate-900 dark:text-neutral-200 ">



            <main className="mx-14">
                
                    <div className="Banner max-w-[1400px] h-[780px] w-full m-auto py-8 px-4 relative">
                        <h1 className="absolute -translate-y-44"> Get Started Digital Learning</h1>
                        <img src="/img/Banner2.jpg" className="w-full mt-12 px-28"/>
                        {/* <div style={{backgroundImage: `url(${slides[0].url})`}} className=" w-full h-full rounded-2xl bg-center bg-cover duration-500"></div> */}
                    </div>



                    <div className=" mx-28 text-center">
                        <div className="text-4xl font-bold text-gray-500 dark:text-neutral-200">Discover Our Popular Courses</div>
                        <div className="mt-4"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt asperiores sequi velit quisquam? Ipsam, libero laborum at sapiente officia impedit id reiciendis voluptatem!</div>
                    </div>

                    <div className="courses mx-28 mt-12 space-y-2">

                        <div className="2-2 Pair flex space-x-2">
                            <div className="flex space-x-2 w-1/2 border-2 border-slate-500 rounded-lg cursor-pointer hover:shadow-lg">
                                <img src="/img/UiUx.jpg" className="w-36 rounded-l-lg"/>
                                <div>
                                    <p className="font-semibold text-lg">Fundamental Of UI/UX Design</p>
                                    <p className="text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus est quae eius expedita qui!</p>
                                    <p className="text-blue-500 font-bold text-sm"> Price: $20</p>
                                </div>
                            </div>
                            <div className="flex space-x-2 w-1/2 border-2 border-slate-500 rounded-lg cursor-pointer hover:shadow-lg">
                                <img src="/img/JS.png" className="w-36 rounded-l-lg"/>
                                <div>
                                    <p className="font-semibold text-lg">JavaScript Beginner To Advance</p>
                                    <p className="text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus est quae eius expedita qui!</p>
                                    <p className="text-blue-500 font-bold text-sm"> Price: $25</p>
                                </div>
                            </div>
                        </div>

                        <div className="2-2 Pair flex space-x-2">
                            <div className="flex space-x-2 w-1/2 border-2 border-slate-500 rounded-lg cursor-pointer hover:shadow-lg">
                                <img src="/img/UiUx.jpg" className="w-36 rounded-l-lg"/>
                                <div>
                                    <p className="font-semibold text-lg">Fundamental Of UI/UX Design</p>
                                    <p className="text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus est quae eius expedita qui!</p>
                                    <p className="text-blue-500 font-bold text-sm"> Price: $20</p>
                                </div>
                            </div>
                            <div className="flex space-x-2 w-1/2 border-2 border-slate-500 rounded-lg cursor-pointer hover:shadow-lg">
                                <img src="/img/JS.png" className="w-36 rounded-l-lg"/>
                                <div>
                                    <p className="font-semibold text-lg">JavaScript Beginner To Advance</p>
                                    <p className="text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus est quae eius expedita qui!</p>
                                    <p className="text-blue-500 font-bold text-sm"> Price: $25</p>
                                </div>
                            </div>
                        </div>

                        <div className="2-2 Pair flex space-x-2">
                            <div className="flex space-x-2 w-1/2 border-2 border-slate-500 rounded-lg cursor-pointer hover:shadow-lg">
                                <img src="/img/UiUx.jpg" className="w-36 rounded-l-lg"/>
                                <div>
                                    <p className="font-semibold text-lg">Fundamental Of UI/UX Design</p>
                                    <p className="text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus est quae eius expedita qui!</p>
                                    <p className="text-blue-500 font-bold text-sm"> Price: $20</p>
                                </div>
                            </div>
                            <div className="flex space-x-2 w-1/2 border-2 border-slate-500 rounded-lg cursor-pointer hover:shadow-lg">
                                <img src="/img/JS.png" className="w-36 rounded-l-lg"/>
                                <div>
                                    <p className="font-semibold text-lg">JavaScript Beginner To Advance</p>
                                    <p className="text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus est quae eius expedita qui!</p>
                                    <p className="text-blue-500 font-bold text-sm"> Price: $25</p>
                                </div>
                            </div>
                        </div>

                        <div className="2-2 Pair flex space-x-2">
                            <div className="flex space-x-2 w-1/2 border-2 border-slate-500 rounded-lg cursor-pointer hover:shadow-lg">
                                <img src="/img/UiUx.jpg" className="w-36 rounded-l-lg"/>
                                <div>
                                    <p className="font-semibold text-lg">Fundamental Of UI/UX Design</p>
                                    <p className="text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus est quae eius expedita qui!</p>
                                    <p className="text-blue-500 font-bold text-sm"> Price: $20</p>
                                </div>
                            </div>
                            <div className="flex space-x-2 w-1/2 border-2 border-slate-500 rounded-lg cursor-pointer hover:shadow-lg">
                                <img src="/img/JS.png" className="w-36 rounded-l-lg"/>
                                <div>
                                    <p className="font-semibold text-lg">JavaScript Beginner To Advance</p>
                                    <p className="text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus est quae eius expedita qui!</p>
                                    <p className="text-blue-500 font-bold text-sm"> Price: $25</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="text-center">
                        < button className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-1 rounded-md mt-6 font-semibold"> <a href="https://www.youtube.com/@CodeWithHarry/playlists" target="_blank">Check More Courses</a></button>
                    </div>
                        

                    <div className="Quotations mt-24 flex justify-between mx-28">

                        <div className="w-1/3">
                            <img src="/img/working.png"/>
                        </div>
                        
                        <div className="w-1/2 mt-4">
                            <p className=" text-4xl font-bold text-gray-500 dark:text-slate-200">Explore The E-learning Institute</p>  

                            <p className="mt-4 text-lg font-medium"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias repellendus, cupiditate voluptate voluptatum temporibus ipsa! Ea iusto odit explicabo velit voluptatibus dolore quia impedit maxime a minima, modi quis eius accusantium. Dolor, magnam tenetur fuga similique laboriosam sed, earum, ipsa possimus molestiae tempora impedit incidunt ut adipisci. 
                                
                            Praesentium in, illo totam maxime eaque quasi harum? Alias officia voluptatem facilis, id, labore suscipit veniam corporis, modi maiores inventore ducimus magni.</p>
                            
                            <div className="flex mt-8 space-x-12">
                                <div>
                                    <p className="text-2xl font-bold">3.2K+</p>
                                    <p className="text-sm">Online Courses</p>
                                </div>
                            
                                <div>
                                    <p className="text-2xl font-bold">600+</p>
                                    <p className="text-sm">Expert Members</p>
                                </div>
                                
                                <div>
                                    <p className="text-2xl font-bold">1K+</p>
                                    <p className="text-sm">Rating & Review</p>
                                </div>
                            </div>

                            <button className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-1 rounded-md mt-6 font-semibold">Read More</button>
                            
                        </div>
                    </div>


                    <div className="flex mt-12 bg-blue-400 px-24 py-8 justify-between text-white rounded-md">
                        
                        <div className="w-1/2">
                            <p className="text-4xl font-bold ">Ready to join? </p>
                            <p className="">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto recusandae quaerat repudiandae magni cumque velit! Nemo, quia maiores! Quos asperiores ipsam cum rerum vero eveniet nemo quas alias quam dolorum!</p>                
                        </div>

                        <div className=" mt-10">
                            <button className="bg-neutral-200 hover:bg-white text-blue-600 px-6 py-1 rounded-md mt-6 font-semibold"> Register Now</button>
                        </div>

                    </div>

                    <div>
                        <p className="text-center mt-12 text-2xl font-semibold"> Trusted By Over 800+ Companies</p>
                        <div className="flex mt-8 space-x-10 justify-center">
                            <img className="h-6" src="/img/coursera.png"/>
                            <img className="h-24 -mt-8" src="/img/FedEX.png"/>
                            <img className="h-6" src="/img/indeed.png"/>
                            <img className="h-16 -mt-4" src="/img/linkedin.png"/>
                            <img className="h-8" src="/img/udemy.png"/>
                        </div>

                    </div>
                

            </main>
    
    
    
    </div>
    
    </>
  )
}

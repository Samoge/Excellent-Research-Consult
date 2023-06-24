import React from 'react'

function Goal() {
    return (
        <div>
            <h1 className='text-center text-2xl lg:text-3xl pt-10 font-semibold'>We are Currently in these Cities</h1>
            <p className='lg:w-[150px] w-[120px] h-[3px] bg-[#ff9900] mx-auto'></p>


            <div className='lg:min-h-screen flex flex-wrap items-center justify-between container mx-auto lg:px-10 pb-5'>
                <div className="lg:max-w-[30%] w-[90%] mx-auto bg-white shadow-lg rounded-lg overflow-hidden my-4">
                    <img className="w-full h-80 object-cover object-center" src="https://wallpapers.com/images/high/birmingham-new-street-at-noon-lpz20vtmo6wsu9l9.webp" alt="avatar" />

                    <div className="py-4 px-6">
                        <h1 className="text-2xl font-semibold text-gray-800">Birmingham, UK</h1>
                        <div className="flex items-center mt-4 text-gray-700">
                            <svg className="h-6 w-6 fill-current" viewBox="0 0 512 512">
                                <path d="M239.208 343.937c-17.78 10.103-38.342 15.876-60.255 15.876-21.909 0-42.467-5.771-60.246-15.87C71.544 358.331 42.643 406 32 448h293.912c-10.639-42-39.537-89.683-86.704-104.063zM178.953 120.035c-58.479 0-105.886 47.394-105.886 105.858 0 58.464 47.407 105.857 105.886 105.857s105.886-47.394 105.886-105.857c0-58.464-47.408-105.858-105.886-105.858zm0 186.488c-33.671 0-62.445-22.513-73.997-50.523H252.95c-11.554 28.011-40.326 50.523-73.997 50.523z" /><g><path d="M322.602 384H480c-10.638-42-39.537-81.691-86.703-96.072-17.781 10.104-38.343 15.873-60.256 15.873-14.823 0-29.024-2.654-42.168-7.49-7.445 12.47-16.927 25.592-27.974 34.906C289.245 341.354 309.146 364 322.602 384zM306.545 200h100.493c-11.554 28-40.327 50.293-73.997 50.293-8.875 0-17.404-1.692-25.375-4.51a128.411 128.411 0 0 1-6.52 25.118c10.066 3.174 20.779 4.862 31.895 4.862 58.479 0 105.886-47.41 105.886-105.872 0-58.465-47.407-105.866-105.886-105.866-37.49 0-70.427 19.703-89.243 49.09C275.607 131.383 298.961 163 306.545 200z" /></g>
                            </svg>
                            <h1 className="px-2 text-sm">+44 7878 710669 </h1>
                        </div>
                        <div className="flex items-center mt-4 text-gray-700">
                            <svg className="h-6 w-6 fill-current" viewBox="0 0 512 512">
                                <path d="M256 32c-88.004 0-160 70.557-160 156.801C96 306.4 256 480 256 480s160-173.6 160-291.199C416 102.557 344.004 32 256 32zm0 212.801c-31.996 0-57.144-24.645-57.144-56 0-31.357 25.147-56 57.144-56s57.144 24.643 57.144 56c0 31.355-25.148 56-57.144 56z" />
                            </svg>
                            <h1 className="px-2 text-sm">
                                21, Frankly beeches Road, Birmingham, <br />
                                West Midlands, B31 5AB, United Kingdom
                            </h1>
                        </div>

                    </div>
                </div>

                <div className="lg:max-w-[30%] w-[90%] mx-auto bg-white shadow-lg rounded-lg overflow-hidden my-4">
                    <img className="w-full h-80 object-cover object-center" src="https://www.tripsavvy.com/thmb/zRHPAp4dKWu9mhRBPAC2BZWnJFk=/2127x1409/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-509316972-8cf34edafe2b47ffa720a2a2fbf68e74.jpg" alt="avatar" />

                    <div className="py-4 px-6">
                        <h1 className="text-2xl font-semibold text-gray-800">Aberdeen, UK</h1>
                        <div className="flex items-center mt-4 text-gray-700">
                            <svg className="h-6 w-6 fill-current" viewBox="0 0 512 512">
                                <path d="M239.208 343.937c-17.78 10.103-38.342 15.876-60.255 15.876-21.909 0-42.467-5.771-60.246-15.87C71.544 358.331 42.643 406 32 448h293.912c-10.639-42-39.537-89.683-86.704-104.063zM178.953 120.035c-58.479 0-105.886 47.394-105.886 105.858 0 58.464 47.407 105.857 105.886 105.857s105.886-47.394 105.886-105.857c0-58.464-47.408-105.858-105.886-105.858zm0 186.488c-33.671 0-62.445-22.513-73.997-50.523H252.95c-11.554 28.011-40.326 50.523-73.997 50.523z" /><g><path d="M322.602 384H480c-10.638-42-39.537-81.691-86.703-96.072-17.781 10.104-38.343 15.873-60.256 15.873-14.823 0-29.024-2.654-42.168-7.49-7.445 12.47-16.927 25.592-27.974 34.906C289.245 341.354 309.146 364 322.602 384zM306.545 200h100.493c-11.554 28-40.327 50.293-73.997 50.293-8.875 0-17.404-1.692-25.375-4.51a128.411 128.411 0 0 1-6.52 25.118c10.066 3.174 20.779 4.862 31.895 4.862 58.479 0 105.886-47.41 105.886-105.872 0-58.465-47.407-105.866-105.886-105.866-37.49 0-70.427 19.703-89.243 49.09C275.607 131.383 298.961 163 306.545 200z" /></g>
                            </svg>
                            <h1 className="px-2 text-sm">+44 2451 876342 </h1>
                        </div>
                        <div className="flex items-center mt-4 text-gray-700">
                            <svg className="h-6 w-6 fill-current" viewBox="0 0 512 512">
                                <path d="M256 32c-88.004 0-160 70.557-160 156.801C96 306.4 256 480 256 480s160-173.6 160-291.199C416 102.557 344.004 32 256 32zm0 212.801c-31.996 0-57.144-24.645-57.144-56 0-31.357 25.147-56 57.144-56s57.144 24.643 57.144 56c0 31.355-25.148 56-57.144 56z" />
                            </svg>
                            <h1 className="px-2 text-sm">
                                45, Royal Queens Road, Aberdeen, <br />
                                East Midlands, A11 21BC, United Kingdom
                            </h1>
                        </div>

                    </div>
                </div>

                <div className="lg:max-w-[30%] w-[90%] mx-auto bg-white shadow-lg rounded-lg overflow-hidden my-4">
                    <img className="w-full h-80 object-cover object-center" src="https://www.crowdsourcedexplorer.com/wp-content/uploads/2021/04/Akure-Nigeria-Ondo-102436.jpg" alt="avatar" />

                    <div className="py-4 px-6">
                        <h1 className="text-2xl font-semibold text-gray-800">Akure, Nigeria</h1>
                        <div className="flex items-center mt-4 text-gray-700">
                            <svg className="h-6 w-6 fill-current" viewBox="0 0 512 512">
                                <path d="M239.208 343.937c-17.78 10.103-38.342 15.876-60.255 15.876-21.909 0-42.467-5.771-60.246-15.87C71.544 358.331 42.643 406 32 448h293.912c-10.639-42-39.537-89.683-86.704-104.063zM178.953 120.035c-58.479 0-105.886 47.394-105.886 105.858 0 58.464 47.407 105.857 105.886 105.857s105.886-47.394 105.886-105.857c0-58.464-47.408-105.858-105.886-105.858zm0 186.488c-33.671 0-62.445-22.513-73.997-50.523H252.95c-11.554 28.011-40.326 50.523-73.997 50.523z" /><g><path d="M322.602 384H480c-10.638-42-39.537-81.691-86.703-96.072-17.781 10.104-38.343 15.873-60.256 15.873-14.823 0-29.024-2.654-42.168-7.49-7.445 12.47-16.927 25.592-27.974 34.906C289.245 341.354 309.146 364 322.602 384zM306.545 200h100.493c-11.554 28-40.327 50.293-73.997 50.293-8.875 0-17.404-1.692-25.375-4.51a128.411 128.411 0 0 1-6.52 25.118c10.066 3.174 20.779 4.862 31.895 4.862 58.479 0 105.886-47.41 105.886-105.872 0-58.465-47.407-105.866-105.886-105.866-37.49 0-70.427 19.703-89.243 49.09C275.607 131.383 298.961 163 306.545 200z" /></g>
                            </svg>
                            <h1 className="px-2 text-sm">+234 810 864 2400</h1>
                        </div>
                        <div className="flex items-center mt-4 text-gray-700">
                            <svg className="h-6 w-6 fill-current" viewBox="0 0 512 512">
                                <path d="M256 32c-88.004 0-160 70.557-160 156.801C96 306.4 256 480 256 480s160-173.6 160-291.199C416 102.557 344.004 32 256 32zm0 212.801c-31.996 0-57.144-24.645-57.144-56 0-31.357 25.147-56 57.144-56s57.144 24.643 57.144 56c0 31.355-25.148 56-57.144 56z" />
                            </svg>
                            <h1 className="px-2 text-sm">
                                No 1, Ondo Road, Beside Optima Filling <br /> 
                                Station, Akure
                            </h1>
                        </div>

                    </div>
                </div>
            </div>
        </div >
    )
}

export default Goal
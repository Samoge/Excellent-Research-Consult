import React from 'react'

function App() {
    return (
        <div className="w-full px-6 lg:px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20" id='about'>
            <div id="About" className="py-16 bg-white border rounded-lg">
                <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                    <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                        <div className="md:5/12 lg:w-5/12">
                            <img src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png" alt="image" loading="lazy" width="" height="" />
                        </div>
                        <div className="md:7/12 lg:w-6/12">
                            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl text-center md:text-left"> Welcome to Excellent Research Consult </h2>
                            <p className="mt-6 text-gray-600 text-center md:text-left">Your go to destination for high quality  research services and comprehensive data analysis. At Excellent Research Consult, we are passionate about research and dedicated to delivering high-quality results that exceed your expectations. We believe in the power of research to push boundaries and drive innovation. </p>
                            <p className="mt-4 text-gray-600 text-center md:text-left"> Our commitment to excellence, integrity, and client satisfaction sets us apart as a trusted partner for all your research needs.Our mission is to help you expand frontiers through research and discovery.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default App
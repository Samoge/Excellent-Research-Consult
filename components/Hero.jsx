import React from "react";

const Hero = () => {
  return (
    <div className="w-full lg:h-screen hero text-white">
      <div className="back bg-auto h-full bg-no-repeat bg-center">
        <div className="px-8 pt-[150px] pb-[20px] container mx-auto">
          <h2 className="text-left text-4xl lg:text-6xl text-white sina">
            Making Research and <br />
            Analysing Data for <br />
            Users to Get Better Result.
          </h2>
          <p className="lg:text-2xl text-xl font-thin my-6 lg:my-10">
            Your Premier destination for exceptional research services,
            comprehensive data analysis training and insightful market survey
            and analysis.
          </p>

          <div className="mt-5 mb-10 lg:mb-0">
            <a href="https://wa.link/lrz2cv" target="blank">
              <button
                type="submit"
                className="inline-flex items-center justify-center h-10 md:h-12 px-3 md:px-6 font-medium tracking-wide text-white hover:text-[#ff9900] transition duration-200 rounded shadow-md bg-[#ff9900] hover:bg-white focus:shadow-outline focus:outline-none border border-[#ff9900] subcribe"
              >
                Get Started
              </button>
            </a>

            <a href="#About">
              <button
                type="submit"
                className="inline-flex mx-2 items-center justify-center h-10 md:h-12 px-3 md:px-6 font-medium tracking-wide text-white hover:text-[#ff9900] transition duration-200 rounded shadow-md bg-[#ff9900] hover:bg-white focus:shadow-outline focus:outline-none border border-[#ff9900]"
              >
                Show Me More
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

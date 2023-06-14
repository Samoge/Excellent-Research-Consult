import React, { useState } from "react";
import Collection from "./modal/Collection";
import Research from "./modal/Research";
import Proposal from "./modal/Proposal";
import Da from "./modal/Da";
import Aw from "./modal/Aw";
import Fs from "./modal/Fs";

const Services = () => {
  const [openCollection, setOpenCollection] = useState(false);
  const [openResearch, setOpenResearch] = useState(false);
  const [openProposal, setOpenProposal] = useState(false);
  const [openDa, setOpenDa] = useState(false);
  const [openAw, setOpenAw] = useState(false);
  const [openFs, setOpenFs] = useState(false);

  return (
    <div className="lg:min-h-screen bg-gray-200" id="service">
      <section className="relative pt-16">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="w-12/12 md:w-6/12 px-5   lg:w-4/12 lg:px-12 md:px-4 container lg:ml-5">
              <div className="relative flex flex-col min-w-0 break-words w-full shadow-lg rounded-lg bg-pink-500">
                <img
                  alt="..."
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=700&amp;q=80"
                  className="w-full align-middle rounded-t-lg"
                />
                <blockquote className="relative p-8 mb-4">
                  <h4 className="text-[1.35rem] font-bold text-white">
                    Explore our Awesome Services
                  </h4>
                  <p className="text-md font-light mt-8 text-white">
                    Putting together a page has never been easier than matching
                    together pre-made components. From landing pages
                    presentation to login areas, you can easily customise and
                    built your pages.
                  </p>
                </blockquote>
              </div>
            </div>

            <div className="w-full md:w-6/12 px-4">
              <div className="flex flex-wrap">
                <div className="w-full md:w-6/12 px-4">
                  <div className="relative flex flex-col mt-4 lg:mt-0">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-sitemap"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                        {" "}
                        Data Collection/Data Entry
                      </h6>
                      <p className="mb-4 text-sm">
                        We are leading provider of data collection and data
                        entry services. We offer a range of solutions to support
                        research and business needs.
                      </p>

                      <button
                        onClick={() => setOpenCollection(true)}
                        className="text-indigo-500 flex items-center hover:text-indigo-600"
                      >
                        More Details
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </button>
                      <Collection
                        open={openCollection}
                        onClose={() => setOpenCollection(false)}
                      />
                    </div>
                  </div>
                  <div className="relative flex flex-col mt-4 lg:mt-0">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-sitemap"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                        {" "}
                        Proposal/Thesis
                      </h6>
                      <p className="mb-4 text-sm">
                        Are you pursuing your undergraduate, master or doctorate
                        degree? At Excellent Research Consult, we offer expert
                        guidance and support for crafting winning proposals and
                        thesis.
                      </p>

                      <button
                        onClick={() => setOpenProposal(true)}
                        className="text-indigo-500 flex items-center hover:text-indigo-600"
                      >
                        More Details
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </button>
                      <Proposal
                        open={openProposal}
                        onClose={() => setOpenProposal(false)}
                      />
                    </div>
                  </div>
                  <div className="relative flex flex-col min-w-0">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-drafting-compass"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                        Consultancy
                      </h6>
                      <p className="mb-4 text-sm">
                        At Excellent Research Consult, we are your trusted
                        partner in consultancy services.
                      </p>
                      <button
                        onClick={() => setOpenResearch(true)}
                        className="text-indigo-500 flex items-center hover:text-indigo-600"
                        href="/"
                      >
                        More Details
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </button>
                      <Research
                        open={openResearch}
                        onClose={() => setOpenResearch(false)}
                      />
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-6/12 px-4">
                  <div className="relative flex flex-col min-w-0 mt-4 lg:mt-0">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-newspaper"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                        Data Research/Data Analysis
                      </h6>
                      <p className="mb-4 text-sm">
                        At Excellent Research Consultancy, we offer
                        comprehensive research and data analysis solutions
                        tailored to your specific needs.
                      </p>
                      <button
                        onClick={() => setOpenDa(true)}
                        className="text-indigo-500 flex items-center hover:text-indigo-600"
                        href="/"
                      >
                        More Details
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </button>
                      <Da open={openDa} onClose={() => setOpenDa(false)} />
                    </div>
                  </div>
                  <div className="relative flex flex-col min-w-0">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-file-alt"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                        Article Writing
                      </h6>
                      <p className="mb-4 text-sm">
                        Excellent Research Consult is a premier platform for top
                        quality writing services.
                      </p>
                      <button
                        onClick={() => setOpenAw(true)}
                        className="text-indigo-500 flex items-center hover:text-indigo-600"
                        href="/"
                      >
                        More Details
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </button>
                      <Aw open={openAw} onClose={() => setOpenAw(false)} />
                    </div>
                  </div>
                  <div className="relative flex flex-col min-w-0">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-file-alt"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                        Feasibility Studies
                      </h6>
                      <p className="mb-4 text-sm">
                        At Excellent Research Consult, we understand the
                        importance of thorough planning and analysis before
                        embarking on any project. 
                      </p>
                      <button
                        onClick={() => setOpenFs(true)}
                        className="text-indigo-500 flex items-center hover:text-indigo-600"
                        href="/"
                      >
                        More Details
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </button>
                      <Fs open={openFs} onClose={() => setOpenFs(false)} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;

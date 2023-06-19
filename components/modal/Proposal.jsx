import React from "react";

const Proposal = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <div
      onClick={onClose}
      className="w-full flex items-center z-10 min-h-screen top-0 cursor-pointer left-0 fixed bg-[#00000080]"
    >
      <section
        onClick={(e) => {
          e.stopPropagation();
        }}
        className=" bg-gray-100 flex items-center w-[85%] mt-20 md:mt-0 py-6 md:py-12 mx-auto rounded-lg"
      >
        <div className="container mx-auto px-1 md:px-4">
          <div className="flex flex-wrap">
            <div className="w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-1 shadow-lg rounded-lg">
                <div className="px-4 flex-auto"></div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
              <h3 className="text-3xl mb-2 font-semibold leading-normal">
                Proposal/Thesis
              </h3>
              <p className="text-sm font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                Are you pursuing your undergraduate, master or doctorate degree?
                At Excellent Research Consult, we offer expert guidance and
                support for crafting winning proposals and thesis.
              </p>
              <p className="text-sm font-light leading-relaxed mt-0 mb-4 text-blueGray-600">
                Our service covers proposal development, literature review,
                methodology, editing and proof reading as well as formatting and
                citations. We assist Students at every step, ensuring clarity,
                coherence and adherence to academic standards. With a commitment
                to excellence, Excellent Research Consult empowers researchers
                to succeed in their academic and professional endeavours.
              </p>
              <button className="bg-[#ef9220] text-white p-1 md:p-3 rounded hover:bg-white hover:text-[#ef9220] border border-[#ef9220] transition duration-300">
                Hire Us Now!
              </button>
            </div>
            <div className="hidden md:flex w-full md:w-4/12 px-4 mr-auto ml-auto">
              <div className="relative flex flex-col min-w-0 break-words w-full mb-2 shadow-lg rounded-lg bg-pink-500">
                <img
                  alt="..."
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1051&amp;q=80"
                  className="w-full align-middle rounded-t-lg"
                />
                <blockquote className="relative p-8 mb-4">
                  <h4 className="text-xl font-bold text-white">
                    Excellent Research Consult
                  </h4>
                  <p className="text-md font-light mt-2 text-white">
                    Our mission is to help you expand frontiers through research
                    and discovery.
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Proposal;

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiFillInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { BiLogoLinkedin } from "react-icons/bi";
import Link from "next/link";

const Nav = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("#ef9220");

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY > 0) {
        setColor("#000000");
        setTextColor("#3b5998");
      } else {
        setColor("transparent");
        setTextColor("#3b5998");
      }
    };
    window.addEventListener("scroll", changeColor);
    return () => {
      window.removeEventListener("scroll", changeColor);
    };
  }, []);

  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className="fixed w-full h-20 z-10 px-4 lg:px-16 ease-in duration-300"
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <a href="/">
          <Image
            src="/logo.png"
            width={150}
            height={50}
            className="cursor-pointer object-contain"
          />
        </a>

        <div className="text-white">
          <ul className="hidden md:flex">
            <a href="/">
              <li className="ml-10 text-xl hover:text-[#ff9900]">Home</li>
            </a>
            <a href="#About">
              <li className="ml-10 text-xl hover:text-[#ff9900]">About us</li>
            </a>
            <Link
              href="#service"
              // id="dropdownNavbara" data-dropdown-toggle="dropdownNavbar"
              className="group inline-block"
            >
              <li className="ml-10 text-xl flex items-center justify-center hover:text-[#ff9900]">
                Students
                <span>
                  <svg
                    className="mx-2 fill-current h-4 w-4 transform group-hover:-rotate-180 transition duration-150 ease-in-out"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </span>
              </li>
              <div
                id="dropdownNavbar"
                className="border transform scale-0 group-hover:scale-100 absolute
                  transition duration-150 ease-in-out origin-top min-w-32
                 bg-white text-base z-10 list-none divide-y divide-gray-100 rounded shadow mt-4 w-44"
              >
                <ul className="py-1" aria-labelledby="dropdownLargeButton">
                  <li>
                    <a
                      href="#service"
                      className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
                    >
                      Proposal/ Thesis
                    </a>
                  </li>
                  <li>
                    <a
                      href="#service"
                      className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
                    >
                      Data Collection/ Data Entry
                    </a>
                  </li>
                  <li>
                    <a
                      href="#service"
                      className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
                    >
                      Transcription
                    </a>
                  </li>
                </ul>

                <div className="py-1">
                  <a
                    href="#service"
                    className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
                  >
                    Paraphrasing/ Plagiarism Check
                  </a>
                </div>
                <div className="py-1">
                  <a
                    href="#service"
                    className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
                  >
                    Mentorship
                  </a>
                </div>
              </div>
            </Link>

            <Link href="#service" className="group inline-block">
              <li className="ml-10 text-xl flex items-center justify-center hover:text-[#ff9900]">
                Organisation
                <span>
                  <svg
                    className="mx-2 fill-current h-4 w-4 transform group-hover:-rotate-180 transition duration-150 ease-in-out"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </span>
              </li>
              <div
                id="dropdownNavbar"
                className="border transform scale-0 group-hover:scale-100 absolute
                  transition duration-150 ease-in-out origin-top min-w-32
                 bg-white text-base z-4 list-none divide-y divide-gray-100 rounded shadow mt-4 w-44"
              >
                <ul className="py-1" aria-labelledby="dropdownLargeButton">
                  <li>
                    <a
                      href="#service"
                      className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
                    >
                      Feasibility Studies
                    </a>
                  </li>
                  <li>
                    <a
                      href="#service"
                      className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
                    >
                      Market Survey
                    </a>
                  </li>
                  <li>
                    <a
                      href="#service"
                      className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
                    >
                      Product Research
                    </a>
                  </li>
                  <li>
                    <a
                      href="#service"
                      className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
                    >
                      Data Collection
                    </a>
                  </li>
                </ul>

                <div className="py-1">
                  <a
                    href="#service"
                    className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
                  >
                    Consultancy
                  </a>
                </div>
              </div>
            </Link>
          </ul>

          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      {/* Mobile Nav-Bar */}
      <div
        className={
          nav
            ? "md:hidden fixed left-0 top-0 w-full min-h-screen bg-black/70"
            : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] min-h-screen bg-gray-300 p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div className="">
            <div className="flex items-center justify-between w-full">
              <Image
                src="/logo.png"
                width={87}
                height={40}
                className="cursor-pointer object-contain"
              />
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-2 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w-[85]% md:w-[90%] py-4">
                Begin your Write-ups with Us
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="md:flex uppercase">
              <li onClick={handleNav} className="text-sm py-6">
                <a href="/">Home</a>
              </li>
              <li onClick={handleNav} className="text-sm">
                <a href="#About">About Us</a>
              </li>

              <li className="text-sm items-center pt-6 justify-center hover:text-[#ff9900]">
                <Link
                  href="#service"
                  // id="dropdownNavbara" data-dropdown-toggle="dropdownNavbar"
                  className="group flex items-center"
                >
                  Students
                  <span>
                    <svg
                      className="mx-2 fill-current h-4 w-4 transform group-hover:-rotate-180 transition duration-150 ease-in-out"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </span>
                  <div
                    id="dropdownNavbar"
                    className="border transform scale-0 group-hover:scale-100 absolute
                  transition duration-150 ease-in-out origin-top min-w-32
                 bg-white text-base z-10 list-none divide-y divide-gray-100 rounded shadow ml-12 mt-4 w-44"
                  >
                    <ul className="py-1" aria-labelledby="dropdownLargeButton">
                      <li>
                        <a
                          href="#service"
                          onClick={handleNav}
                          className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
                        >
                          Proposal/ Thesis
                        </a>
                      </li>
                      <li>
                        <a
                          href="#service"
                          onClick={handleNav}
                          className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
                        >
                          Data Collection/ Data Entry
                        </a>
                      </li>
                      <li>
                        <a
                          href="#service"
                          onClick={handleNav}
                          className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
                        >
                          Transcription
                        </a>
                      </li>
                    </ul>
                    <div className="py-1">
                      <a
                        href="#service"
                        onClick={handleNav}
                        className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
                      >
                        Paraphrasing/ Plagiarism Check
                      </a>
                    </div>
                    <div className="py-1">
                      <a
                        href="#service"
                        onClick={handleNav}
                        className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
                      >
                        Mentorship
                      </a>
                    </div>
                  </div>
                </Link>
              </li>
              <li className="text-sm py-6 items-center justify-center hover:text-[#ff9900]">
                <Link
                  href="#service"
                  // id="dropdownNavbara" data-dropdown-toggle="dropdownNavbar"
                  className="group flex items-center"
                >
                  Organisation
                  <span>
                    <svg
                      className="mx-2 fill-current h-4 w-4 transform group-hover:-rotate-180 transition duration-150 ease-in-out"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </span>
                  <div
                    id="dropdownNavbar"
                    className="border transform scale-0 group-hover:scale-100 absolute
                  transition duration-150 ease-in-out min-w-32
                 bg-white text-base z-10 list-none divide-y divide-gray-100 rounded shadow ml-12 w-44"
                  >
                    <ul className="py-1" aria-labelledby="dropdownLargeButton">
                      <li>
                        <a
                          href="#service"
                          onClick={handleNav}
                          className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
                        >
                          Feasibility Studies
                        </a>
                      </li>
                      <li>
                        <a
                          href="#service"
                          onClick={handleNav}
                          className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
                        >
                          Market Survey
                        </a>
                      </li>
                      <li>
                        <a
                          href="#service"
                          onClick={handleNav}
                          className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
                        >
                          Product Research
                        </a>
                      </li>
                      <li>
                        <a
                          href="#service"
                          onClick={handleNav}
                          className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
                        >
                          Data Collection
                        </a>
                      </li>
                    </ul>
                    <div className="py-1">
                      <a
                        href="#service"
                        onClick={handleNav}
                        className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
                      >
                        Consultancy
                      </a>
                    </div>
                  </div>
                </Link>
              </li>

              <li onClick={handleNav} className="text-sm py-4">
                <a href="#Contact">Contacts</a>
              </li>
            </ul>

            <div className="pt-32">
              <p className="uppercase text-[#ca3919]">Connect with Us</p>
              <div className="flex items-center my-4 w-full sm:w-[80%]">
                <a
                  className="rounded-full shadow-lg shadow-gray-400 mr-4 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                  href="https://www.facebook.com/profile.php?id=100091323455487&mibextid=ZbWKwL"
                  target="blank"
                >
                  <FaFacebookF />
                </a>

                <a
                  href="https://instagram.com/excellent.research.consult?igshid=MzNlNGNkZWQ4Mg=="
                  target="blank"
                  className="rounded-full shadow-lg shadow-gray-400 p-3 mr-4 cursor-pointer hover:scale-105 ease-in duration-300"
                >
                  <AiFillInstagram />
                </a>

                <a
                  href="https://www.linkedin.com/company/excellent-research-consult/"
                  target="blank"
                  className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                >
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Mobile Nav-Bar */}
    </div>
  );
};

export default Nav;

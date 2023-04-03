import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import {
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineMail,
  AiOutlineGithub,
  AiOutlineTwitter,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const Header = () => {
  const [nav, setNav] = useState();
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="fixed top-0 z-50 w-full h-20  pt-8  bg-white border-b-gray-100 shadow-sm shadow-gray-100 border   ">
      <div className="flex justify-around items-center">
        <div className="font-sans  text-green-500  text-2xl font-bold">
          Ka <span className="text-black font-light text-xl">Job</span>{" "}
        </div>

        <div>
          <ul className="hidden md:flex">
            <Link href="/#hero">
              <li className=" ml-10 text-sm hover:border-b-grey"> Home</li>
            </Link>
            <Link href="#intro">
              <li className="  ml-10  text-sm hover:border-b-grey">
                {" "}
                About us
              </li>
            </Link>
            <Link href="#latest">
              <li className="  ml-10  text-sm hover:border-b-grey">
                {" "}
                Services
              </li>
            </Link>
            <Link href="#stack">
              <li className="  ml-10 text-sm hover:border-b-grey">
                {" "}
                Job Categories
              </li>
            </Link>
            <Link href="#footer">
              <li className="  ml-10 text-sm hover:border-b-grey">
                {" "}
                Contact Us
              </li>
            </Link>
          </ul>
        </div>

        {/* 
        <div className="flex justify-between">
          <div className="ml-10">
            <AiOutlineTwitter />
          </div>
          <div className="ml-10">
            <AiOutlineGithub />
          </div>
          <div className="ml-10">
            <AiOutlineMail />
          </div>
        </div> */}

        <div
          onClick={handleNav}
          className="md:hidden   flex items-center  justify-between"
        >
          <div>
            <p className="mx-8">Login</p>
          </div>
          <AiOutlineMenu size={25} />
        </div>
      </div>
      <div
        onClick={handleNav}
        className={
          nav ? " md:hidden w-full fixed left-0 top-0 h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed  left-0 top-0  w-[75%] sm:w-[60%] md:[45%] h-screen bg-slate-50 ease-in duration-500"
              : "  left-[-100%] ease-in duration-500"
          }
        >
          {nav && (
            <div>
              <div className="flex  flex-col mt-3">
                <div className="flex  justify-between py-4 border-b-gray-500 ">
                  <div className="font-sans font-bold ml-10  ">Menu</div>
                  <div onClick={handleNav} className="bg-green-100 mx-2">
                    <AiOutlineClose className="p-2" size={25} />
                  </div>
                </div>
                <ul>
                  <Link href="#hero">
                    <li className=" py-4 ml-10 text-sm hover:border-b-gray-500">
                      {" "}
                      Home
                    </li>
                  </Link>
                  <Link href="#intro">
                    <li className=" py-4  ml-10  text-sm hover:border-b-gray-500">
                      {" "}
                      Browse Jobs
                    </li>
                  </Link>

                  <Link href="#latest">
                    <li className="py-4   ml-10  text-sm hover:border-b-gray-500">
                      {" "}
                      Users
                    </li>
                  </Link>
                  <Link href="#stack">
                    <li className="py-4   ml-10 text-sm hover:border-b-gray-500">
                      {" "}
                      Blog
                    </li>
                  </Link>

                  <Link href="#footer">
                    <li className=" py-4  ml-10 text-sm hover:border-b-gray-500">
                      {" "}
                      Register
                    </li>
                  </Link>
                  <Link href="#footer">
                    <li className=" py-4  ml-10 text-sm hover:border-b-gray-500">
                      {" "}
                      Login
                    </li>
                  </Link>
                </ul>
              </div>
              {/* <div className="flex flex-col pt-40">
                <div>
                  <p className="ml-10 font-bold  ">Lets Connect</p>
                </div>
                <div className="flex ml-10 pt-10 justify-around">
                  <div>
                    <FaLinkedinIn />
                  </div>
                  <div>
                    <AiOutlineGithub />
                  </div>
                  <div>
                    <AiOutlineMail />
                  </div>
                </div>
              </div> */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;

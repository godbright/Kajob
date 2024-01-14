import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import {
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineMail,
  AiOutlineGithub,
  AiOutlineTwitter,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Modal from "../commons/modal";
import { useSelector } from "react-redux";

import Popup from "../commons/popup";

const Header = () => {
  const [nav, setNav] = useState();
  const [isereg, SetReg] = useState();
  let [isOpen, setIsOpen] = useState(false);
  const user_data = useSelector((state) => state.users.user);
  const [openPop, setPop] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // just trigger this so that the initial state
    // is updated as soon as the component is mounted
    // related: https://stackoverflow.com/a/63408216
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className={`fixed top-0 z-50 w-full h-20  pt-8 ${
        scrollY > 50 ? "bg-white" : "bg-[#1F4B3F]"
      }     shadow-sm`}
    >
      <div className="flex justify-around items-center">
        <Link href={"/"}>
          <div
            className={`font-sans      ${
              scrollY > 50 ? "text-green-500" : "text-white"
            }   text-2xl font-bold`}
          >
            Ka <span className={"text-black font-light text-xl"}>Job</span>{" "}
          </div>
        </Link>
        <Modal isereg={isereg} setIsOpen={setIsOpen} isOpen={isOpen} />
        <div>
          <ul className="hidden md:flex">
            <Link href="/#hero">
              <li
                className={`${
                  scrollY > 50 ? "text-black" : "text-white"
                } ml-10 text-sm hover:border-b-grey`}
              >
                {" "}
                Home
              </li>
            </Link>
            <Link href="#intro">
              <li
                className={`${
                  scrollY > 50 ? "text-black" : "text-white"
                } ml-10 text-sm hover:border-b-grey`}
              >
                {" "}
                About us
              </li>
            </Link>
            <Link href="#latest">
              <li
                className={`${
                  scrollY > 50 ? "text-black" : "text-white"
                } ml-10 text-sm hover:border-b-grey`}
              >
                {" "}
                Services
              </li>
            </Link>
            <Link href="#stack">
              <li
                className={`${
                  scrollY > 50 ? "text-black" : "text-white"
                } ml-10 text-sm hover:border-b-grey`}
              >
                {" "}
                Job Categories
              </li>
            </Link>
            <Link href="#footer">
              <li
                className={`${
                  scrollY > 50 ? "text-black" : "text-white"
                } ml-10 text-sm hover:border-b-grey`}
              >
                {" "}
                Contact Us
              </li>
            </Link>
          </ul>
        </div>
        <div className="hidden sm:block   ">
          <ul className=" flex  items-center justify-center  ">
            {!user_data && (
              <div
                onClick={() => {
                  SetReg(true), setIsOpen(true);
                }}
              >
                <li
                  className={`${
                    scrollY > 50 ? "text-black" : "text-white"
                  } ml-10 text-sm hover:border-b-grey w-max    hover:border-b-grey`}
                >
                  {" "}
                  Sign Up
                </li>
              </div>
            )}
            {!user_data && (
              <div className="  bg-green-500 mx-6  px-4  rounded  text-center py-2   text-white w-full">
                <Link href="#footer">
                  <li className=" text-sm hover:border-b-grey"> Post a Job</li>
                </Link>
              </div>
            )}
            {!user_data ? (
              <div
                onClick={() => {
                  SetReg(false), setIsOpen(true);
                }}
              >
                <li
                  className={`${
                    scrollY > 50 ? "text-black" : "text-white"
                  } ml-10 text-sm hover:border-b-grey`}
                >
                  {" "}
                  Login{" "}
                </li>
              </div>
            ) : (
              <div className="flex items-center justify-center gap-3 ">
                {/* {"change to profile picture of the person who gave the gig"} */}

                {user_data.img ? (
                  <img
                    src={service.image[0]}
                    className={
                      " rounded-full bg-gray-100   object-cover w-10  h-10"
                    }
                    alt={"services"}
                  />
                ) : (
                  <div className="rounded-full  bg-green-400 ">
                    <p className=" text-white  px-4 py-2  uppercase">
                      {user_data.UserName.slice(0, 1)}
                    </p>
                  </div>
                )}
                <p
                  className={`${
                    scrollY > 50 ? "text-black" : "text-white"
                  } ml-10 text-sm hover:border-b-grey w-max    hover:border-b-grey`}
                >
                  {user_data.UserName}
                </p>
                <Popup />
              </div>
            )}
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
                      Browse Categories
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

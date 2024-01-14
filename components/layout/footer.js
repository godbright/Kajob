import Link from "next/link";
import {
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineMail,
  AiOutlineGithub,
  AiOutlineTwitter,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
const Footer = () => {
  return (
    <div id="footer">
      {/* web */}
      {/* 019267
      pallate 
      00C897
      FFD365
      FDFFA9 */}
      <div className="   bg-[#1F4B3F] w-screen   ">
        {/* <div className="py-2">
          <p className="font-normal my-10 text-center text-white font-mono text-4xl">
            We link you to the best Jobs <br />
            you can find
          </p>
          <div className="w-screen flex justify-center items-center ">
            <div
              className=" rounded-lg  bg-white  w-auto w-min-400  md:w-1/12 "
              onClick={() => {
                console.log("clicked");
              }}
            >
              <p className=" text-gray-600   text-center text-lg p-2">
                {" "}
                Get a job
              </p>
            </div>
          </div>
        </div> */}
        <div class="hidden sm:block">
          <div className=" bg-white  grid grid-cols-4  pb-10 pt-10 ">
            {/* <div className="  md:mx-10  2xl:mx-56 mt-40  md:mb-40 "></div> */}
            <div className="w-fit ">
              <div className="ml-20 ">
                <div className="text-2xl mb-4 font-normal text-gray-500    ">
                  <p className="   text-lg text-gray-500 ">Contacts</p>
                </div>
                <div className="flex flex-col text-gray-500  justify-between gap-2">
                  <div>
                    <p className="text-gray-500 text-sm ">+255 693690071</p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm ">+255 620819186</p>
                  </div>
                </div>

                <div>
                  <p className="underline mt-2 text-gray-500 ">
                    {" "}
                    giovannixon@gmail.com
                  </p>
                </div>
                <div className="flex mt-10 gap-20 items-center ">
                  <div>
                    <p className="text-white text-sm ">
                      @ 2023 All Rights Reserved
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="text-2xl mb-4 font-normal text-gray-500    ">
                <p className="   text-lg text-gray-500 ">Address</p>
              </div>
              <div>
                <p className="text-gray-500 text-sm ">
                  Mbezi Luis Dar es salaam Tanzanania , <br /> P.O.Box 6547
                </p>
              </div>
            </div>
            <div>
              <div className="text-2xl mb-4 font-normal text-gray-500    ">
                <p className="   text-lg text-gray-500 ">Visit us</p>
              </div>
              <ul className="flex  flex-col gap-2 ">
                <Link href="/">
                  <li className=" text-sm hover:border-b-grey text-gray-500 ">
                    {" "}
                    Home
                  </li>
                </Link>
                <Link href="/">
                  <li className="   text-sm hover:border-b-grey text-gray-500 ">
                    {" "}
                    About me
                  </li>
                </Link>
                <Link href="/">
                  <li className="   text-sm hover:border-b-grey text-gray-500 ">
                    {" "}
                    Works
                  </li>
                </Link>
                <Link href="/">
                  <li className="  text-sm hover:border-b-grey text-gray-500 ">
                    {" "}
                    Skills
                  </li>
                </Link>
                <Link href="/">
                  <li className="  text-sm hover:border-b-grey text-gray-500 ">
                    {" "}
                    Contacts
                  </li>
                </Link>
              </ul>
            </div>
            <div>
              <div className="text-2xl mb-4 font-normal     ">
                <p className="   text-lg text-gray-500 ">Socials</p>
              </div>
              <div className="flex gap-12">
                <div>
                  <FaLinkedinIn className="text-gray-500" />
                </div>
                <div>
                  <AiOutlineGithub className="text-gray-500" />
                </div>
                <div>
                  <AiOutlineMail className="text-gray-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Mobile */}
        <div className="bg-white md:hidden">
          <div className="flex flex-col justify-center items-center mt-4 py-5 ">
            <div className="text-2xl text-white   ">
              <p className="text-gray-600">Contacts</p>
            </div>
            <div className="flex flex-col text-gray-500   justify-between gap-2">
              <div>
                <p className="text-gray-500 font-thin ">+255 693690071</p>
              </div>
              <div>
                <p className="text-gray-500 font-thin ">+255 620819186</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center mt-4 py-5 ">
            <div className="text-2xl  ">
              <p className="uppercase text-gray-600">Address Information</p>
            </div>
            <div>
              <p className="text-gray-500 font-thin text-center mt-4 py-5 ">
                Mbezi Luis Dar es salaam Tanzanania , <br /> P.O.Box 6547
              </p>
            </div>
          </div>

          <div className="flex gap-x-4 justify-center items-center mt-4 py-5 ">
            <div>
              <FaLinkedinIn className="text-green-600" />
            </div>
            <div>
              <AiOutlineGithub className="text-green-600" />
            </div>
            <div>
              <AiOutlineMail className="text-green-600" />
            </div>
          </div>
        </div>
        <div className="flex  py-4 items-center justify-center ">
          <p className="text-white font-thin ">@ 2023 All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

const Commercials = () => {
  return (
    <div className="flex  md:flex-row w-screen py-20  my-20 bg-[#1F4B3F]">
      <div className=" hidden sm:block flex-1 ">
        <div className="p-4">
          <img
            src="/shule.jpg"
            className={"  bg-gray-100   object-cover w-auto h-auto"}
            alt ={"services"}
          />
        </div>
      </div>
      <div className=" flex-1 ">
        <div className="h-full gap-10    items-center justify-between px-10 py-8 mt-6 ">
          <div>
            <p className="text-white text-4xl md:text-3xl  md:font-bold md:w-30 2xl:w-full 2xl:pt-40 2xl:pb-20 mb-4">
              The number one stop for Jobs <br /> in, Tanzania.
            </p>
          </div>
          <div>
            <p className="text-white text-base pt-6">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
          <div>
            <ul className="p-4">
              <li className="text-white">
                Connect to freelancers with proven business experience
              </li>
              <li className="text-white">
                Connect to freelancers with proven business experience
              </li>
              <li className="text-white">
                Connect to freelancers with proven business experience
              </li>
            </ul>
          </div>
          <div
            className=" rounded-sm mt-4 bg-green-400 p-2  w-auto max-w-sm  "
            onClick={() => {

            }}
          >
            <p className=" text-white   text-center text-lg p-2"> Get a job</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Commercials;

import { CiSearch } from "react-icons/ci";
import Select from "react-select";
const Landing = () => {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  return (
    <div className="    bg-[#1F4B3F]">
      <div className="flex md:px-16  flex-col  md:h-screen 2xl:h-5/6  md:py-80 h-fit py-60 px-10  2xl:ml-80 ">
        <div>
          <div className="flex-col md:mt-4 items-start ">
            <p className="text-white text-4xl md:text-6xl  md:font-bold md:w-30 2xl:w-full mb-4">
              The number one stop for Jobs <br /> in, Tanzania.
            </p>
            <p className="text-white text-xl pt-6">
              Millions of people use freeio.com to turn their ideas into
              reality.
            </p>
          </div>
          <div className="flex   md:my-8 flex-col md:flex-row md:w-4/6 2xl:w-2/6 p-2 bg-white rounded mt-4 md:items-center md:justify-between ">
            <div className="flex justify-center items-center">
              <CiSearch className="p-2" size={25} />
              <input
                className="p-4 w-full"
                type="text"
                placeholder="What are you looking for ?"
              />
            </div>
            <div className="justify-between md:w-4/12">
              <Select placeholder="Categories" options={options} />
            </div>

            <div className="flex justify-center items-center">
              <input
                className="bg-green-500 p-4 md:px-10 rounded  mx-4 my-4 text-white w-full "
                type="submit"
              />
            </div>
          </div>
          <div className="flex items-start">
            <p className="text-white text-xl mt-4">
              Popular Searches : Designer, Developer, Web, IOS, PHP, Senior,
              Engineer
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;

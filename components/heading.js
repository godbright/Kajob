import { MdArrowForwardIos } from "react-icons/md";
const Heading = (props) => {
  return (
    <div className="flex  flex-col w-screen  px-12 md:px-16 items-start  md:flex-row md:items-center     md:justify-between  ">
      <div>
        <h2 className="text-2xl md:text-4xl md:mt-20 font-semibold">
          {" "}
          {props.title}
        </h2>
        {!props.showdescr && (
          <h2 className="text-green-500 mt-2  md:text-2xl ">
            {props.description}
          </h2>
        )}
      </div>
      <div className="flex py-3 md:py-0  items-center justify-around">
        <p> {props.link}</p>
        <MdArrowForwardIos className="mx-2" />
      </div>
    </div>
  );
};

export default Heading;

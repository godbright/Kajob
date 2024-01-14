import Link from "next/link";
import { MdArrowForwardIos } from "react-icons/md";
const Heading = (props) => {
  return (
    <div
      className={`flex  flex-col w-screen  px-12 md:px-16  items-start  md:flex-row md:items-center     ${
        !props.route ? "md:justify-center" : "md:justify-between"
      }  `}
    >
      <div>
        <h2
          className={` ${
            !props.route && "text-center "
          } text-2xl md:text-4xl md:mt-20 font-semibold`}
        >
          {" "}
          {props.title}
        </h2>
        {!props.showdescr && (
          <h2
            className={` text-gray-500 mt-2  md:text-2xl ${
              props.route && "text-center "
            }`}
          >
            {props.description}
          </h2>
        )}
      </div>
      {props.route && (
        <Link href={`${props.route}`}>
          <div className="flex py-3 md:py-0  items-center justify-around">
            <p> {props.link}</p>
            <MdArrowForwardIos className="mx-2  " />
          </div>
        </Link>
      )}
    </div>
  );
};

export default Heading;

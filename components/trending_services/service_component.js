import { useRouter } from "next/router";
import { AiFillStar } from "react-icons/ai";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Link from "next/link";
const ServiceComponent = (props) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const router = useRouter();

  const changePage = (id) => {
    router.push(`${id}`);
  };

  return (
    <>
      <Carousel
        additionalTransfrom={0}
        autoPlay={false}
        arrows={true}
        className=""
        autoPlaySpeed={6000}
        centerMode={false}
        containerClass="container"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={responsive}
      >
        {props.data.length &&
          props.data.map((service, index) => (
            <div
              key={index}
              className="flex   flex-col w-12/12 md:gap-4 gap-2 my-6 mx-4 md:mt-6  shadow-lg shadow-gray-200 "
            >
              <div className="w-auto">
                {/* {"change to carousel of  pictures "} */}
                <img
                  src={service.image[0]}
                  className={"  object-cover  w-auto h-auto   "}
                />
              </div>
              <div className=" p-4">
                <div className="my-4">
                  <p className="text-gray-400 ">{service.category}</p>
                </div>
                <div>
                  <p className="text-black font-bold  flex flex-wrap">
                    {service.description.slice(0, 50).concat("....")}
                  </p>
                </div>
                <div className="flex gap-2 items-center py-1">
                  <AiFillStar color="orange" />
                  <p>
                    <span>{service.totalStars}</span> Review
                  </p>
                </div>
                <div className="border-t flex gap-4 mt-4 justify-between items-center py-4  px-2">
                  <div className="flex items-center justify-center gap-3 ">
                    {/* {"change to profile picture of the person who gave the gig"} */}
                    <img
                      src={service.image[0]}
                      className={
                        " rounded-full bg-gray-100   object-cover w-10  h-10"
                      }
                    />
                    <p>Godbright Uiso</p>
                  </div>
                  <p className="text-black font-bold ">
                    <span className="text-gray-400 font-light">
                      Starting at :
                    </span>{" "}
                    {`${service.price} Tsh`}
                  </p>
                </div>
              </div>
            </div>
          ))}
      </Carousel>
    </>
  );
};

export default ServiceComponent;

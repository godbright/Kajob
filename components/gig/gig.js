import Carousel from "react-multi-carousel";
import ExtendedProfile from "../commons/userprofile/extended_profile";

const Gig = (props) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="flex flex-col items-start ">
      <div className="text-2xl md:text-4xl md:mt-20 font-semibold">
        {props.data && props.data.title}
      </div>

      {props.data && (
        <div className="w-5/6  h-fit mt-4">
          <Carousel
            additionalTransfrom={0}
            autoPlay={true}
            showDots={false}
            arrows={true}
            autoPlaySpeed={6000}
            centerMode={false}
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
            {props.data &&
              props.data.image.map((service, index) => (
                <div
                  key={index}
                  className=" flex jusify-center items-center  w-fit h-5/6 "
                >
                  <img src={service} alt={"services"} />
                </div>
              ))}
          </Carousel>
        </div>
      )}

      <div className="static">
        <p className="text-lg md:text-4xl md:mt-20 font-semibold">
          About this Job
        </p>
        <p className="text-xl mt-2">{props.data.short_title}</p>
        <div className="text-lg mt-2 text-gray-400">
          {props.data.description}
        </div>
      </div>

      <div>
        <p className="text-lg md:text-4xl md:mt-20 font-semibold">
          About the Seller
        </p>
        <div>
          <ExtendedProfile data={props.data.userId} />
        </div>
      </div>
    </div>
  );
};
export default Gig;

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
const SingleImageCarousel = (props) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 8,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
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
    <div id="Stack">
      <div className=" flex  justify-center w-screen pb-6  ">
        <div className=" w-5/6 container ">
          <Carousel
            additionalTransfrom={0}
            autoPlay={true}
            arrows={false}
            autoPlaySpeed={7000}
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
              props.data.map((work, index) => {
                return (
                  <div key={index}>
                    <Image src={work.logo} width={100} height={100} />
                  </div>
                );
              })}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default SingleImageCarousel;

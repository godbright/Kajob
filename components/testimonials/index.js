import Carousel from "react-multi-carousel";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Godbright Uiso",
      test: "Ka job is the best site ever",
    },
    {
      name: "Godbright Uiso",
      test: "Its my third year now",
    },
    {
      name: "Godbright Uiso",
      test: "i LOVE THIS SITE",
    },
  ];
  const responsive = {
    superLargeDesktop: {
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
    <div>
      <div className=" my-40 flex flex-col justify-center h-4/5 items-center   w-screen  ">
        <div className=" relative w-4/6  shadow-md  shadow-gray-200 bg-slate-100 ">
          <div className="  hidden sm:block  absolute top-0 left-10  ">
            <img src="/comma.png" width={100} height={100} />
          </div>
          <div className=" hidden sm:block absolute bottom-0 right-10   ">
            <img src="/b_comma.png" width={100} height={100} />
          </div>
          <div className="  font-bold p-2   text-center pt-4 text-2xl">
            What our users Say
          </div>

          <Carousel
            additionalTransfrom={0}
            autoPlay={true}
            showDots={false}
            arrows={false}
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
            {testimonials.length &&
              testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="flex  py-6  my-20   flex-col items-center justify-center"
                >
                  <div className="text-2xl py-6   text-center  flex justify-center flex-wrap w-2/6 uppercase">
                    {testimonial.test}
                  </div>
                  <div>{testimonial.name}</div>
                </div>
              ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

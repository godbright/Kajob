import { BsCodeSlash } from "react-icons/bs";
import {
  MdArrowForwardIos,
  MdLocationOn,
  MdKeyboardArrowRight,
} from "react-icons/md";

import Heading from "../heading";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getData } from "@/services/gateway";
import { getAllServices } from "@/redux/reducers/servicesSlice";
import Link from "next/link";

const Job = () => {
  const dispatch = useDispatch();
  const services_data = useSelector((state) => state.services);
  const [loading, isLoading] = useState(false);
  const [error, isError] = useState(null);
  
  // getAllCategories
  const getGigs = async () => {
    try {
      isLoading(true);
      const results = await getData("gig/all");
      if (results.data.length) {
        dispatch(getAllServices(results.data));
        isLoading(false);
      }
    } catch (error) {
      isLoading(false);
      isError(error);
    }
  };

  useEffect(
    () => {
      getGigs();
    },
    [
      //call data from the api
      //dispatch the result to the state
    ]
  );

  return (
    <div>
      <div>
        {loading && <p className="text-red-100">Loading data</p>}
        <Heading
          title={" New  & Random Jobs"}
          description={
            "Hand-picked jobs featured depending on popularity and benefits"
          }
          link={"All Jobs"}
        />

        <div className=" mt-4 2xl:w-4/6  2xl:ml-80  px-12 md:px-16    ">
          <div className="grid  grid-cols-1   md:grid-cols-3    gap-y-20  gap-x-4">
            {" "}
            {services_data.services.length &&
              services_data.services.map((cat, index) => {
                return (
                  <Link href={`jobs/${cat._id}`}>
                    <div className="flex flex-col rounded-lg  shadow-lg  border-gray-100 border-r-2">
                      <div
                        key={index}
                        className="  flex  items-start justify-start p-10  mt-2   "
                      >
                        <div className="h-9/12 w-14 mx-6">
                          <img
                            src={cat.image[0]}
                            height={"auto"}
                            width={"auto"}
                            alt={"services"}
                          />
                        </div>
                        <div className="flex flex-col items-start">
                          <p className="md:text-2xl md:font-medium  text-center  text-sm ">
                            {cat.title}
                          </p>
                          <p className="mt-2 md:text-lg text-gray-400">
                            {cat.short_title}
                          </p>
                          <div className="flex justify-around  gap-x-4 my-4">
                            <div className="flex justify-center items-center gap-x-2">
                              <MdLocationOn className="text-green-400" />
                              <p>Dar es salaam/Tanzania</p>
                            </div>
                            <div className="flex justify-center items-center gap-x-4">
                              <p className="text-green-400">Tzs</p>
                              <p>{`${cat.price} /mo`}</p>
                            </div>
                          </div>
                          <div className="rounded bg-red-400">
                            <p className="p-2">Part time</p>
                          </div>
                        </div>
                      </div>
                      <div className="flex  rounded-b justify-between px-10 py-4  bg-gray-100 ">
                        <p>Experience: 0 -1 Years</p>
                        <p>Apply Now </p>
                      </div>
                    </div>
                  </Link>
                );
              })}
          </div>
        </div>
        <div className="  w-full     my-4">
          <div className="flex justify-center items-center ">
            <div className="flex items-center justify-center gap-x-4 bg-green-500 rounded text-white p-4 w-fit">
              <p>View more</p>
              <MdKeyboardArrowRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Job;

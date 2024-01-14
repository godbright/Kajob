import React from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import Gig from "@/components/gig/gig";
import { BiTimeFive, BiRevision } from "react-icons/bi";

import Tabs from "@/components/commons/tabs";

const Jobs = () => {
  const router = useRouter();
  const services = useSelector((state) => state.services);
  const serviceId = router.query.id;
  const service =
    services.services.length &&
    services.services.find((s) => s?._id == serviceId);

  return (
    <>
      <div className=" flex  flex-col md:px-16   2xl:h-5/6   h-fit py-10 px-10  2xl:ml-80 md:flex-row">
        <div className=" w-3/5 ">
          <Gig data={service} />
        </div>
        <div className="w-2/5 p-fixed ml-6 fixed right-0  mt-10 ">
          <div className="border-2 w-fit p-10 mt-20 ">
            <div className="flex gap-x-40 ">
              <p className="text-xl">{service.short_title}</p>
              <p className="text-2xl">{service.price} Tzs</p>
            </div>
            <div className="flex flex-col">
              <div className="flex  justify-start items-center gap-x-10">
                <BiTimeFive />
                <p className="my-4">{`${service.deliveryTime} Days Delivery Time`}</p>
              </div>
              <div className="flex  justify-start items-center gap-x-10">
                <BiRevision />
                <p>{`${service.revisionNumber} Revision`}</p>
              </div>
              <div className="flex justify-center mt-4">
                <button className="bg-green-500 text-white rounded p-4  w-9/12">
                  Continue{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Jobs;

import React from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import Gig from "@/components/gig/gig";
import { BiTimeFive, BiRevision } from "react-icons/bi";
import { AiFillStar } from "react-icons/ai";

import {
  MdArrowForwardIos,
  MdLocationOn,
  MdKeyboardArrowRight,
} from "react-icons/md";

import Tabs from "@/components/commons/tabs";
import JobSpecs from "@/components/job/job_specs";

const Jobs = () => {
  const router = useRouter();
  const services = useSelector((state) => state.services);
  const serviceId = router.query.id;
  const service =
    services.services.length &&
    services.services.find((s) => s?._id == serviceId);
  return (
    <>
      <div className=" flex md:flex-row  flex-col mt-40 justify-center items-center">
        <div className=" border border-gray-200   w-4/5  ">
          <img src={service.image[0]} />
          <div className="p-4">
            <div>
              <p className="text-bold">{service.title}</p>
            </div>
            <div className="flex flex-row  items-center  gap-x-4 mt-4">
              <MdLocationOn />{" "}
              <p className="text-gray-500 text-sm">8 vancancy</p>
              <AiFillStar color="orange" />
              <p className="text-gray-500 text-sm">
                <span>{service.totalStars}</span> Review
              </p>
            </div>
          </div>
          <JobSpecs title={"Experience"} data={"Minimum 1 Year"} />
          <JobSpecs title={"Employee Type"} data={"Full time"} />
          <JobSpecs title={"Position"} data={"Senior Devloper"} />
          <JobSpecs title={"Offer Salary"} data={"100000 Tzs/mo"} />
          <div className="p-4">
            <div>
              <p className="text-bold">Job description</p>
            </div>
            <div className="my-4">
              <p className="text-sm text-gray-500">
                As a Product Designer, you will work within a Product Delivery
                Team fused with UX, engineering, product and data talent. You
                will help the team design beautiful interfaces that solve
                business challenges for our clients. We work with a number of
                Tier 1 banks on building web-based applications for AML, KYC and
                Sanctions List management workflows. This role is ideal if you
                are looking to segue your career into the FinTech or Big Data
                arenas.
              </p>
            </div>
          </div>
          <div className="p-4">
            <div>
              <p className="text-bold">Responsibilities</p>
            </div>
            <div className="my-4">
              <p className="text-sm text-gray-500">
                As a Product Designer, you will work within a Product Delivery
                Team fused with UX, engineering, product and data talent. You
                will help the team design beautiful interfaces that solve
                business challenges for our clients. We work with a number of
                Tier 1 banks on building web-based applications for AML, KYC and
                Sanctions List management workflows. This role is ideal if you
                are looking to segue your career into the FinTech or Big Data
                arenas.
              </p>
            </div>
          </div>
          <div className="p-4">
            <div>
              <p className="text-bold">Qualification</p>
            </div>
            <div className="my-4">
              <p className="text-sm text-gray-500">
                As a Product Designer, you will work within a Product Delivery
                Team fused with UX, engineering, product and data talent. You
                will help the team design beautiful interfaces that solve
                business challenges for our clients. We work with a number of
                Tier 1 banks on building web-based applications for AML, KYC and
                Sanctions List management workflows. This role is ideal if you
                are looking to segue your career into the FinTech or Big Data
                arenas.
              </p>
            </div>
          </div>
          <div className="p-4">
            <div>
              <p className="text-bold">Skills & Experience</p>
            </div>
            <div className="my-4">
              <p className="text-sm text-gray-500">
                As a Product Designer, you will work within a Product Delivery
                Team fused with UX, engineering, product and data talent. You
                will help the team design beautiful interfaces that solve
                business challenges for our clients. We work with a number of
                Tier 1 banks on building web-based applications for AML, KYC and
                Sanctions List management workflows. This role is ideal if you
                are looking to segue your career into the FinTech or Big Data
                arenas.
              </p>
            </div>
          </div>
          <div className="p-4 flex">
            <p>Share this Job: </p>
          </div>
        </div>
        <div className="w-4/5 border border-gray-200 mt-4 p-4">
          <div>
            <p className="text-bold text-xl">Job overview</p>
          </div>
          <div className="flex p-4 gap-x-2">
            <img className=" rounded-xl w-8 h-8 " src={service.image[0]} />
            <div className="flex flex-col">
              <p className="text-bold">Job Title</p>
              <p className="text-sm">product designer</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Jobs;

import { useEffect, useState } from "react";
import Heading from "../heading";

import ServiceComponent from "./service_component";
import { getData } from "@/services/gateway";
import { useDispatch, useSelector } from "react-redux";
import { getAllServices } from "@/redux/reducers/servicesSlice";
const Trending = () => {
  const dispatch = useDispatch();
  const services_data = useSelector((state) => state.services);

  const [loading, SetLoading] = useState(false);
  const [error, setError] = useState(null);

  const getServices = async () => {
    try {
      SetLoading(true);
      const results = await getData("gig/all/");

      if (results.data && results.data.length) {
        //dispatch the data to the state

        dispatch(getAllServices(results.data));
      }
      SetLoading(false);
    } catch (error) {
      SetLoading(false);
      setError(error);
    }
  };

  useEffect(() => {
    getServices();
  }, []);

  return (
    <div className="mt-4 flex   pb-20  flex-col justify-center items-center bg-slate-50 ">
      <Heading
        title={" Trending Jobs"}
        description={"Check out the popular services"}
        link={"Popular Jobs"}
        route={"service"}
      />
      {
        <ServiceComponent
          data={services_data && services_data.services}
          isCarousel={true}
        />
      }
    </div>
  );
};

export default Trending;

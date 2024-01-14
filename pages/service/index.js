import ServiceComponent from "@/components/trending_services/service_component";
import { useSelector } from "react-redux";

const AllServices = () => {
  const services = useSelector((state) => state.services);

  return (
    <div class="flex flex-wrap md:px-16   2xl:h-5/6   h-fit py-60 px-10  2xl:ml-80">
      <ServiceComponent
        data={services.services && services.services}
        isCarousel={false}
      />
    </div>
  );
};
export default AllServices;

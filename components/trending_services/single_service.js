import { useRouter } from "next/router";

const SingleService = (props) => {
  console.log(props, "tsingkeserrrvise");
  const router = useRouter();
  const { id } = router.query;
  // const service =  props.services.find((s)=> s.id = id)
  //   console.log(service, "servise");
  return <div>SingleService</div>;
};

export default SingleService;

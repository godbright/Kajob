import SingleImageCarousel from "../common/SingleImageCarousel";

const WorKWith = () => {
  const worked = [
    {
      name: "TPSF",
      logo: "/kafee.png",
    },
    {
      name: "TPSF",
      logo: "/fl.png",
    },
    {
      name: "TPSF",
      logo: "/haraka.jpeg",
    },
    {
      name: "TPSF",
      logo: "/node.png",
    },
  ];
  return (
    <div>
      <div className=" bg-slate-50 pb-6">
        <p className="text-lg  text-center">Trusted with & Worked with</p>
      </div>
      <SingleImageCarousel data={worked} />
    </div>
  );
};
export default WorKWith;

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
    <div className="mt-6">
      <SingleImageCarousel data={worked} />
    </div>
  );
};
export default WorKWith;

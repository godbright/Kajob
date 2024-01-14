const Stats = () => {
  const stats = [
    {
      name: "Freelancers",
      number: 1000,
    },
    {
      name: "Funds Disbursed",
      number: 500,
    },
    {
      name: "People reached",
      number: 1000,
    },
    {
      name: "People reached",
      number: 1000,
    },
  ];
  return (
    <div className="p-10  md:py-20 justify-center bt-gray-100 flex flex-col md:flex-row     ">
      {/* layouting in a loop should stay outside of the looped div */}
      <div className="grid grid-cols-2 gap-10 md:gap-0 w-full md:justify-center  md:flex">
        {stats.length &&
          stats.map((data, index) => {
            return (
              <div key={index} className="md:mx-10 md:max-w-md ">
                <div className="  text-center ">
                  <p className=" text-4xl  text-green-500 font-bold font-mono">
                    {data.number}
                  </p>

                  <p className="   font-light text-2xl">{data.name}</p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};
export default Stats;

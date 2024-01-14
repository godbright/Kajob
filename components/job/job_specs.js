const JobSpecs = (props) => {
  return (
    <div className="px-4 py-1">
      <div className=" border border-gray-200 p-2">
        <p className="text-sm text-gray-400 my-2">{props.title}</p>
        <p className="text-bold">{props.data}</p>
      </div>
    </div>
  );
};

export default JobSpecs;

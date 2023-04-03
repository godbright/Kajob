import { BsCodeSlash } from "react-icons/bs";
import { MdArrowForwardIos } from "react-icons/md";
import Heading from "../heading";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getData } from "@/services/gateway";
import { getAllCategories } from "@/redux/reducers/jobsCategoriesSlice";

const Categories = () => {
  const dispatch = useDispatch();
  const categories_data = useSelector((state) => state.categories);
  const [loading, isLoading] = useState(false);
  const [error, isError] = useState(null);
  // getAllCategories
  const getCategories = async () => {
    try {
      isLoading(true);
      const results = await getData("categories/all");
      if (results.data.length) {
        dispatch(getAllCategories(results.data));
        isLoading(false);
      }
    } catch (error) {
      isLoading(false);
      isError(error);
    }
  };

  useEffect(
    () => {
      getCategories();
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
          title={" Browse Jobs categories"}
          description={"We offer a pull of many jobs"}
          link={"All categories"}
        />

        <div className="mt-4 2xl:w-4/6  2xl:ml-80  px-12 md:px-16 ">
          <div className="grid  grid-cols-2   md:grid-cols-3  gap-x-40  gap-y-20 ">
            {" "}
            {categories_data.categories.length &&
              categories_data.categories.map((cat, index) => {
                return (
                  <div
                    key={index}
                    className=" flex flex-col items-center  mt-2 p-8 hover:shadow-lg    hover:shadow-gray-100"
                  >
                    <div className="h-8/12 w-14 py-4">
                      <img src={cat.image} height={"auto"} width={"auto"}       alt ={"services"}/>
                    </div>
                    <p className="md:text-2xl md:font-medium  text-center  text-sm ">
                      {cat.title}
                    </p>
                    <p className="mt-2 md:text-lg text-gray-400">{cat.desc}</p>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Categories;

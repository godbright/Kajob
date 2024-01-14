import { getData } from "@/services/gateway";
import { useEffect, useState } from "react";

const ExtendedProfile = (props) => {
  const [loading, isLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, isError] = useState(null);

  const getUserInfo = async (userId) => {
    try {
      isLoading(true);

      const results = await getData(`users/single/${userId}`);

      if (results.status == 200) {
        setUser(results.data);
        isLoading(false);
      }
    } catch (error) {
      isLoading(false);
      isError(error);
    }
  };

  useEffect(() => {
    getUserInfo(props.data);
  }, []);
  console.log(user, "tje iusers");
  return (
    <div>
      {
        <div className="flex flex-col  items-start gap-6 mt-10 ">
          <div className="flex ">
            {user && user.img ? (
              <img
                src={user.image}
                className={
                  " rounded-full bg-gray-100   object-cover w-10  h-10"
                }
                alt={"services"}
              />
            ) : (
              <div className="rounded-full  bg-green-400 max-w-fit  mx-2 ">
                <p className=" text-white  text-center px-4 py-2   uppercase">
                  {user && user.FirstName.concat(user.LastName).split("")[0]}
                </p>
              </div>
            )}

            <p className="text-lg text-center">
              {user && `${user.FirstName} ${user.LastName}`}
            </p>
          </div>

          <div className="flex flex-col   border items-start px-10 ">
            <div className=" my-2  ">
              <p className="font-sm font-semibold">From</p>
              <p>{user && user.Country}</p>
            </div>
            <div className=" my-4  ">
              <p className="font-sm font-semibold">Member Since</p>
              <p>{user && user.createdAt}</p>
            </div>
            <div className=" my-4  ">
              <p className="font-sm font-semibold">Phone Number</p>
              <p>{user && user.phoneNumber}</p>
            </div>
            <div className=" my-4  ">
              <p className="font-sm font-semibold">Email</p>
              <p>{user && user.Email}</p>
            </div>
          </div>
        </div>
      }
    </div>
  );
};

export default ExtendedProfile;

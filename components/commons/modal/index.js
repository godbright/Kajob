import { getuserInfo } from "@/redux/reducers/userSlice";
import { postData } from "@/services/gateway";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

const Modal = (props) => {
  const dispatch = useDispatch();
  const [step, setStep] = useState(0);
  const [finished, setFinished] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [email, setEmail] = useState("");
  const [username, SetUserName] = useState("");
  const [password, Setpassword] = useState("");

  useEffect(() => {
    closeModal();
  }, [finished]);

  const verifyEmail = async (email) => {
    setLoading(true);
    const data = await postData("auth/verifyEmail", email);
    if (data.status == 200) {
      setLoading(false);
      setStep(1);
    } else {
      setLoading(false);
      setError("User already exist");
    }
  };
  const registerUser = async (user_data) => {
    const data = await postData("auth/register", user_data);
    if (data.status == 200) {
      setFinished(true);

      setLoading(false);
      dispatch(getuserInfo(data.data));
    } else {
      setLoading(false);
      setError("User already exist");
    }
  };

  // useEffect(() => {}, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    verifyEmail(email);
  };
  const handleFinish = async (e) => {
    e.preventDefault();
    const data = {
      Email: email,
      UserName: username,
      password: password,
    };
    registerUser(data);
  };

  const loginUser = async (user_data) => {
    setLoading(true);

    const data = await postData("auth/login", user_data);

    if (data.status == 200) {
      setFinished(true);
      setLoading(false);
      dispatch(getuserInfo(data.data));
    } else {
      setLoading(false);
      setError("Wrong username or password");
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const data = {
      username: username,
      password: password,
    };
    loginUser(data);
  };

  function closeModal() {
    props.setIsOpen(false);
  }

  function openModal() {
    props.setIsOpen(true);
  }

  return (
    <>
      {props.isereg ? (
        <Transition appear show={props.isOpen} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-50" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-8/12 max-w-xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title>
                      <div className="flex items-center justify-center gap-6 my-6 ">
                        <p className=" text-2xl">Join</p>
                        <div className="  text-green-500  text-2xl ">
                          Ka <span className="text-black  text-2xl">Job</span>{" "}
                        </div>
                      </div>
                    </Dialog.Title>
                    <div className="mt-2 px-6 ">
                      <form
                        className="flex flex-col gap-y-6 "
                        onSubmit={step == 0 ? handleSubmit : handleFinish}
                      >
                        {/* register your input into the hook by invoking the "register" function */}
                        {step == 0 && (
                          <input
                            name="email"
                            type="email"
                            className="py-4  rounded-lg border-2 pl-4 border-gray-200"
                            placeholder="Enter your email"
                            onChange={(e) => {
                              setEmail(e.target.value);
                            }}
                          />
                        )}
                        {step == 1 && (
                          <div className="flex flex-col gap-y-6">
                            <input
                              name="name"
                              className="py-4  rounded-lg border-2 pl-4 border-gray-200"
                              placeholder="Choose username"
                              onChange={(e) => {
                                SetUserName(e.target.value);
                              }}
                            />
                            <input
                              name="password"
                              type="password"
                              className="py-4  rounded-lg border-2 pl-4 border-gray-200"
                              placeholder="Enter password"
                              onChange={(e) => {
                                Setpassword(e.target.value);
                              }}
                            />
                          </div>
                        )}

                        {/* include validation with required or other standard HTML validation rules */}
                        {/* <input
                        {...register("exampleRequired", { required: true })}
                      /> */}
                        {/* errors will return when field validation fails  */}
                        {step == 0 && error && (
                          <span className="text-center text-red-500 text-sm   ">
                            {error}
                          </span>
                        )}

                        {loading ? (
                          <div className="color-green-400 text-center">
                            Loading...
                          </div>
                        ) : (
                          <div className="mt-4  flex justify-center">
                            <button
                              type="submit"
                              className="inline-flex justify-center rounded-md border border-transparent bg-green-500  px-4 py-2 text-sm font-medium text-white hover:bg-green-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-grenb-500 focus-visible:ring-offset-2"

                              // onClick={closeModal}
                            >
                              {step == 0 ? "Continue" : "Register"}
                            </button>
                          </div>
                        )}
                      </form>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      ) : (
        <Transition appear show={props.isOpen} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-50" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-8/12 max-w-xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title>
                      <div className="flex items-center justify-center gap-1 my-6 ">
                        <div className="  text-green-500  text-2xl ">
                          Sign In
                        </div>
                      </div>
                    </Dialog.Title>
                    <div className="mt-2 px-6 ">
                      <form
                        className="flex flex-col gap-y-6 "
                        onSubmit={handleLogin}
                      >
                        <div className="flex flex-col gap-y-6">
                          <input
                            name="name"
                            className="py-4  rounded-lg border-2 pl-4 border-gray-200"
                            placeholder="Enter username"
                            onChange={(e) => {
                              SetUserName(e.target.value);
                            }}
                          />
                          <input
                            name="password"
                            type="password"
                            className="py-4  rounded-lg border-2 pl-4 border-gray-200"
                            placeholder="Enter password"
                            onChange={(e) => {
                              Setpassword(e.target.value);
                            }}
                          />
                        </div>

                        {error && (
                          <span className="text-center text-red-500 text-sm   ">
                            {error}
                          </span>
                        )}

                        {loading ? (
                          <div className="color-green-400 text-center">
                            Loading...
                          </div>
                        ) : (
                          <div className="mt-4  flex justify-center">
                            <button
                              type="submit"
                              className="inline-flex justify-center rounded-md border border-transparent bg-green-500  px-4 py-2 text-sm font-medium text-white hover:bg-green-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-grenb-500 focus-visible:ring-offset-2"

                              // onClick={closeModal}
                            >
                              Login
                            </button>
                          </div>
                        )}
                      </form>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      )}
    </>
  );
};

export default Modal;

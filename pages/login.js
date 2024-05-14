import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import Router from "next/router";
import { FcGoogle } from "react-icons/fc";
import { MdOutlineLock } from "react-icons/md";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useRouter } from "next/router";
import { AUTH_TOKEN } from "../constants";

import { API_URL } from "../config.js";

const Login = () => {
  const [emailValue, setEmailValue] = useState({
    email: "",
  });
  const [passValue, setPassValue] = useState({
    password: "",
  });
  const [showPassword, setShowPasssord] = useState(true);
  const [loading, setLoading] = useState(false);

  const [isMember, setIsMember] = useState(false);
  const { token: loginToken } = useRouter().query;
  const [error, setError] = useState("");

  const handleLoginByQueryToken = async (token) => {
    if (token) {
      localStorage.setItem(AUTH_TOKEN, token);
      setIsMember(true);
      Router.push("/dashboard");
    }
  };

  useEffect(() => {
    handleLoginByQueryToken(loginToken);
  }, [loginToken]);

  useEffect(() => {
    const token = localStorage.getItem(AUTH_TOKEN);
    if (token) {
      setIsMember(true);
      Router.push("/dashboard");
    }
  })

  const saveToken = (token) => {
    console.log("Saving token ", { token });
    if (token) {
      localStorage.setItem(AUTH_TOKEN, token);
      localStorage.setItem("email", emailValue.email);
    }
  };

  const handleEmailValue = (e) => {
    const { name, value } = e.target;
    setEmailValue({
      ...emailValue,
      [name]: value,
    });
    console.log(value);
  };
  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPassValue({
      ...passValue,
      [name]: value,
    });
    console.log(value);
  };
  const handleClickShowPassword = () => {
    setShowPasssord(!showPassword);
  };

  const handleSignup = (e) => {
    e.preventDefault();
    setLoading(true);

    axios
      .post(`${API_URL}/auth/signup`, {
        email: emailValue.email,
        password: passValue.password,
      })

      .then((response) => {
        saveToken(response.data.token);
        // Router.push("/otp");
        setIsMember(true);
      })
      .catch((err) => setError(err.response.data.message))
      .finally(() => setLoading(false));
  };
  // setError(err.response.data.message);
  console.log(error);

  const handleGoogleAuthBtn = (e) => {
    Router.push(`${API_URL}/google`);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);

    axios
      .post(`${API_URL}/auth/login`, {
        email: emailValue.email,
        password: passValue.password,
      })
      .then((response) => {
        console.log(response.data.token);
        setIsMember(true);
        Router.push("/dashboard");
        return response.data;
      })
      .catch((err) => setError(err.response.data.message))
      .finally(() => setLoading(false));
  };

  return (
    <>
      <div className="flex flex-col items-center   md:px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className=" w-[95%]  md:mt-[32px] rounded-[20px] shadow-lg shadow-zinc-300  mt-[-11px] max-w-md xl:p-0">
          <div className="w-full flex flex-col items-center justify-center p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-[1.125em]  flex items-center justify-center font-[500] leading-tight tracking-tight text-gray-900 md:text-2xl">
              Tablecloth Finance
            </h1>
            <h1 className="text-[1rem] font-medium text-center flex items-center justify-center  leading-tight tracking-tight text-gray-900 ">
              Sign in or create an account with Tablecloth Finance
            </h1>
            <div className="space-y-4 md:space-y-6">
              <div className=" border-b">
                <button
                  className={
                    isMember
                      ? "tcf-text-green register py-3 font-normal text-[1.2rem]  border-b-2 w-1/2"
                      : "register text-[1.2rem] w-1/2 hover:tcf-text-green"
                  }
                  onClick={() => setIsMember(true)}
                >
                  Sign in
                </button>
                <button
                  className={
                    isMember
                      ? "register text-[1.2rem] w-1/2  py-3 bg-white hover:tcf-text-green"
                      : "tcf-text-green   py-3 font-normal register text-[1.2rem]  border-b-2 w-1/2"
                  }
                  onClick={() => setIsMember(false)}
                >
                  Create account
                </button>
              </div>
              <div className="flex justify-center ">
                <button
                  onClick={handleGoogleAuthBtn}
                  className="register text-[1.2rem] flex justify-center items-center py-3 px-10 tcf-bg-green hover:tcf-bg-green text-white capitalize rounded-md"
                >
                  <FcGoogle size={26} className="mr-3" />{" "}
                  {isMember ? (
                    <span>sign in with google</span>
                  ) : (
                    <span>sign up with google</span>
                  )}
                </button>
              </div>

              <div className="flex justify-between items-center">
                <div className="w-[38%] h-[1px] bg-gray-400"></div>
                <p>or</p>
                <div className="w-[38%] h-[1px] bg-gray-400"></div>
              </div>
              <div>
                <label className="block mb-2 text-[20px] font-medium text-gray-900 register">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 focus:border-2 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-700 dark:focus:border-blue-500 outline-none"
                  required=""
                  value={emailValue.email}
                  onChange={handleEmailValue}
                />
              </div>

              <label className="block  font-medium text-gray-900 register text-[1.2rem]">
                Password
              </label>

              <div className="relative">
                <input
                  type={showPassword ? "password" : "text"}
                  name="password"
                  className="mt-[-10px]  md:mt-[-16px] bg-gray-50  border-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 focus:border-2 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-700 dark:focus:border-blue-500 outline-none"
                  required=""
                  onChange={handlePasswordChange}
                  value={passValue.password}
                />
                {isMember ? (
                  ""
                ) : (
                  <div className="absolute bottom-[8px] right-4 ">
                    {showPassword ? (
                      <AiOutlineEye
                        onClick={handleClickShowPassword}
                        className="h-6 font-extralight"
                      />
                    ) : (
                      <AiOutlineEyeInvisible
                        onClick={handleClickShowPassword}
                        className="h-6 font-extralight"
                      />
                    )}
                  </div>
                )}
              </div>
              {isMember ? (
                <div className="flex items-start justify-between ">
                  <p></p>
                  <button className="tcf-text-green register text-[1.2rem] mt-[-12px]  md:mt-[-20px]">
                    Forgot password?
                  </button>
                </div>
              ) : (
                ""
              )}

              {isMember ? (
                <button
                  type="submit"
                  onClick={handleLogin}
                  className="w-full text-white tcf-bg-green hover:tcf-bg-green rounded-lg text-[20px] font-extrabold  px-5 py-2.5 text-center bg-primary-600 hover:bg-primary-700 focus:ring-primary-800"
                >
                  {loading ? (
                    <div role="status">
                      <svg
                        className="inline mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-green-500"
                        viewBox="0 0 100 101"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                          fill="currentColor"
                        />
                        <path
                          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                          fill="currentFill"
                        />
                      </svg>
                      <span className="sr-only">Loading...</span>
                    </div>
                  ) : (
                    "Sign In"
                  )}
                </button>
              ) : (
                <button
                  type="submit"
                  onClick={handleSignup}
                  className="w-full register text-[1.2rem] text-white tcf-bg-green hover:tcf-bg-green rounded-lg  font-extrabold  px-5 py-2.5 text-center bg-primary-600 hover:bg-primary-700 focus:ring-primary-800"
                >
                  {loading ? (
                    <div role="status">
                      <svg
                        className="inline mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-green-500"
                        viewBox="0 0 100 101"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                          fill="currentColor"
                        />
                        <path
                          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                          fill="currentFill"
                        />
                      </svg>
                      <span className="sr-only">Loading...</span>
                    </div>
                  ) : (
                    " Create account"
                  )}
                </button>
              )}

              <div className=" text-center flex-col flex items-center justify-center  text-sm font-light">
                <p className="">
                  By continue to use our service, you accept TCF&apos;s
                </p>
                <p className="">
                  <span className="tcf-text-green">Terms of Use</span> and
                  <span className="tcf-text-green"> Privacy Policy</span>
                </p>
              </div>

              <div></div>

              <div className="flex bg-[#ccc] py-3 rounded-md px-5">
                <MdOutlineLock size={27} className="my-auto mr-4" />
                <div className="text-sm">
                  <p>Your info is protected with</p>
                  <p>bank-level security</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {error && (
        <>
          <div className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 md:inset-0 h-modal md:h-full justify-center items-center flex">
            <div className="relative p-4 w-full max-w-md h-full md:h-auto">
              <div className="relative  bg-white rounded-lg shadow dark:bg-gray-700">
                <button
                  type="button"
                  className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                  onClick={() => setError("")}
                >
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRrule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
                <div className="p-6 text-center">
                  <svg
                    aria-hidden="true"
                    className="mx-auto mb-4 w-14 h-14 text-red-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                  <h3 className="mb-5 text-lg  font-semibold">{error}</h3>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Login;

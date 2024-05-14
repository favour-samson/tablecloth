import React, { useEffect } from "react";
import Router from "next/router";
import { AUTH_TOKEN } from "../constants";


const Logout = () => {
  useEffect(() => {
    localStorage.setItem(AUTH_TOKEN, "");
      Router.push("/login");
  })

  return (
    <>
      <div className="flex flex-col items-center   md:px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className=" w-[95%]  md:mt-[32px] rounded-[20px] shadow-lg shadow-zinc-300  mt-[-11px] max-w-md xl:p-0">
          <div className="w-full flex flex-col items-center justify-center p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-[1.125em]  flex items-center justify-center font-[500] leading-tight tracking-tight text-gray-900 md:text-2xl">
            Logging out
            </h1>
          </div>
        </div>
      </div>

    </>
  );
};

export default Logout;

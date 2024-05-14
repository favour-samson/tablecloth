import Router from "next/router";
import React, { useEffect, useState } from "react";
import OtpInput from "react-otp-input";
import styles from "../styles/OTP.module.css";

import { API_URL } from "../config.js";
import axios from "axios";

const OTP = () => {
  const [OTP, setOTP] = useState("");

  const handleChange = (otp) => setOTP(otp);

  const [email, setEmail] = useState("");

  useEffect(() => {
    setEmail(localStorage.getItem("email"));
  }, []);

  const handleVerifyOtp = (e) => {
    e.preventDefault();

    axios
      .post(`${API_URL}/auth/verify`, {
        otp: OTP,
        email,
      })
      .then((response) => {

        Router.push("/dashboard");
      })
      .catch((err) => console.log(err));
  };


  return (
    <div className="flex flex-col items-center   md:px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div className=" w-[95%]  md:mt-[32px] rounded-[20px] shadow-lg shadow-zinc-300  mt-[-11px] max-w-md xl:p-0">
        <div className="w-full flex flex-col items-center justify-center p-6 space-y-4 md:space-y-6 sm:p-8">
          <p className="font-semibold text-[22px] w-full px-4 text-center ">
            We sent you a code to verify your you account
          </p>

          <p>Enter your OTP code here</p>
          <OtpInput
            value={OTP}
            onChange={handleChange}
            numInputs={6}
            separator={<span>-</span>}
            containerStyle={`${styles.inputContainer}`}
            inputStyle={`${styles.input} wrap`}
          />

          <p>I didn&apos;t receive a code</p>
          <button
            onClick={handleVerifyOtp}
            className="w-full text-white tcf-bg-green hover:tcf-bg-green rounded-lg text-[20px] font-extrabold  px-5 py-2.5 text-center bg-primary-600 hover:bg-primary-700 focus:ring-primary-800"
          >
            verify
          </button>
        </div>
      </div>
    </div>
  );
};

export default OTP;

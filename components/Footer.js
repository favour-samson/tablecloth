import Image from 'next/image';
import React from 'react'
import { AiFillGithub, AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai';
import { RiFacebookFill } from 'react-icons/ri';
import { footerlogo } from '../assets';

const Footer = () => {
  return (
    <div className=" footer static bottom-0 w-full  bg-[#58cb9a] flex lg:h-[449px]">
      <div className="px-4 mx-auto w-[1448px]">
        <div className="flex lg:flex-row justify-between flex-col">
          <div className="max-w-[397px] lg:h-[224px] flex items-center justify-between lg:justify-start">
            <div className=" max-w-[1197px] pt-6 lg:pt-0  ">
              <div className="hidden md:block">
                <Image src={footerlogo} alt="" width="263px" height="129px" />
              </div>

              <div className="footerInputDiv max-w-[330px] md:max-w-[500px]  mx-auto lg:mt-[30px] flex justify-between lg:justify-start items-center overflow-hidden">
                <input
                  placeholder="Enter your email"
                  type="text"
                  className="bg-[#58cb9a] max-w-[132px] lg:max-w-[132px] md:max-w-[300px] text-white placeholder:text-white pl-3 outline-none focus:border-none"
                />
                <button className="footerInputButton py-[12px] px-[21px]  lg:py-[17px] lg:px-[41px]">
                  Get Started
                </button>
              </div>
            </div>
          </div>
          <div className=" flex gap-3 lg:flex-row flex-col pb-4 lg:pb-0">
            <div className="max-w-[166px] lg:h-[195px]">
              <p className="footerInnerRightDivHead text-[20px]  lg:text-[16px] pt-3">
                Company
              </p>
              <div className="pt-8 footerInnerRightDivText text-[16px]">
                <p className="">About Us</p>
                <p className="lg:mt-4">Money Tools</p>
                <p className="lg:mt-4">Mortgage Chart</p>
                <p className="lg:mt-4 ">Login / Signup</p>
              </div>
            </div>
            <div className="max-w-[166px] lg:h-[195px]">
              <p className="footerInnerRightDivHead text-[20px] lg:text-[16px] pt-3">
                About Us
              </p>
              <div className="pt-8 footerInnerRightDivText text-[16px]">
                <p className="">Payment Plans</p>
                <p className="lg:mt-4">Make saving More</p>
                <p className="lg:mt-4">Tax Calculator</p>
                <p className="lg:mt-4">Login / Signup</p>
              </div>
            </div>
            <div className="max-w-[397px] lg:h-[224px]">
              <p className="footerInnerRightDivHead  text-[20px] lg:text-[16px] pt-3">
                How our site works
              </p>
              <p className="pt-8  footerInnerRightDivText2 max-w-[346px]  text-[16px] lg:leading-[24px] ">
                Tableclothfinance.com is an independent, advertising-supported
                publisher and comparison service. The financial information is
                provided for general informational and educational purposes only
                and is not a substitute for professional advice.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-[1448px] lg:pt-8 pb-10 lg:pb-0  flex flex-col">
          <div className="border-t opacity-[0.1]  max-w-[1448px] border-white h-[1px]"></div>
          <div className="flex gap-5 pt-5">
            <AiFillGithub className="text-[25px]" color="white" />
            <AiOutlineInstagram className="text-[25px]" color="white" />
            <RiFacebookFill className="text-[25px]" color="white" />
            <AiOutlineTwitter className="text-[25px]" color="white" />
          </div>
          <p className="text-white lg:pt-3 pt-9 text-[14px]">
            © 2022 TCL All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer
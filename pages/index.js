import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { HiArrowNarrowRight } from "react-icons/hi";
import {FaBars} from 'react-icons/fa'

import { useEffect, useState } from "react";
import { analytics, bigBlog, dashboard, logo } from "../assets";

import {
  about1,
  about2,
  brands,
  features,
  landingpageBlog,
  navLinks,
} from "../constants";
// import styles from "../styles/Home.module.css";

import styles from "../constants/styles";
import Footer from "../components/Footer";

export default function Home() {
  const [bg, setBg] = useState(false);

  useEffect(() => {
    // add event listener
    window.addEventListener("scroll", () => {
      // when scrollY is bigger than 50px setBg to true, else false
      return window.scrollY > 50 ? setBg(true) : setBg(false);
    });
  });

  return (
    <div>
      <div
        className={`${
          bg ? "bg-white  shadow-md" : ""
        } fixed z-10 w-full  transition-all duration-200 `}
      >
        <nav className=" w-full flex h-20  max-w-[1448px] mx-auto px-4">
          <div className="flex items-center flex-col justify-center">
            <h1 className="text-[47px]  leading-10 font-bold text-[#36906A] ">
              TCF
            </h1>
            <p className="text-[12px] ">tablecloth finance</p>
          </div>
          <ul className="md:flex hidden justify-end items-center flex-1 px-10">
            <div className="flex ">
              {navLinks.map((nav, index) => (
                <li
                  key={index}
                  className={`cursor-pointer text-[14px] ${
                    index === navLinks.length - 1 ? "mr-20" : "mr-10"
                  }`}
                >
                  <Link href="/">
                    <a className="font-medium">{nav.title}</a>
                  </Link>
                </li>
              ))}
            </div>
            <div className="text-[#36906a] text-[14px]">
              <Link href="/login">
                <a className="capitalize mr-5 font-medium cursor-pointer">
                  sign in
                </a>
              </Link>
              <Link href="/">
                <button className=" font-medium capitalize border-2 border-[#36906a] px-4 py-3 cursor-pointer rounded-md ">
                  create account
                </button>
              </Link>
            </div>
          </ul>

          <div className="flex flex-1 items-center justify-end md:hidden">
            <FaBars size={32} />
          </div>
        </nav>
      </div>
      <div className=" ">
        <div className="h-[558px] hero  bg-right bg-cover bg-no-repeat relative px-5">
          <h1 className="lg:text-[72px] md:text-[50px] sm:text-[30px] text-[23px] font-semibold md:leading-[58px] text-[#12141D] text-center pt-[140px]  md:pt-[178px]">
            Take control of your money
          </h1>
          <p className="sm:pt-[26px] pt-4 text-center  md:text-[20px] font-semibold text-[#333333]">
            Come to discover money tips, objective advice, and free tools to
            help manage your money.
          </p>
        </div>
        <div className=" absolute w-full  flex justify-center top-48 px-5 sm:px-0 md:px-4  md:top-64">
          <div className=" pt-[110px] grid gap-8 grid-cols-3 lg:grid-cols-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="md:w-[253px] introcard sm:w-[150px]  h-[110px]  flex items-center justify-center  flex-col featurebox   rounded-[10px]"
              >
                <Image src={feature.img} width="30%" height="30%" alt="" />
                <p className="md:pt-[24px] font-semibold text-center text-[#000000] leading-[24px]">
                  {feature.title}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="  bg-white">
          <div className="h-40 w-full md:hidden block"></div>
          <p className=" pt-[150px] md:block hidden  max-w-[219px] mx-auto text-center text-[20px] font-semibold leading-[26px] uppercase text-[#333333]">
            as seen on
          </p>
          <div className="pb-[40px]   hidden md:flex justify-center items-center gap-20">
            {brands.map((brand, index) => (
              <div key={brand.id} className="pt-[37px]">
                <Image src={brand.img} alt={brand.id} />
              </div>
            ))}
          </div>
        </div>

        <div className=" mx-auto lg:h-[1124px]  bg-[#F9F9FF] px-5">
          <div className="max-w-[1114px] mx-auto pt-[60px] flex md:flex-row text-center md:text-left  flex-col items-center justify-between">
            <h1 className="text-[20px] lg:text-[40px] md:text-[25px]  lg:leading-[60px] max-w-[544.97px] font-semibold text-[#12141D]">
              Tablecloth Finance is your hub for money matters
            </h1>
            <p className="text-[16px] leading-[26px] max-w-[453.48px] font-normal text-[#52525B]">
              Tablecloth Finance is your hub for money matters, news, content,
              and tools. Whether you’re working on becoming debt free, buying a
              house, exploring investment opportunities.
            </p>
          </div>

          <div className=" flex justify-center pt-[40px] px-3 pb-8 lg:pb-0">
            <Image src={dashboard} width="1120px" height="789px" alt="img" />
          </div>
        </div>
        <div className=" pt-[70px]  xl:px-0 bg-white px-5">
          <div className="max-w-[1114px] mx-auto flex md:flex-row flex-col items-center justify-between ">
            <div className="">
              <Image
                src={analytics}
                width=" 539.74px"
                height="453.96px"
                alt=""
              />
            </div>
            <div>
              <h1 className="text-[20px] lg:text-[40px] md:text-[25px]   lg:leading-[52px] max-w-[416px] font-semibold text-[#12141D]">
                Personal finance made simple
              </h1>
              <p className="text-[16px] pt-3 leading-[26px] max-w-[453.48px] font-normal text-[#52525B]">
                Tablecloth Finance is your hub for money matters, news, content,
                and tools. Whether you’re working on becoming debt free, buying
                a house, exploring investment opportunities, or planning for
                retirement, we’ll guide you along the path to financial freedom.
              </p>
              <div className="flex pt-3 items-center  gap-4">
                <p className="text-[16px]  leading-[26px] max-w-[453.48px] font-normal  text-[#18181B]">
                  Read more
                </p>
                <HiArrowNarrowRight size={22} />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#F9F9FF] md:h-[891px] pb-12 md:pb-0 pt-[60px] px-5 xl:px-0">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-[20px] lg:text-[40px] md:text-[25px]  text-center lg:leading-[52px] max-w-[607px] font-semibold text-[#12141D]">
              Top Financial Calculators
            </h1>
            <p className="text-[16px] text-center pt-3 leading-[26px] max-w-[417px] font-normal text-[#52525B]">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat. ``
            </p>
          </div>

          <div className="  flex flex-col items-center  md:flex-row justify-center pt-12 gap-8">
            {about1.map((about, index) => (
              <div
                key={about.id}
                className="md:max-w-[359.51px] w-full px-8 about h-[263px]"
              >
                <div className="pt-8">
                  <Image src={about.img} width="60px" height="62" alt="" />
                </div>

                <h1 className="pt-6 text-[20px] md:text-[24px] leading-[24px] max-w-[184px] font-medium text-[#000000]">
                  {about.title}
                </h1>
                <p className="pt-4 md:text-[18px]  leading-[28px] max-w-[273.09pxpx] font-normal text-[#52525B]">
                  {about.desc}
                </p>
              </div>
            ))}
          </div>

          <div className=" flex justify-center items-center flex-col  md:flex-row   pt-8 gap-8">
            {about2.map((about, index) => (
              <div
                key={about.id}
                className={`${
                  index === 1 ? " md:w-[739.75px] " : "md:w-[359.51px] w-full"
                } px-8 about h-[263px]`}
              >
                <div className="pt-8">
                  <Image src={about.img} width="60px" height="62" alt="" />
                </div>

                <h1 className="pt-6 text-[20px] md:text-[24px] leading-[24px] w-[184px] font-medium text-[#000000]">
                  {about.title}
                </h1>
                <p
                  className={`pt-4 md:text-[18px]  leading-[28px] ${
                    index === 1 ? " w-[ 653.33px]" : "w-[273.09pxpx]"
                  }  font-normal text-[#52525B]`}
                >
                  {index === 1
                    ? "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque enim convallis faucibus porttitor sed. Id viverra quam vel elit quis morbi enim."
                    : about.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className=" pt-[60px] bg-white">
          <div className="max-w-[1114px] mx-auto px-5 lg:px-0">
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-[20px] lg:text-[40px] md:text-[25px] text-center lg:leading-[52px] max-w-[573px] font-semibold text-[#12141D]">
                New Content from TCF
              </h1>
              <p className="text-[16px] text-center pt-3 leading-[26px] max-w-[724px] font-normal text-[#52525B]">
                We’ve done the homework to inspire you. Whether you are a newbie
                to the world of personal finance or a budget geek, sit back and
                read some of our latest articles that cover all topics related
                to money.
              </p>
            </div>
            <div className="">
              <div className="mt-[50px] relative">
                <Image src={bigBlog} width="1112px" height="552px" alt="" />
                <div className=" ">
                  <div className="w-full h-full absolute top-0 overlay "></div>
                </div>

                <button className="right-[40px] absolute w-[116px] h-[34px] bg-white rounded-md top-8">
                  Business
                </button>
                <h1 className="md:bottom-[90px] bottom-[50px] left-3 md:left-14 absolute text-[23px] md:text-[32px]  leading-[39px] max-w-[730px] font-semibold text-[#FFFFFF]">
                  Savings Account 101: Why You Need One and How to Build Your
                  Own
                </h1>
                <p className="md:bottom-[40px] bottom-[20px] left-3 md:left-14 absolute text-[20px]  leading-[24px] max-w-[167px] font-medium text-[#FFFFFF]">
                  August 31, 2022
                </p>
              </div>
              <div className="flex flex-col md:flex-row justify-between mt-8">
                {landingpageBlog.map((post, index) => (
                  <div
                    key={post.id}
                    className="landpost md:w-[535px] md:h-[204px] px-6 pt-4 mb-7 md:mb-0"
                  >
                    <div>
                      <button className="w-[118px] h-[34px] bg-[#36906A] rounded-md text-white">
                        {post.buttonText}
                      </button>
                      <div className="flex pt-5 gap-5">
                        <div>
                          <Image
                            src={post.img}
                            alt={post.id}
                            width=" 159.91px"
                            height="127px"
                          />
                        </div>
                        <div className="flex flex-col">
                          <h1 className="md:text-[18px]  pt-3 leading-[28px] max-w-[292.49px] font-semibold text-[#000000]">
                            {post.title}
                          </h1>
                          <p className="text-[16px]  pt-3 leading-[24px] max-w-[288.9px] font-normal text-[##12141D]">
                            {post.date}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex items-center  pb-32 pt-8 justify-center">
                <p className="text-[16px] border-b-2 border-[#12141D] leading-[24px] text-center max-w-[149px] font-semibold text-[##12141D]v">
                  Read all blog posts
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

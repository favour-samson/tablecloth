import React, { useEffect, useState } from "react";
import Image from "next/image";
import Router from "next/router";
import { RiDashboardLine, RiFacebookFill } from "react-icons/ri";
import { BsPerson } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import {
  AiOutlineSearch,
  AiOutlineMinusCircle,
  AiFillGithub,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";
import { bar, footerlogo, imgPerson, imgPersonsdie, logo } from "../assets";
import {
  AUTH_TOKEN,
  blogPosts,
  dashboardfeatures,
  investments,
  posts,
  stats,
} from "../constants";
import Footer from "../components/Footer";
import Head from "next/head";

const Dashboard = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle((prev) => !prev);
    console.log('clicked')
  };

  // useEffect(() => {
  //   const token = localStorage.getItem(AUTH_TOKEN);
  //   if (!token) {
  //     Router.push("/login");
  //   }
  // });

  return (
    <div>
      <div className="dashboardbg">
        <div className=" fixed  w-full top-0 z-20 px-5 py-[11px] flex items-center justify-between nav  border-[#B7BCC9] border-b-2">
          <div className="flex items-center gap-4 justify-center">
            <div onClick={handleToggle} className="cursor-pointer">
              <Image src={bar} alt="" width="26px" height="15px" />
            </div>

            <Image src={logo} alt="" width="64px" height="39px" />
          </div>
          <div className="flex items-center gap-4 justify-center">
            <CgProfile className="text-[30px] " />
            <AiOutlineSearch className="text-[30px]" />
          </div>
        </div>
        <div className="flex">
          <div
            className={`${
              toggle
                ? "hidden"
                : "fixed  bg-white  z-10 bottom-0 h-14 w-full px-3 flex justify-between items-center md:w-[69px] md:block md:static md:h-auto md:flex-col md:text-center md:gap-8 md:px-4  md:pt-[80px]"
            } `}
          >
            <div className="#36906a w-[50%] md:block flex items-center justify-center">
              <RiDashboardLine className="text-[30px]" color="#36906a" />
            </div>
            <div className=" w-[50%] md:block flex items-center justify-center">
              <BsPerson className="text-[30px]  md:mt-6" />
            </div>
          </div>
          <div className="max-w-[1448px] mx-auto flex">
            <div className="flex">
              <div className="bg-[#F9F9FF] w-full flex xl:flex-row flex-col ">
                <div className="max-w-[1047px] flex flex-col">
                  <div className="px-3 lg:px-8 ">
                    <h1 className="pt-[70px] max-w-[580px] font-semibold md:text-[52px] text-[35px] leading-10 mt-16  md:leading-[54px] text-[#12141D]">
                      Welcome, Muhammad
                    </h1>
                    <p className="font-normal  lg:text-[20px]  leading-[32px] text-[#12141D] tracking-[-0.5px]">
                      Ready to up your money game? Let’s go.
                    </p>
                    <div className="flex  pt-6">
                      {investments.map((investment, index) => (
                        <div key={index} className=" flex flex-col ">
                          <div className="investment max-w-[70px] h-[70px] md:max-w-[105px] md:h-[105px] ">
                            <Image
                              src={investment.img}
                              alt={investment.id}
                              width="40px"
                              height="40px"
                            />
                          </div>
                          <p className="md:max-w-[124px] max-w-[100px] text-center text-[13px] lg:text-[16px] leading-[17px] pt-3">
                            {investment.title}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className=" flex   pt-9 md:gap-8 gap-6 max-w-[789px]">
                      {stats.map((stat, index) => (
                        <div
                          key={index}
                          className="stats lg:w-[240px] w-[90px]  sm:w-[120px] md:w-[200px] flex "
                        >
                          <div className=" h-[116px] text-center  flex flex-col md:flex-row justify-center items-center lg:pl-7">
                            <div className="">
                              <Image
                                src={stat.img}
                                alt={stat.id}
                                width="40px"
                                height="40px"
                              />
                            </div>
                            <div className="lg:pl-4">
                              <h1 className="font-semibold text-[14px] md:text-[20px] leading-[24px] tracking-[1.5px] text-[#000000]">
                                {stat.num}
                              </h1>
                              <p className="font-medium md:text-[16px] text-[12px]   md:leading-[26px]">
                                {stat.title}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="dashboardfeatures  px-5 mt-10">
                      <div className="flex w-full justify-between items-center">
                        <div>
                          <h1 className="lg:text-[24px] pt-[30px] font-semibold  lg:leading-[30px] tracking-[0.025em] text-[#000000]">
                            Finish linking your accounts
                          </h1>
                          <p className="dashp lg:text-[20px] ">
                            This’ll give you a more accurate view of your neth
                            worth
                          </p>
                        </div>
                        <div>
                          <AiOutlineMinusCircle size={25} />
                        </div>
                      </div>
                      <div>
                        <p className="dashp2 lg:text-[20px] pt-[17px] lg:pt-[32px]">
                          0 of 4 core account types linked
                        </p>
                      </div>
                      <div className="pt-[10px] lg:pt-20">
                        <div>
                          {dashboardfeatures.map((feature, index) => (
                            <div key={index}>
                              <div
                                className={`border-t-2 py-7 border-[#F5F5F5]  flex items-center justify-between `}
                              >
                                <div className="flex">
                                  <Image src={feature.img} alt={feature.id} />
                                  <div className="pl-4">
                                    <p className="font-bold tracking-[0.025em] leading-[20px] text-[13px] lg:text-[16px]">
                                      {feature.title}
                                    </p>
                                  </div>
                                </div>
                                <div className="text-[#36906A]  cursor-pointer lg:text-[16px] text-[11px] leading-[20px] tracking-[0.025em] font-semibold">
                                  {feature.text}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="md:max-w-[959px]">
                      <h1 className="lg:text-[24px] pt-[30px] font-semibold leading-[30px] tracking-[0.025em] text-[#000000]">
                        Finish linking your accounts
                      </h1>
                      <div className="flex flex-col gap-5 md:flex-row justify-between pt-[30px]">
                        {posts.map((post, index) => (
                          <div
                            key={index}
                            className="post  max-w-[465px] h-[251px] border-t-[5px] border-[#A0A1A3] rounded-md px-5 "
                          >
                            <h1 className="postTitle pt-5 lg:text-[20px]">
                              {post.title}
                            </h1>
                            <p className="postDesc pt-3 lg:text-[20px]">
                              {post.desc}
                            </p>
                            <p className="postButtonText pt-[30px] text-[16px] md:w-[98px]">
                              {post.buttonText}
                            </p>
                            <div className="lg:pt-[60px] pt-[40px] flex justify-between">
                              <div></div>
                              <div className="flex gap-5 items-center justify-center">
                                <p className="font-medium leading-[13px] tracking-[0.025em] text-[14px] text-[rgba(0, 0, 0, 0.7)]">
                                  {post.question}
                                </p>
                                <div className="flex gap-6">
                                  <Image src={post.img1} alt={post.title} />
                                  <Image src={post.img2} alt={post.title} />
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="max-w-[959px]">
                      <h1 className="lg:text-[24px] pt-[30px] font-semibold leading-[30px] tracking-[0.025em] text-[#000000]">
                        Finish linking your accounts
                      </h1>
                      <div className="flex flex-col md:flex-row justify-between">
                        <div className="card lg:h-[447px] max-w-[465px] px-5 mt-[30px]">
                          <div className="pt-[25px]">
                            <Image
                              src={imgPerson}
                              width="425px"
                              height="233px"
                              alt=""
                            />
                          </div>

                          <h1 className="cardTitle max-w-[410px] lg:text-[20px] pt-4">
                            First home? Forever home? Easily comapre and find
                            the right mortgage for you.
                          </h1>
                          <button className="cardButton pt-5 pb-8 lg:pt-[60px]">
                            Get started
                          </button>
                        </div>
                        <div className="border-t-2 mt-[30px] border-[#D9D9D9] ">
                          <div className="lg:max-w-[464px]  mt-[30px] flex gap-6">
                            <div>
                              <Image
                                src={imgPersonsdie}
                                width="87px"
                                height="89px"
                                alt=""
                              />
                            </div>
                            <div>
                              <h3 className="cardLeftTitle text-[14px] lg:text-[16px] max-w-[500px]">
                                Lend your ears to NerdWallet’s SmartMoney
                                podcast, hosted by our own in-house financial
                                experts.
                              </h3>
                              <h3 className="cardLeftButton text-[14px] pt-4 lg:text-[16px] max-w-[123px] ">
                                See all episodes
                              </h3>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="py-7"></div>
                    </div>
                  </div>
                </div>

                <div
                  div
                  className="width2 max-w-[324px] mb-10  ml-[16px] lg::ml-[-10px] md:mt-28 px-3 "
                >
                  <p className="blogpostsHeading max-w-[230px] text-[12px] pt-8">
                    FRIDAY, SEPTEMBER 2
                  </p>
                  <p className="blogpostsTitle max-w-[166px] text-[16px] lg:text-[20px]  pt-4">
                    TableCloth Finance
                  </p>
                  <div className="pt-10 ">
                    {blogPosts.map((blogPost, index) => (
                      <div key={blogPost.id} className="border-t-2 py-8">
                        <div>
                          <div className="flex justify-between">
                            <div>
                              <p className="max-max-w-[84px] h-[13px] font-bold text-[10px] leading-[169.02%] tracking-[0.27em] text-[#36906A]">
                                {blogPost.head}
                              </p>
                              <h1 className="max-w-[212px] h-[86px]  font-medium lg:text-[20px] leading-[140%] tracking-[-0.01em] text-[#000000] pt-2">
                                {blogPost.title}
                              </h1>
                            </div>
                            <div className="">
                              <Image src={blogPost.img} alt={blogPost.id} />
                            </div>
                          </div>
                          <p
                            className={`max-w-[212px] h-[20px] font-medium text-[14px] leading-[140%] tracking-[0.025em] text-[rgba(0,0, 0, 0.7)] ${
                              index === 2 ? "pt-8" : ""
                            } ${index === 1 ? "pt-8" : ""}`}
                          >
                            {blogPost.read}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Dashboard;



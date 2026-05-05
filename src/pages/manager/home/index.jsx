import React from "react";
import Courses from "./courses";
import Students from "./students";
import { useLoaderData, useNavigation } from "react-router-dom";
import { StatCardSkeleton } from "../../../components/LoadingSkeleton";

export default function ManagerHomePage() {
    const overview = useLoaderData()
    const navigation = useNavigation()
    const isLoading = navigation.state === 'loading'

  return (
    <>
      <header className="flex flex-col md:flex-row items-start md:items-center justify-between gap-[15px] md:gap-[30px]">
        <div>
          <h1 className="font-extrabold text-xl md:text-[28px] leading-[32px] md:leading-[42px]">
            Overview
          </h1>
          <p className="text-[#838C9D] mt-1 text-sm md:text-base">
            Grow your company quickly
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2 md:gap-3 w-full md:w-auto">
          <a
            href="#"
            className="flex-1 md:flex-none rounded-full border border-[#060A23] p-[12px_16px] md:p-[14px_20px] font-semibold text-sm md:text-base text-center md:text-nowrap hover:bg-[#F8FAFB] transition-all duration-300"
          >
            Customize
          </a>
          <a
            href="#"
            className="flex-1 md:flex-none rounded-full p-[12px_16px] md:p-[14px_20px] font-semibold text-sm md:text-base text-[#FFFFFF] bg-[#662FFF] text-center md:text-nowrap hover:bg-[#5528CC] transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Export Data
          </a>
        </div>
      </header>
      <section
        id="Stats"
        className="flex flex-col lg:flex-row rounded-[30px] p-[20px] md:p-[30px] gap-[20px] md:gap-[30px] bg-[#F8FAFB]"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:w-[500px] gap-[15px] md:gap-[30px]">
          {isLoading ? (
            <>
              <StatCardSkeleton />
              <StatCardSkeleton />
              <StatCardSkeleton />
              <StatCardSkeleton />
            </>
          ) : (
            <>
              <div className="flex flex-col rounded-[20px] p-4 md:p-5 gap-5 bg-white shadow-[0_4px_4px_0_#E0E2EF] hover:shadow-lg transition-shadow duration-300">
                <img
                  src="/assets/images/icons/profile-2user-purple.svg"
                  className="w-[40px] h-[40px] md:w-[46px] md:h-[46px]"
                  alt="icon"
                />
                <div>
                  <p className="font-extrabold text-xl md:text-2xl leading-[30px] md:leading-[36px]">
                    {overview?.totalStudent || 0}
                  </p>
                  <p className="text-[#838C9D] text-sm md:text-base">
                    Total Students
                  </p>
                </div>
              </div>
              <div className="flex flex-col rounded-[20px] p-4 md:p-5 gap-5 bg-white shadow-[0_4px_4px_0_#E0E2EF] hover:shadow-lg transition-shadow duration-300">
                <img
                  src="/assets/images/icons/note-favorite-purple.svg"
                  className="w-[40px] h-[40px] md:w-[46px] md:h-[46px]"
                  alt="icon"
                />
                <div>
                  <p className="font-extrabold text-xl md:text-2xl leading-[30px] md:leading-[36px]">
                    {overview?.totalCourse || 0}
                  </p>
                  <p className="text-[#838C9D] text-sm md:text-base">
                    Total Courses
                  </p>
                </div>
              </div>
              <div className="flex flex-col rounded-[20px] p-4 md:p-5 gap-5 bg-white shadow-[0_4px_4px_0_#E0E2EF] hover:shadow-lg transition-shadow duration-300">
                <img
                  src="/assets/images/icons/video-play-purple.svg"
                  className="w-[40px] h-[40px] md:w-[46px] md:h-[46px]"
                  alt="icon"
                />
                <div>
                  <p className="font-extrabold text-xl md:text-2xl leading-[30px] md:leading-[36px]">
                    {overview?.totalVideo || 0}
                  </p>
                  <p className="text-[#838C9D] text-sm md:text-base">
                    Video Content
                  </p>
                </div>
              </div>
              <div className="flex flex-col rounded-[20px] p-4 md:p-5 gap-5 bg-white shadow-[0_4px_4px_0_#E0E2EF] hover:shadow-lg transition-shadow duration-300">
                <img
                  src="/assets/images/icons/note-purple.svg"
                  className="w-[40px] h-[40px] md:w-[46px] md:h-[46px]"
                  alt="icon"
                />
                <div>
                  <p className="font-extrabold text-xl md:text-2xl leading-[30px] md:leading-[36px]">
                    {overview?.totalTexts || 0}
                  </p>
                  <p className="text-[#838C9D] text-sm md:text-base">
                    Text Content
                  </p>
                </div>
              </div>
            </>
          )}
        </div>
        <div className="flex flex-col flex-1 rounded-[20px] p-4 md:p-5 gap-5 bg-white shadow-[0_4px_4px_0_#E0E2EF]">
          <div className="relative flex items-center justify-center shrink-0 m-auto rounded-full w-[180px] h-[180px] md:w-[230px] md:h-[230px]">
            <div
              className="absolute rounded-full w-[180px] h-[180px] md:w-[230px] md:h-[230px] z-10"
              style={{
                background: "conic-gradient(#C2ACFF 0% 25%, #662FFF 25% 100%)",
              }}
            ></div>
            <div className="flex justify-center items-center w-[100px] h-[100px] md:w-[130px] md:h-[130px] rounded-full bg-white z-10">
              <p className="w-fit h-fit text-center font-bold text-xs md:text-lg leading-[20px] md:leading-[27px]">
                Our
                <br />
                Rapport
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-[10px]">
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-[#662FFF]"></div>
              <p className="font-semibold text-xs md:text-sm leading-[18px] md:leading-[21px]">
                Completed 75%
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-[#C2ACFF]"></div>
              <p className="font-semibold text-xs md:text-sm leading-[18px] md:leading-[21px]">
                Not Completed 25%
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[15px] md:gap-[30px]">
        <Courses />
        <Students />
      </div>
    </>
  );
}

import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import StudentsItem from "./student-item";

export default function StudentCourseList() {
  const { id } = useParams();

  const course = useLoaderData();
  
  return (
    <>
      <header className="flex flex-col md:flex-row items-start md:items-center justify-between gap-[15px] md:gap-[30px]">
        <div>
          <h1 className="font-extrabold text-xl md:text-[28px] leading-[32px] md:leading-[42px]">
            Manage Students
          </h1>
          <p className="text-[#6a6a6a] mt-1 text-sm md:text-base">
            Keep your employee or student happy
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2 md:gap-3 w-full md:w-auto">
          <Link
            to="#"
            className="flex-1 md:flex-none rounded-full border border-[#e5e5e5] p-[12px_16px] md:p-[14px_20px] font-semibold text-sm md:text-base text-center md:text-nowrap"
          >
            Import File
          </Link>
          <Link
            to={`/manager/courses/students/${id}/add`}
            className="flex-1 md:flex-none rounded-full p-[12px_16px] md:p-[14px_20px] font-semibold text-sm md:text-base text-[#FFFFFF] bg-[#ff6b5a] text-center md:text-nowrap"
          >
            Add Student
          </Link>
        </div>
      </header>
      <section
        id="CourseList"
        className="flex flex-col w-full rounded-[30px] p-[20px] md:p-[30px] gap-[15px] md:gap-[30px] bg-[#fffaf0]"
      >
        {course?.students?.map((item) => (
          <StudentsItem
            key={item._id}
            id={item._id}
            imageUrl={item.photo_url}
            name={item.name}
          />
        ))}
        {/* <div id="Pagination" class="flex items-center gap-3">
                    <button type="button" class="flex shrink-0 w-9 h-9 rounded-full items-center justify-center text-center transition-all duration-300 hover:bg-[#ffb084] hover:text-white hover:border-0 bg-[#ff6b5a] text-white">
                        <span class="font-semibold text-sm leading-[21px]">1</span>
                    </button>
                    <button type="button" class="flex shrink-0 w-9 h-9 rounded-full items-center justify-center text-center transition-all duration-300 hover:bg-[#ffb084] hover:text-white hover:border-0 border border-[#e5e5e5]">
                        <span class="font-semibold text-sm leading-[21px]">2</span>
                    </button>
                    <button type="button" class="flex shrink-0 w-9 h-9 rounded-full items-center justify-center text-center transition-all duration-300 hover:bg-[#ffb084] hover:text-white hover:border-0 border border-[#e5e5e5]">
                        <span class="font-semibold text-sm leading-[21px]">3</span>
                    </button>
                    <button type="button" class="flex shrink-0 w-9 h-9 rounded-full items-center justify-center text-center transition-all duration-300 hover:bg-[#ffb084] hover:text-white hover:border-0 border border-[#e5e5e5]">
                        <span class="font-semibold text-sm leading-[21px]">4</span>
                    </button>
                    <button type="button" class="flex shrink-0 w-9 h-9 rounded-full items-center justify-center text-center transition-all duration-300 hover:bg-[#ffb084] hover:text-white hover:border-0 border border-[#e5e5e5]">
                        <span class="font-semibold text-sm leading-[21px]">5</span>
                    </button>
                </div> */}
      </section>
    </>
  );
}

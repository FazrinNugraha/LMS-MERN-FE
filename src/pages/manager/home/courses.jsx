import React from "react";
import { Link } from "react-router-dom";
import { useLoaderData } from "react-router-dom";

export default function Courses() {
  const overview = useLoaderData();
  return (
    <section
      id="LatestCourse"
      className="flex flex-col rounded-[30px] p-[20px] md:p-[30px] gap-[15px] md:gap-[30px] bg-[#fffaf0]"
    >
      <h2 className="font-extrabold text-lg md:text-[22px] leading-[27px] md:leading-[33px]">
        Latest Courses
      </h2>
      {overview?.courses?.map((item) => (
        <div key={item._id} className="card flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-5">
          <div className="flex shrink-0 w-full md:w-[100px] h-[150px] md:h-20 rounded-[20px] bg-[#D9D9D9] overflow-hidden">
            <img
              src={item.thumbnailUrl}
              className="w-full h-full object-cover"
              alt="thumbnail"
            />
          </div>
          <div className="w-full">
            <Link
              to={`/manager/courses/${item._id}`}
              className="font-bold text-base md:text-xl leading-[24px] md:leading-[30px] line-clamp-1 hover:text-blue-600 cursor-pointer"
            >
                {item.name}
            </Link>
            <div className="flex items-center gap-[6px] mt-[6px]">
              <img
                src="/assets/images/icons/crown-purple.svg"
                className="w-4 h-4 md:w-auto md:h-auto"
                alt="icon"
              />
              <p className="text-[#6a6a6a] text-sm md:text-base">{item.category.name}</p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

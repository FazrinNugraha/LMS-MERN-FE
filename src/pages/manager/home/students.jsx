import React from "react";
import { useLoaderData, Link } from "react-router-dom";

export default function Students() {
    const overview = useLoaderData();
  return (
    <section
      id="LatestStudents"
      className="flex flex-col rounded-[30px] p-[20px] md:p-[30px] gap-[15px] md:gap-[30px] bg-[#fffaf0]"
    >
      <h2 className="font-extrabold text-lg md:text-[22px] leading-[27px] md:leading-[33px]">
        Latest Students
      </h2>
      {overview?.students.map((item) => (
              <div key={item._id} className="card flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-5">
        <div className="flex shrink-0 w-full md:w-20 h-[150px] md:h-20 rounded-[20px] bg-[#D9D9D9] overflow-hidden">
          <img
            src={item.photo_url}
            className="w-full h-full object-cover"
            alt="thumbnail"
          />
        </div>
        <div className="w-full">
            
          <Link to= "/manager/students/">
            <h3 className="font-bold text-base md:text-xl leading-[24px] md:leading-[30px] line-clamp-1 hover:text-blue-600 cursor-pointer">
              {item.name}
            </h3>
          </Link>
          <div className="flex items-center gap-[6px] mt-[6px]">
            
            <img
              src="/assets/images/icons/crown-purple.svg"
              className="w-4 h-4 md:w-auto md:h-auto"
              alt="icon"
            />
            <p className="text-[#6a6a6a] text-sm md:text-base">
              {item.courses.length} courses enrolled
            </p>
          </div>
        </div>
      </div>
      ))}

    </section>
  );
}

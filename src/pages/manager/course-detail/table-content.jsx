import React from "react";
import ContentItem from "./content-item";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function TableContent({ details, courseId }) {
  console.log("details content:", details);
  return (
    <section
      id="CourseList"
      className="flex flex-col w-full rounded-[30px] p-[30px] gap-[30px] bg-[#fffaf0]"
    >
      <div className="header flex items-center justify-between">
        <h2 className="font-bold text-[22px] leading-[33px]">Course Content</h2>
        <Link
          to={`/manager/courses/${courseId}/create`}
          className="w-fit rounded-full p-[14px_20px] font-semibold text-[#FFFFFF] bg-[#ff6b5a] text-nowrap  hover:-translate-y-1 hover:shadow-lg hover:bg-white-600
              active:translate-y-0.5"
        >
          Add Content
        </Link>
      </div>

      {details.map((content, index) => (
        <ContentItem
          key={content._id}
          type={content.type}
          title={content.title}
          id={content._id}
          index={index + 1}
          coursesId={courseId}
        />
      ))}
      {/* <div id="Pagination" className="flex items-center gap-3">
                    <button type="button" className="flex shrink-0 w-9 h-9 rounded-full items-center justify-center text-center transition-all duration-300 hover:bg-[#ffb084] hover:text-white hover:border-0 bg-[#ff6b5a] text-white">
                        <span className="font-semibold text-sm leading-[21px]">1</span>
                    </button>
                    <button type="button" className="flex shrink-0 w-9 h-9 rounded-full items-center justify-center text-center transition-all duration-300 hover:bg-[#ffb084] hover:text-white hover:border-0 border border-[#e5e5e5]">
                        <span className="font-semibold text-sm leading-[21px]">2</span>
                    </button>
                    <button type="button" className="flex shrink-0 w-9 h-9 rounded-full items-center justify-center text-center transition-all duration-300 hover:bg-[#ffb084] hover:text-white hover:border-0 border border-[#e5e5e5]">
                        <span className="font-semibold text-sm leading-[21px]">3</span>
                    </button>
                    <button type="button" className="flex shrink-0 w-9 h-9 rounded-full items-center justify-center text-center transition-all duration-300 hover:bg-[#ffb084] hover:text-white hover:border-0 border border-[#e5e5e5]">
                        <span className="font-semibold text-sm leading-[21px]">4</span>
                    </button>
                    <button type="button" className="flex shrink-0 w-9 h-9 rounded-full items-center justify-center text-center transition-all duration-300 hover:bg-[#ffb084] hover:text-white hover:border-0 border border-[#e5e5e5]">
                        <span className="font-semibold text-sm leading-[21px]">5</span>
                    </button>
                </div> */}
    </section>
  );
}

TableContent.prototype = {
  details: PropTypes.array,
  courseid: PropTypes.string,
};

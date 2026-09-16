import React, { useState } from "react";
import ContentText from "./content-text";
import ContentVideo from "./content-video";
import { Link } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import { useParams } from "react-router-dom";
import Headers from "../../../components/header";

export default function ManageCoursePreviewPage({ isAdmin = true }) {
  const course = useLoaderData();
  const { id } = useParams();

  const [activeContent, setActiveContent] = useState(course?.details?.[0]);

  const handleChangeContent = (content) => {
    setActiveContent(content);
  };

  const handleNextContent = (content) => {
    const currentIndex = course?.details?.findIndex(
      (val) => val._id === content?._id,
    );
    if (currentIndex < course?.details?.length - 1) {
      setActiveContent(course?.details?.[currentIndex + 1]);
    }
  };
  return (
    <div className="flex min-h-screen">
      <aside className="sidebar-container fixed h-[calc(100vh-20px)] w-full max-w-[330px] my-[10px] ml-[10px] bg-[#0a0a0a] overflow-hidden flex flex-1 rounded-[20px]">
        <div className="scroll-container flex w-full overflow-y-scroll hide-scrollbar">
          <nav className="flex flex-col w-full h-fit p-[30px] gap-[30px] z-10">
            <Link
              to={isAdmin ? `/manager/courses/${id}` : `/student`}
              className="font-semibold text-white hover:underline"
            >
              <span>Back to Dashboard</span>
            </Link>
            <div className="flex flex-col gap-4">
              <div className="flex shrink-0 w-[130px] h-[100px] rounded-[14px] bg-[#D9D9D9] overflow-hidden">
                <img
                  src={course?.thumbnail_url}
                  className="w-full h-full object-cover"
                  alt="thumbnail"
                />
              </div>
              <h2 className="font-bold text-xl leading-[34px] text-white">
                {course?.name}
              </h2>
            </div>
            <ul className="flex flex-col gap-4">
              {course?.details?.map((item) => (
                <li key={item._id}>
                  <button
                    onClick={() => handleChangeContent(item)}
                    type="button"
                    className="text-left w-full"
                  >
                    <div className="flex items-center gap-3 w-full rounded-full border p-[14px_20px] transition-all duration-300 hover:bg-[#0a0a0a] hover:border-[#0a0a0a] hover:shadow-[-10px_-6px_10px_0_#0a0a0a_inset] bg-[#0a1a1a] border-[#e5e5e5] shadow-[-10px_-6px_10px_0_#e5e5e5_inset]">
                      <img
                        src={
                          item?.type === "text"
                            ? "/assets/images/icons/note-white.svg"
                            : "/assets/images/icons/video-play-white.svg"
                        }
                        className="w-6 h-6"
                        alt="icon"
                      />
                      <span className="w-full font-semibold text-white line-clamp-1 transition-all duration-300 hover:line-clamp-none">
                        {item?.title}
                      </span>
                    </div>
                  </button>
                </li>
              ))}
              {/* <li>
                                <a href="course-learning-video.html">
                                    <div className="flex items-center gap-3 w-full rounded-full border p-[14px_20px] transition-all duration-300 hover:bg-[#0a0a0a] hover:border-[#0a0a0a] hover:shadow-[-10px_-6px_10px_0_#0a0a0a_inset] bg-[#0a1a1a] border-[#e5e5e5] shadow-[-10px_-6px_10px_0_#e5e5e5_inset]">
                                        <img src="/assets/images/icons/video-play-white.svg" className="w-6 h-6" alt="icon" />
                                        <span className="w-full font-semibold text-white line-clamp-1 transition-all duration-300 hover:line-clamp-none">Install figma plugins</span>
                                    </div>
                                </a>
                            </li> */}
            </ul>
          </nav>
        </div>
        <img
          src="/assets/images/backgrounds/sidebar-glow.png"
          className="absolute object-contain object-bottom bottom-0"
          alt="background"
        />
      </aside>
      <main className="flex flex-col flex-1 gap-[30px] p-[30px] ml-[340px]">
        <Headers type={isAdmin ? "manager" : "student"} />
        <div className="relative flex flex-col gap-[26px]"></div>
        {activeContent?.type === "text" ? (
          <ContentText content={activeContent} handleNext={handleNextContent} />
        ) : (
          <ContentVideo
            content={activeContent}
            handleNext={handleNextContent}
          />
        )}
      </main>
    </div>
  );
}

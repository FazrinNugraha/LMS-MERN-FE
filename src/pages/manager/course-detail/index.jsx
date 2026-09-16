import TableContent from "./table-content";
import { Link, useLoaderData } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function ManageCourseDetailPage() {
  const { id } = useParams();

  const course = useLoaderData();

  return (
    <>
      <div
        id="Breadcrumb"
        className="flex items-center gap-5 *:after:content-['/'] *:after:ml-5"
      >
        <span className="last-of-type:after:content-[''] last-of-type:font-semibold">
          Dashboard
        </span>
        <span className="last-of-type:after:content-[''] last-of-type:font-semibold">
          Manage Course
        </span>
        <span className="last-of-type:after:content-[''] last-of-type:font-semibold">
          Details
        </span>
      </div>
      <header className="flex items-center justify-between gap-7.5">
        <div>
          <h1 className="font-extrabold text-[28px] leading-10.5">
            {course?.name}
          </h1>
        </div>
        <div className="flex items-center gap-3">
          <Link
            to={`/manager/courses/edit/${id}`}
            className="w-fit rounded-full border border-[#e5e5e5] p-[14px_20px] font-semibold text-nowrap  hover:-translate-y-1 hover:shadow-lg hover:bg-white-600
              active:translate-y-0.5"
          >
            Edit Course
          </Link>
          <Link
            to={`/manager/courses/${id}/preview`}
            className="w-fit rounded-full p-[14px_20px] font-semibold text-[#FFFFFF] bg-[#ff6b5a] text-nowrap hover:-translate-y-1 hover:shadow-lg hover:bg-white-600
              active:translate-y-0.5"
          >
            Preview
          </Link>
        </div>
      </header>
      <section id="CourseInfo" className="flex gap-[50px]">
        <div
          id="Thumbnail"
          className="flex shrink-0 w-[480px] h-[250px] rounded-[20px] bg-[#D9D9D9] overflow-hidden"
        >
          <img
            src={course?.thumbnail_url}
            className="w-full h-full object-cover"
            alt="thumbnail"
          />
        </div>
        <div className="grid grid-cols-2 gap-5 w-full">
          <div className="flex flex-col rounded-[20px] border border-[#e5e5e5] p-5 gap-4">
            <img
              src="/assets/images/icons/profile-2user-purple.svg"
              className="w-8 h-8"
              alt="icon"
            />
            <p className="font-semibold">{course?.students.length}</p>
          </div>
          <div className="flex flex-col rounded-[20px] border border-[#e5e5e5] p-5 gap-4">
            <img
              src="/assets/images/icons/crown-purple.svg"
              className="w-8 h-8"
              alt="icon"
            />
            <p className="font-semibold">{course?.category?.name}</p>
          </div>
          <div className="flex flex-col rounded-[20px] border border-[#e5e5e5] p-5 gap-4">
            <img
              src="/assets/images/icons/note-favorite-purple.svg"
              className="w-8 h-8"
              alt="icon"
            />
            <p className="font-semibold">{course?.details?.length} Contents</p>
          </div>
          <div className="flex flex-col rounded-[20px] border border-[#e5e5e5] p-5 gap-4">
            <img
              src="/assets/images/icons/cup-purple.svg"
              className="w-8 h-8"
              alt="icon"
            />
            <p className="font-semibold">Certificate</p>
          </div>
        </div>
      </section>
      <TableContent details={course?.details ?? []} courseId={course?._id} />
    </>
  );
}

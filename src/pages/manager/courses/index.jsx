import CardCourses from './card'
import { Link, useLoaderData, useNavigation } from 'react-router-dom'
import { CardSkeleton } from '../../../components/LoadingSkeleton'
import EmptyState from '../../../components/EmptyState'

export default function ManageCoursePage() {
  const { data: courses = [] } = useLoaderData()
  const navigation = useNavigation()
  const isLoading = navigation.state === 'loading'

  return (
    <>
      <header className="flex flex-col md:flex-row items-start md:items-center justify-between gap-[15px] md:gap-[30px]">
        <div>
          <h1 className="font-extrabold text-xl md:text-[28px] leading-[32px] md:leading-[42px]">
            Manage Courses
          </h1>
          <p className="text-[#838C9D] mt-1 text-sm md:text-base">
            Give the best future for your great employees
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2 md:gap-3 w-full md:w-auto">
          <Link
            to="#"
            className="flex-1 md:flex-none rounded-full border border-[#060A23] p-[12px_16px] md:p-[14px_20px] font-semibold text-sm md:text-base text-center md:text-nowrap hover:bg-[#F8FAFB] transition-all duration-300"
          >
            Import File
          </Link>

          <Link
            to="/manager/courses/create"
            className="flex-1 md:flex-none rounded-full p-[12px_16px] md:p-[14px_20px] font-semibold text-sm md:text-base text-[#FFFFFF] bg-[#662FFF] text-center md:text-nowrap hover:bg-[#5528CC] transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            New Course
          </Link>
        </div>
      </header>

      <section
        id="CourseList"
        className="flex flex-col w-full rounded-[30px] p-[20px] md:p-[30px] gap-[15px] md:gap-[30px] bg-[#F8FAFB]"
      >
        {isLoading ? (
          <>
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
          </>
        ) : courses.length === 0 ? (
          <EmptyState 
            title="No Courses Yet"
            description="Start building your learning platform by creating your first course. Share knowledge and empower your team!"
            actionText="Create First Course"
            actionLink="/manager/courses/create"
            icon="note-favorite"
          />
        ) : (
          courses.map((item) => (
            <CardCourses
              key={item._id}
              id={item._id}
              name={item.name}
              category={item.category?.name}
              imageUrl={item.thumbnailUrl}
              totalStudents={item.totalStudents}
            />
          ))
        )}
      </section>
    </>
  )
}

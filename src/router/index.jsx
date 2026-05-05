import { createBrowserRouter, redirect } from "react-router-dom";
import ManagerHomePage from "../pages/manager/home";
import SigninPage from "../pages/SignIn";
import SignUpPage from "../pages/SignUp";
import LayoutDashboard from "../components/layout";
import ManageCoursePage from "../pages/manager/courses";
import ManageCreateCoursePage from "../pages/manager/create-course";
import ManageCourseDetailPage from "../pages/manager/course-detail";
import ManageContentCreatePage from "../pages/manager/course-content-create";
import ManageCoursePreviewPage from "../pages/manager/course-preview";
import ManageStudentsPage from "../pages/manager/students";
import StudentPage from "../pages/student/StudentOverview";
import SuccessCheckoutPage from "../pages/SuccessCheckout";
import { ROLE_MANAGER } from "../utils/const";
import secureLocalStorage from "react-secure-storage";
import { getCourseById, getCourses, getDetailContent } from "../services/getCourses";
import { getCategories } from "../services/getCourses";
import ManageCreateStudentPage from "../pages/manager/create-student";
import { getStudentById, getStudents } from "../services/studentsService";
import { getStudentsByCourseId } from "../services/getCourses";
import StudentCourseList from "../pages/manager/student-course";
import StudentForm from "../pages/manager/student-course/student-form";
import { getOverviews } from "../services/overviewService";
import { ROLE_STUDENT, STORAGE_KEY } from "../utils/const";
import { getMe } from "../services/authService";
import { getCoursesStudent } from "../services/studentsService";
import ManageCategoriesPage from "../pages/manager/categories";
import LandingPage from "../pages/LandingPage";





const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />
  },
  {
    path: "/manager/sign-in",
    loader: async () => {
      const session = secureLocalStorage.getItem(STORAGE_KEY)

      if (session && session.role === 'manager') {
        try {
          await getMe()
          // Token masih valid, redirect ke dashboard
          throw redirect('/manager')
        } catch (error) {
          if (error instanceof Response) throw error // redirect response
          // Token expired/invalid, hapus session & tampilkan login
          secureLocalStorage.removeItem(STORAGE_KEY)
        }
      }

      return null
    },
    element: <SigninPage />
  },
  {
    path: "/manager/sign-up",
    element: <SignUpPage />
  },
  {
    path: "/success-checkout",
    element: <SuccessCheckoutPage />
  },
  {
    path: "/manager",
    id: ROLE_MANAGER,
    loader: async () => {
      const session = secureLocalStorage.getItem(STORAGE_KEY)

      if (!session || session.role !== 'manager') {
        throw redirect('/manager/sign-in')
      }

      try {
        await getMe()
        return session
      } catch (error) {
        // Token expired/invalid — hapus session & redirect ke login
        secureLocalStorage.removeItem(STORAGE_KEY)
        throw redirect('/manager/sign-in')
      }
    },
    element: <LayoutDashboard />,
    children: [
      {
        index: true,
        loader: async () => {
          const overviews = await getOverviews()

          return overviews?.data
        },
        element: <ManagerHomePage />
      },
      {
        path: '/manager/courses',
        loader: async () => {
          const data = await getCourses()

          console.log(data);

          return data
        },
        element: <ManageCoursePage />
      },
      {
        path: '/manager/courses/create',
        loader: async () => {
          const categories = await getCategories()

          return { categories, course: null }
        },
        element: <ManageCreateCoursePage />
      },
      {
        path: '/manager/courses/edit/:id',
        loader: async ({ params }) => {
          const categories = await getCategories()
          const course = await getCourseById(params.id)

          console.log("course detail loader:", course);
          return { categories, course: course?.data }
        },
        element: <ManageCreateCoursePage />
      },
      {
        path: '/manager/courses/:id',

        loader: async ({ params }) => {
          const course = await getCourseById(params.id)

          return course?.data
        },
        element: <ManageCourseDetailPage />
      },
      {
        path: '/manager/courses/:id/create',
        element: <ManageContentCreatePage />
      },
      {
        path: '/manager/courses/:id/edit/:contentId',
        loader: async ({ params }) => {
          const content = await getDetailContent(params.contentId)

          return content?.data
        },
        element: <ManageContentCreatePage />
      },
      {
        path: '/manager/courses/:id/preview',
        loader: async ({ params }) => {
          const course = await getCourseById(params.id, true)
          return course?.data
        },
        element: <ManageCoursePreviewPage />
      },
      {
        path: '/manager/students',
        loader: async () => {
          const students = await getStudents()

          return students?.data
        },
        element: <ManageStudentsPage />
      },
      {
        path: '/manager/students/create',
        element: <ManageCreateStudentPage />
      },
      {
        path: '/manager/students/edit/:id',
        loader: async ({ params }) => {
          const student = await getStudentsByCourseId(params.id)

          return student?.data
        },
        element: <ManageCreateStudentPage />
      },
      {
        path: '/manager/courses/students/:id',
        loader: async ({ params }) => {
          const students = await getStudentsByCourseId(params.id)
          return students?.data
        },
        element: <StudentCourseList />
      },
      {
        path: '/manager/courses/students/:id/add',
        loader: async () => {
          const students = await getStudents()

          return students?.data
        },
        element: <StudentForm />
      },
      {
        path: '/manager/categories',
        element: <ManageCategoriesPage />
      }
    ]
  },
  {
    path: "/student",
    id: ROLE_STUDENT,
    loader: async () => {
      const session = secureLocalStorage.getItem(STORAGE_KEY)

      if (!session || session.role !== 'student') {
        throw redirect('/student/sign-in')
      }

      try {
        await getMe()
        return session
      } catch (error) {
        // Token expired/invalid — hapus session & redirect ke login
        secureLocalStorage.removeItem(STORAGE_KEY)
        throw redirect('/student/sign-in')
      }
    },
    element: <LayoutDashboard isAdmin={false} />,
    children: [
      {
        index: true,
        loader: async () => {
          const courses = await getCoursesStudent()

          return courses?.data
        },
        element: <StudentPage />
      },
      {
        path: '/student/detail-courses/:id',
         loader: async ({ params }) => {
          const course = await getCourseById(params.id, true)
          return course?.data
        },
        element: <ManageCoursePreviewPage isAdmin={false} />
      }
    ]
  },
  {
    path: "/student/sign-in",
    loader: async () => {
      const session = secureLocalStorage.getItem(STORAGE_KEY)

      if (session && session.role === 'student') {
        try {
          await getMe()
          throw redirect('/student')
        } catch (error) {
          if (error instanceof Response) throw error
          secureLocalStorage.removeItem(STORAGE_KEY)
        }
      }

      return null
    },
    element: <SigninPage type="student"/>
  }
])
export default router

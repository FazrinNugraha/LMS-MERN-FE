import React from 'react'
import Sidebar from "./sidebar"
import Header from './header'
import Courses from '../pages/manager/home'
import Students from '../pages/manager/home'
import { Outlet, useLoaderData, useMatch } from 'react-router-dom'

export default function LayoutDashboard({isAdmin = true}) {
  const session = useLoaderData()

   const isManagerPreviewPage = useMatch('/manager/courses/:id/preview')
   const isStudentPreviewPage = useMatch('/student/detail-courses/:id')

  return (
    <>
    {isManagerPreviewPage !== null  || isStudentPreviewPage !==null ? (
      <Outlet/>
    ): (
      <div className="flex min-h-screen bg-[#F8FAFB]">
        <div className="hidden lg:block">
          <Sidebar isAdmin={isAdmin}/>
        </div>
        <main className="flex flex-col flex-1 gap-[15px] md:gap-[30px] p-[15px] md:p-[30px] lg:ml-[290px]">
            <Header type={session?.role}/>
            <Outlet/>
        </main>
    </div>
  )}
    </>
  )  
}

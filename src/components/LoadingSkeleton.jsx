import React from 'react'

export function CardSkeleton() {
  return (
    <div className="flex flex-col md:flex-row items-start gap-4 md:gap-5 p-4 md:p-5 rounded-[20px] border border-[#CFDBEF] bg-white animate-pulse">
      <div className="w-full md:w-[200px] h-[120px] md:h-[150px] rounded-[20px] bg-gray-200" />
      <div className="flex flex-col flex-1 gap-3 w-full">
        <div className="h-6 bg-gray-200 rounded-lg w-3/4" />
        <div className="h-4 bg-gray-200 rounded-lg w-1/2" />
        <div className="flex items-center gap-3 mt-2">
          <div className="h-4 bg-gray-200 rounded-lg w-20" />
          <div className="h-4 bg-gray-200 rounded-lg w-24" />
        </div>
      </div>
    </div>
  )
}

export function StatCardSkeleton() {
  return (
    <div className="flex flex-col rounded-[20px] p-4 md:p-5 gap-5 bg-white shadow-[0_4px_4px_0_#E0E2EF] animate-pulse">
      <div className="w-[40px] h-[40px] md:w-[46px] md:h-[46px] rounded-full bg-gray-200" />
      <div>
        <div className="h-8 bg-gray-200 rounded-lg w-16 mb-2" />
        <div className="h-4 bg-gray-200 rounded-lg w-24" />
      </div>
    </div>
  )
}

export function TableRowSkeleton() {
  return (
    <div className="flex items-center gap-4 p-4 rounded-[20px] bg-white animate-pulse">
      <div className="w-12 h-12 rounded-full bg-gray-200" />
      <div className="flex-1 space-y-2">
        <div className="h-4 bg-gray-200 rounded w-1/3" />
        <div className="h-3 bg-gray-200 rounded w-1/4" />
      </div>
      <div className="h-8 w-20 bg-gray-200 rounded-full" />
    </div>
  )
}

export function PageLoadingSkeleton() {
  return (
    <div className="flex flex-col gap-[15px] md:gap-[30px]">
      {/* Header Skeleton */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-[15px] md:gap-[30px] animate-pulse">
        <div className="flex-1">
          <div className="h-8 bg-gray-200 rounded-lg w-48 mb-2" />
          <div className="h-4 bg-gray-200 rounded-lg w-64" />
        </div>
        <div className="flex gap-3">
          <div className="h-12 w-32 bg-gray-200 rounded-full" />
          <div className="h-12 w-32 bg-gray-200 rounded-full" />
        </div>
      </div>

      {/* Content Skeleton */}
      <div className="flex flex-col rounded-[30px] p-[20px] md:p-[30px] gap-[15px] md:gap-[30px] bg-[#F8FAFB]">
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
      </div>
    </div>
  )
}

import React from "react";
import CardCourse from "./CardCourse";
import { useLoaderData, useNavigation } from "react-router-dom";
import { CardSkeleton } from "../../../components/LoadingSkeleton";
import EmptyState from "../../../components/EmptyState";

export default function StudentPage() {
  const data = useLoaderData();
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';

  return (
    <section
      id="LatestCourse"
      className="flex flex-col rounded-[30px] p-[20px] md:p-[30px] gap-[15px] md:gap-[30px] bg-[#F8FAFB]"
    >
      <h2 className="font-extrabold text-lg md:text-[22px] leading-[27px] md:leading-[33px]">
        Latest Courses
      </h2>
      
      {isLoading ? (
        <>
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
        </>
      ) : !data || data.length === 0 ? (
        <EmptyState 
          title="No Courses Available"
          description="There are no courses available at the moment. Check back later for new learning opportunities!"
          icon="note-favorite"
        />
      ) : (
        data.map((item) => (
          <CardCourse
            key={item._id}
            imageUrl={item.thumbnail_url}
            title={item.name}
            id={item._id}
            category={item.category?.name}
          />
        ))
      )}
    </section>
  );
}

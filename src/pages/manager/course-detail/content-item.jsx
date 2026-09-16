import React from "react";
import PropTypes from "prop-types";
import { Link, useRevalidator } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { deleteDetailContent } from "../../../services/getCourses";

export default function ContentItem({ id, index, type, title, coursesId }) {

  const revalidator = useRevalidator();

  const { isLoading, mutateAsync } = useMutation({
    mutationFn: () => deleteDetailContent(id),

  })

  const handleDelete = async () => {
    try {
      await mutateAsync();

      revalidator.revalidate();


    } catch (error) {
      console.error("error delete content", error);
    }
  }
  return (
    <div className="card flex items-center gap-5">
      <div className="relative flex shrink-0 w-35 h-27.5 ">
        <p className="absolute -top-2.5 -left-[10px] flex shrink-0 w-[30px] h-[30px] rounded-full items-center justify-center text-center bg-[#ff6b5a] text-white">
          <span className="font-bold text-sm leading-5.25">{index}</span>
        </p>
        <div className="rounded-[20px] bg-[#D9D9D9] overflow-hidden">
          <img
            src={`/assets/images/thumbnails/cover-${type}.png`}
            className="w-full h-full object-cover"
            alt="thumbnail"
          />
        </div>
      </div>
      <div className="w-full">
        <h3 className="font-bold text-xl leading-[30px] line-clamp-1">
          {title}
        </h3>
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-[6px] mt-[6px]">
            <img
              src={`/assets/images/icons/${type === "text" ? "note-favorite-purple.svg" : "video-play-purple.svg"}`}
              className="w-5 h-5"
              alt="icon"
            />
            <p className="text-[#6a6a6a]">{type} Content</p>
          </div>
        </div>
      </div>
      <div className="flex justify-end items-center gap-3">
        <Link
          to={`/manager/courses/${coursesId}/edit/${id}`}
          className="w-fit rounded-full border border-[#e5e5e5] p-[14px_20px] font-semibold text-nowrap  hover:-translate-y-1 hover:shadow-lg hover:bg-white-600
              active:translate-y-0.5"
        >
          Edit Content
        </Link>
        <button
          type="button"
          disabled={isLoading}
          onClick={handleDelete}
          className="w-fit rounded-full p-[14px_20px] bg-[#ef4444] font-semibold text-white text-nowrap hover:-translate-y-1 hover:shadow-lg hover:bg-white-600
              active:translate-y-0.5"
        >
          {isLoading ? "Deleting..." : "Delete"}
        </button>
      </div>
    </div>
  );
}

ContentItem.PropTypes = {
  id: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  coursesId: PropTypes.string.isRequired,
};

import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useMutation } from "@tanstack/react-query";
import { deleteStudent } from "../../../services/studentsService";
import { deleteStudentsByCourseId } from "../../../services/getCourses";
import { toast } from "react-toastify";
import { useRevalidator } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function StudentsItem({ imageUrl, name, TotalCourse, id }) {

  const revalidator = useRevalidator();

  const params = useParams();

    const { isLoading, mutateAsync } = useMutation({
    mutationFn: () => deleteStudentsByCourseId({studentId: id}, params.id),
  });

  const handleDelete = async () => {
    try {
      await mutateAsync();
      revalidator.revalidate();
    } catch (error) {
      console.error("Error deleting course:", error);
    }
  };
  return (
    <div className="card flex items-center gap-5">
      <div className="relative flex shrink-0 w-20 h-20">
        <div className="rounded-[20px] bg-[#D9D9D9] overflow-hidden">
          <img
            src={imageUrl}
            className="w-full h-full object-cover"
            alt="photo"
          />
        </div>
      </div>
      <div className="w-full">
        <h3 className="font-bold text-xl leading-[30px] line-clamp-1">
          {name}
        </h3>
        <div className="flex items-center gap-5">
        </div>
      </div>
      <div className="flex justify-end items-center gap-3">
        <button
          type="button"
          disabled={isLoading}
          onClick={handleDelete}
          className="w-fit rounded-full p-[14px_20px] bg-[#ef4444] font-semibold text-white text-nowrap"
        >
            Delete
        </button>
      </div>
    </div>
  );
}

StudentsItem.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  TotalCourse: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
};

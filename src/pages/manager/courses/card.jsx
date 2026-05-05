import React, { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useMutation } from "@tanstack/react-query";
import { useRevalidator } from "react-router-dom";
import { deleteCourse } from "../../../services/getCourses";
import ConfirmationModal from "../../../components/ConfirmationModal";
import toast from "react-hot-toast";

export default function CardCourses({
  id,
  imageUrl,
  totalStudents,
  category,
  name,
}) {
  const revalidator = useRevalidator();
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const { isPending, mutateAsync } = useMutation({
    mutationFn: () => deleteCourse(id),
  });

  const handleDelete = async () => {
    const loadingToast = toast.loading("Deleting course...");
    
    try {
      await mutateAsync();
      toast.success("Course deleted successfully! 🗑️", { id: loadingToast });
      revalidator.revalidate();
    } catch (error) {
      console.error("Error deleting course:", error);
      toast.error(error?.response?.data?.message || "Failed to delete course. Please try again.", { id: loadingToast });
    }
  };

  return (
    <>
      <div className="card flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-5 p-4 md:p-5 rounded-[20px] border border-[#CFDBEF] bg-white hover:shadow-lg transition-all duration-300">
        <div className="flex shrink-0 w-full md:w-[140px] h-[180px] md:h-[110px] rounded-[20px] bg-[#D9D9D9] overflow-hidden">
          <img
            src={imageUrl}
            className="w-full h-full object-cover"
            alt="thumbnail"
          />
        </div>

        <div className="w-full">
          <h3 className="font-bold text-lg md:text-xl leading-[28px] md:leading-[30px] line-clamp-1">
            {name}
          </h3>
          <div className="flex flex-wrap items-center gap-3 md:gap-5 mt-2">
            <div className="flex items-center gap-[6px]">
              <img
                src="/assets/images/icons/profile-2user-purple.svg"
                className="w-4 h-4 md:w-5 md:h-5"
                alt="icon"
              />
              <p className="text-[#838C9D] text-sm md:text-base">
                {totalStudents} Students
              </p>
            </div>
            <div className="flex items-center gap-[6px]">
              <img
                src="/assets/images/icons/crown-purple.svg"
                className="w-4 h-4 md:w-5 md:h-5"
                alt="icon"
              />
              <p className="text-[#838C9D] text-sm md:text-base">{category}</p>
            </div>
          </div>
        </div>

        <div className="flex justify-end items-center gap-2 md:gap-3 w-full md:w-auto">
          <Link
            to={`/manager/courses/students/${id}`}
            className="w-full md:w-fit rounded-full border border-[#060A23] p-[12px_16px] md:p-[14px_20px] font-semibold text-sm md:text-base text-center md:text-nowrap hover:bg-[#F8FAFB] transition-all duration-300"
          >
            Student
          </Link>
          <Link
            to={`/manager/courses/${id}`}
            className="w-full md:w-fit rounded-full border border-[#060A23] p-[12px_16px] md:p-[14px_20px] font-semibold text-sm md:text-base text-center md:text-nowrap hover:bg-[#F8FAFB] transition-all duration-300"
          >
            Manage
          </Link>
          <button
            type="button"
            onClick={() => setShowDeleteModal(true)}
            disabled={isPending}
            className="w-full md:w-fit rounded-full p-[12px_16px] md:p-[14px_20px] font-semibold text-sm md:text-base bg-red-500 text-white text-center md:text-nowrap hover:bg-red-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
          >
            {isPending ? "Deleting..." : "Delete"}
          </button>
        </div>
      </div>

      <ConfirmationModal
        isOpen={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
        onConfirm={handleDelete}
        title="Delete Course?"
        message={`Are you sure you want to delete "${name}"? This action cannot be undone and will remove all associated content.`}
        confirmText="Delete Course"
        cancelText="Cancel"
        type="danger"
      />
    </>
  );
}

CardCourses.propTypes = {
  id: PropTypes.number.isRequired,
  imageUrl: PropTypes.string.isRequired,
  totalStudents: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

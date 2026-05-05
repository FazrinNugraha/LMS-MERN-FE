import React, { useState } from "react";
import PropTypes from "prop-types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCategory } from "../../../services/categoryService";
import ConfirmationModal from "../../../components/ConfirmationModal";
import toast from "react-hot-toast";

export default function CategoryCard({ id, name, totalCourses, onEdit }) {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const queryClient = useQueryClient();

  const { isPending, mutateAsync } = useMutation({
    mutationFn: () => deleteCategory(id),
    onSuccess: () => {
      queryClient.invalidateQueries(["categories"]);
    },
  });

  const handleDelete = async () => {
    const loadingToast = toast.loading("Deleting category...");

    try {
      await mutateAsync();
      toast.success("Category deleted successfully! 🗑️", { id: loadingToast });
    } catch (error) {
      console.error("Error deleting category:", error);
      toast.error(
        error?.response?.data?.message ||
          "Failed to delete category. Please try again.",
        { id: loadingToast }
      );
    }
  };

  return (
    <>
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 p-5 rounded-[20px] border border-[#CFDBEF] bg-white hover:shadow-lg transition-all duration-300">
        <div className="flex items-center gap-4 flex-1">
          <div className="flex shrink-0 w-14 h-14 rounded-full bg-[#F8FAFB] items-center justify-center">
            <img
              src="/assets/images/icons/crown-purple.svg"
              className="w-7 h-7"
              alt="category icon"
            />
          </div>

          <div className="flex-1">
            <h3 className="font-bold text-lg leading-[27px] text-[#060A23]">
              {name}
            </h3>
            <div className="flex items-center gap-2 mt-1">
              <img
                src="/assets/images/icons/note-favorite-purple.svg"
                className="w-4 h-4"
                alt="icon"
              />
              <p className="text-[#838C9D] text-sm">
                {totalCourses} {totalCourses === 1 ? "Course" : "Courses"}
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3 w-full md:w-auto">
          <button
            type="button"
            onClick={onEdit}
            className="flex-1 md:flex-none rounded-full border border-[#060A23] px-5 py-3 font-semibold text-sm hover:bg-[#F8FAFB] transition-all duration-300"
          >
            Edit
          </button>
          <button
            type="button"
            onClick={() => setShowDeleteModal(true)}
            disabled={isPending}
            className="flex-1 md:flex-none rounded-full px-5 py-3 font-semibold text-sm bg-red-500 text-white hover:bg-red-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
          >
            {isPending ? "Deleting..." : "Delete"}
          </button>
        </div>
      </div>

      <ConfirmationModal
        isOpen={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
        onConfirm={handleDelete}
        title="Delete Category?"
        message={
          totalCourses > 0
            ? `This category has ${totalCourses} course(s). You need to reassign or delete those courses first before deleting this category.`
            : `Are you sure you want to delete "${name}"? This action cannot be undone.`
        }
        confirmText={totalCourses > 0 ? "Understood" : "Delete Category"}
        cancelText="Cancel"
        type={totalCourses > 0 ? "warning" : "danger"}
      />
    </>
  );
}

CategoryCard.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  totalCourses: PropTypes.number.isRequired,
  onEdit: PropTypes.func.isRequired,
};

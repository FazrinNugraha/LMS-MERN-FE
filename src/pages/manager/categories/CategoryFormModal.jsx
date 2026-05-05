import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCategory, updateCategory } from "../../../services/categoryService";
import toast from "react-hot-toast";

const categorySchema = z.object({
  name: z.string().min(2, "Category name must be at least 2 characters"),
});

export default function CategoryFormModal({ isOpen, onClose, category = null }) {
  const queryClient = useQueryClient();
  const isEdit = !!category;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(categorySchema),
    defaultValues: {
      name: category?.name || "",
    },
  });

  useEffect(() => {
    if (category) {
      reset({ name: category.name });
    } else {
      reset({ name: "" });
    }
  }, [category, reset]);

  const createMutation = useMutation({
    mutationFn: (data) => createCategory(data),
    onSuccess: () => {
      queryClient.invalidateQueries(["categories"]);
    },
  });

  const updateMutation = useMutation({
    mutationFn: (data) => updateCategory(category._id, data),
    onSuccess: () => {
      queryClient.invalidateQueries(["categories"]);
    },
  });

  const onSubmit = async (data) => {
    const loadingToast = toast.loading(
      isEdit ? "Updating category..." : "Creating category..."
    );

    try {
      if (isEdit) {
        await updateMutation.mutateAsync(data);
        toast.success("Category updated successfully! ✨", { id: loadingToast });
      } else {
        await createMutation.mutateAsync(data);
        toast.success("Category created successfully! 🎉", { id: loadingToast });
      }
      reset();
      onClose();
    } catch (error) {
      console.error("Error saving category:", error);
      toast.error(
        error?.response?.data?.message || "Failed to save category. Please try again.",
        { id: loadingToast }
      );
    }
  };

  const isPending = createMutation.isPending || updateMutation.isPending;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-[20px] p-6 md:p-8 max-w-md w-full shadow-2xl animate-[slideUp_0.3s_ease-out]">
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-bold text-xl md:text-2xl text-[#060A23]">
            {isEdit ? "Edit Category" : "New Category"}
          </h2>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full hover:bg-[#F8FAFB] flex items-center justify-center transition-colors"
          >
            <span className="text-2xl text-[#838C9D]">×</span>
          </button>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="font-semibold text-sm">
              Category Name
            </label>
            <div
              className={`flex items-center w-full rounded-full border ${
                errors.name ? "border-red-400" : "border-[#CFDBEF]"
              } gap-3 px-5 transition-all duration-300 focus-within:ring-2 focus-within:ring-[#662FFF]`}
            >
              <img
                src="/assets/images/icons/crown-purple.svg"
                className="w-5 h-5"
                alt="icon"
              />
              <input
                {...register("name")}
                type="text"
                id="name"
                className="appearance-none outline-none w-full py-3 font-semibold placeholder:font-normal placeholder:text-[#838C9D] !bg-transparent"
                placeholder="e.g., Web Development, Design, Marketing"
              />
              {!errors.name && (
                <span className="text-green-400 text-xs">✓</span>
              )}
            </div>
            {errors.name && (
              <p className="text-red-400 text-xs px-5 flex items-center gap-1">
                <span>⚠</span> {errors.name.message}
              </p>
            )}
          </div>

          <div className="flex items-center gap-3 mt-2">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 rounded-full border border-[#CFDBEF] py-3 font-semibold text-sm hover:bg-[#F8FAFB] transition-all duration-300"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isPending}
              className="flex-1 rounded-full py-3 font-semibold text-sm text-white bg-[#662FFF] hover:bg-[#5528CC] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
            >
              {isPending
                ? isEdit
                  ? "Updating..."
                  : "Creating..."
                : isEdit
                ? "Update"
                : "Create"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

CategoryFormModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  category: PropTypes.shape({
    _id: PropTypes.string,
    name: PropTypes.string,
  }),
};

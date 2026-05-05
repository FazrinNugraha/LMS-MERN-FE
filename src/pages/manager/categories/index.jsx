import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getAllCategories } from "../../../services/categoryService";
import CategoryCard from "./CategoryCard";
import CategoryFormModal from "./CategoryFormModal";
import { CardSkeleton } from "../../../components/LoadingSkeleton";
import EmptyState from "../../../components/EmptyState";

export default function ManageCategoriesPage() {
  const [showModal, setShowModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const { data, isLoading, error } = useQuery({
    queryKey: ["categories"],
    queryFn: getAllCategories,
  });

  const categories = data?.data || [];

  const handleCreate = () => {
    setSelectedCategory(null);
    setShowModal(true);
  };

  const handleEdit = (category) => {
    setSelectedCategory(category);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedCategory(null);
  };

  return (
    <>
      <header className="flex flex-col md:flex-row items-start md:items-center justify-between gap-[15px] md:gap-[30px]">
        <div>
          <h1 className="font-extrabold text-xl md:text-[28px] leading-[32px] md:leading-[42px]">
            Manage Categories
          </h1>
          <p className="text-[#838C9D] mt-1 text-sm md:text-base">
            Organize your courses into categories
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2 md:gap-3 w-full md:w-auto">
          <button
            onClick={handleCreate}
            className="flex-1 md:flex-none rounded-full p-[12px_16px] md:p-[14px_20px] font-semibold text-sm md:text-base text-[#FFFFFF] bg-[#662FFF] text-center md:text-nowrap hover:bg-[#5528CC] transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            New Category
          </button>
        </div>
      </header>

      <section
        id="CategoryList"
        className="flex flex-col w-full rounded-[30px] p-[20px] md:p-[30px] gap-[15px] md:gap-[30px] bg-[#F8FAFB]"
      >
        {isLoading ? (
          <>
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
          </>
        ) : error ? (
          <div className="text-center text-red-500 py-8">
            <p>Failed to load categories</p>
            <p className="text-sm mt-2">{error.message}</p>
          </div>
        ) : categories.length === 0 ? (
          <EmptyState
            title="No Categories Yet"
            description="Start organizing your courses by creating your first category. Categories help students find relevant courses easily!"
            actionText="Create First Category"
            actionLink="#"
            icon="crown"
          />
        ) : (
          <>
            <div className="flex items-center justify-between mb-2">
              <p className="text-[#838C9D] text-sm">
                {categories.length} {categories.length === 1 ? "Category" : "Categories"}
              </p>
            </div>
            {categories.map((category) => (
              <CategoryCard
                key={category._id}
                id={category._id}
                name={category.name}
                totalCourses={category.totalCourses}
                onEdit={() => handleEdit(category)}
              />
            ))}
          </>
        )}
      </section>

      <CategoryFormModal
        isOpen={showModal}
        onClose={handleCloseModal}
        category={selectedCategory}
      />
    </>
  );
}

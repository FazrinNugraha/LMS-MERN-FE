import axios from "axios";
import secureLocalStorage from "react-secure-storage";
import { STORAGE_KEY } from "../utils/const";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000/api";

// Get auth token
const getAuthToken = () => {
  const session = secureLocalStorage.getItem(STORAGE_KEY);
  return session?.token;
};

// Get all categories
export const getAllCategories = async () => {
  const response = await axios.get(`${API_URL}/categories`);
  return response.data;
};

// Get category by ID
export const getCategoryById = async (id) => {
  const response = await axios.get(`${API_URL}/categories/${id}`);
  return response.data;
};

// Create new category
export const createCategory = async (data) => {
  const token = getAuthToken();
  const response = await axios.post(`${API_URL}/categories`, data, {
    headers: {
      Authorization: `JWT ${token}`,
    },
  });
  return response.data;
};

// Update category
export const updateCategory = async (id, data) => {
  const token = getAuthToken();
  const response = await axios.put(`${API_URL}/categories/${id}`, data, {
    headers: {
      Authorization: `JWT ${token}`,
    },
  });
  return response.data;
};

// Delete category
export const deleteCategory = async (id) => {
  const token = getAuthToken();
  const response = await axios.delete(`${API_URL}/categories/${id}`, {
    headers: {
      Authorization: `JWT ${token}`,
    },
  });
  return response.data;
};

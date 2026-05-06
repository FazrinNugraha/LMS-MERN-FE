import axios from "axios"
import secureLocalStorage from "react-secure-storage"
import { STORAGE_KEY } from "./const"

const baseURL = import.meta.env.VITE_API_URL

const apiInstance = axios.create({
  baseURL,
  timeout: 3000
})

export const apiInstanceAuth = axios.create({
  baseURL,
  timeout: 30000
})

apiInstanceAuth.interceptors.request.use(
  (config) => {
    const session = secureLocalStorage.getItem(STORAGE_KEY)

    // ✅ session HARUS ADA
    if (session?.token) {
      config.headers.Authorization = `JWT ${session.token}`
    }

    // 🔴 WAJIB SELALU RETURN CONFIG
    return config
  },
  (error) => Promise.reject(error)
)

// 🔴 Handle token expired — auto logout & redirect ke sign-in
apiInstanceAuth.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      const session = secureLocalStorage.getItem(STORAGE_KEY)
      const role = session?.role

      // Hapus session yang expired
      secureLocalStorage.removeItem(STORAGE_KEY)

      // Redirect ke sign-in sesuai role
      if (role === 'student') {
        window.location.href = '/student/sign-in'
      } else {
        window.location.href = '/manager/sign-in'
      }
    }
    return Promise.reject(error)
  }
)

export default apiInstance

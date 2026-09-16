import apiInstance from "../utils/axios";
import { apiInstanceAuth } from "../utils/axios";

// Pakai apiInstanceAuth (timeout 30s): sign-up memanggil Midtrans + hashing password,
// sedangkan apiInstance hanya 3s sehingga sering timeout di serverless cold start.
export const postSignUp = async(data) => apiInstanceAuth.post("/sign-up", data).then((res)=>res.data)
export const postSignIn = async(data) => apiInstance.post("/sign-in", data).then(res=>res.data)

// Validasi token ke server — return user data kalau token masih valid
export const getMe = async() => apiInstanceAuth.get("/me").then(res=>res.data)

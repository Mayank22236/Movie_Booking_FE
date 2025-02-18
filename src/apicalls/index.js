import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: "https://movie-booking-backend-pxnb.onrender.com/", // Add your backend URL
    headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("token")}`,
    },
});

import axios from "axios";

const api = axios.create({
    baseURL: "https://mernecommercebackend-idgs.onrender.com/api/v1/",
    withCredentials: true,
    headers: { 'Access-Control-Allow-Origin': '*' },
    credentials: 'include',
})

export default api;
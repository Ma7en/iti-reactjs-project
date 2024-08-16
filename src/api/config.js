import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_BASE_API_Link,
    params: {
        api_key: process.env.REACT_APP_API_KEY,
    },
});

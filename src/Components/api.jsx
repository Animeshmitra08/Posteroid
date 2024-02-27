import axios from "axios";

//unsplash----------------
const CLIENT_ID = import.meta.env.VITE_API_KEY;

const API_URL = axios.create({
    baseURL : "https://api.unsplash.com/",
    headers:{
        'Authorization':`Client-ID ${CLIENT_ID}`,
    }
});

export default API_URL
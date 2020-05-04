import axios from "axios";

const axiosJsonP = axios.create({
	baseURL: "https://jsonplaceholder.typicode.com",
});

export { axiosJsonP };

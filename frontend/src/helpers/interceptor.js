import axios from "axios";

const mainAxios = "http://localhost:4001/api/v1"
export const IsBaseURL = () => {
    axios.defaults.baseURL = mainAxios;
};
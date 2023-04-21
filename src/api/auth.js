import axios from "axios";
import axiosInstance from "./axios.js";


const API_LOGIN = async (userCredentials) => {
    try {
        const resp = await axios.post('/login', userCredentials);
        return resp;
    } catch (err) {
        console.log(err)
        throw err
    }
}

const API_SIGNUP = async (userCredentials) => {
    try {
        const resp = await axios.post('http://localhost:5000/api/signup', userCredentials);
        return resp;
    } catch (err) {
        console.log(err)
        throw err
    }
}

export { API_LOGIN, API_SIGNUP };
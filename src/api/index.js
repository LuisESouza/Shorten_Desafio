import axios from "axios";

export const apiPost = async (url, urlShorten) => {
    try {
        const response = await axios.post(url, urlShorten);
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};
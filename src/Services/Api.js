import axios from "axios";

export async function getData(uri) {
    const apiUrl = process.env.REACT_APP_API_URL;

    return axios.get(apiUrl + uri);
}
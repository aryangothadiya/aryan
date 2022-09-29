const { default: axios } = require("axios");


const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
    timeout: 2000,
});

const sendRequest = (config) => {
    return axiosInstance.request(config)
}

export const getRequest = (Path) => {
    return sendRequest({
        url: Path,
        method: 'get',
    })
}


export const deleteRequest = (Path) => {
    return sendRequest({
        url: Path,
        method: 'delete',
    })
}
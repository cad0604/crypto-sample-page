import axios from 'axios';

const axiosClient = axios.create();

axiosClient.defaults.baseURL = process.env.REACT_APP_SERVER_BASE_URL;
axiosClient.defaults.timeout = 5000;
axiosClient.defaults.headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
};

// To share cookies to cross site domain, change to true.
axiosClient.defaults.withCredentials = false;

const setTokenHeader = () => {
    axiosClient.defaults.headers = {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'authorization': JSON.parse(localStorage.getItem("user")).accessToken,
    }
}

const setFormHeader = () => {
    axiosClient.defaults.headers = {
        'Content-Type': 'multipart/form-data',
        'authorization': JSON.parse(localStorage.getItem("user")).accessToken,
    }
}

export async function getCustomRequest(URL) {
    const response = await axios.get(`/${URL}`);
    return response;
}

export async function getRequestNoToken(URL, options = {}) {
    const response = await axiosClient.get(`/${URL}`, options);
    return response;
}

export async function getRequest(URL, options = {}) {
    setTokenHeader();
    const response = await axiosClient.get(`/${URL}`, options);
    return response;
}

export async function getFileDownload(URL) {
    console.log('response test', URL)
    const response = await axios.get(
        process.env.REACT_APP_SERVER_BASE_URL + `/${URL}`,
        {
            key: 'value',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                'authorization': JSON.parse(localStorage.getItem("user")).accessToken,
            },
            responseType: 'blob'
        });
    return response;
}

export async function postRequestNoToken(URL, payload, config = {}) {
    const response = await axiosClient
        .post(`/${URL}`, payload, config);
    return response;
}

export async function postRequest(URL, payload, config = {}) {
    setTokenHeader();
    const response = await axiosClient
        .post(`/${URL}`, payload, config);
    return response;
}
export async function postRequestWithForm(URL, payload, config = {}) {
    setFormHeader();
    const response = await axiosClient
        .post(`/${URL}`, payload, config);
    return response;
}

export async function putRequest(URL, payload) {
    setTokenHeader();
    const response = await axiosClient.put(`/${URL}`, payload);
    return response;
}

export async function putRequestWithForm(URL, payload) {
    setFormHeader();
    const response = await axiosClient.put(`/${URL}`, payload);
    return response;
}

export async function patchRequest(URL, payload) {
    setTokenHeader();
    const response = await axiosClient.patch(`/${URL}`, payload);
    return response;
}

export async function deleteRequest(URL) {
    setTokenHeader();
    const response = await axiosClient.delete(`/${URL}`);
    return response;
}

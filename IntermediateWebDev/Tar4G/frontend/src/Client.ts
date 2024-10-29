import axios from "axios";

const BASE_URL = 'http://localhost:8080/api/resources'

export const getAllTasks = () => axios.get(BASE_URL);

export const createResource = async (data) => {
    try {
        const response = await axios.post(BASE_URL, data);
        return response.data;
    } catch (error) {
        console.error('Error creating resource: ', error);
        throw error;
    }
};

export const deleteResource = (id) => axios.delete(BASE_URL + "/" + id);

export const getResourceById = (id) => axios.get(BASE_URL + "/" + id);


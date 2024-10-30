import axios from "axios";

const BASE_URL = 'http://localhost:8080/api/resources'

export const getAllTasks = () => axios.get(BASE_URL);

// @ts-ignore
export const createResource = async (data) => {
    try {
        const response = await axios.post(BASE_URL, data);
        return response.data;
    } catch (error) {
        console.error('Error creating resource: ', error);
        throw error;
    }
};

// @ts-ignore
export const deleteResource = (id) => axios.delete(BASE_URL + "/" + id);

// @ts-ignore
export const getResourceById = (id) => axios.get(BASE_URL + "/" + id);

// @ts-ignore
export const updateResource = (resource, id) => axios.put(BASE_URL + "/" + id, resource)
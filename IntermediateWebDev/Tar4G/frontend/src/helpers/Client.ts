import axios from "axios";
import {
    CreateResource,
    FetchResources,
    GetResourceById,
    UpdateResource,
    DeleteResource,
    GetResourceByDescriptionOrName
} from "./types.ts"

const BASE_URL = 'http://localhost:8080/api/resources'

export const fetchResources: FetchResources = async (keyword: string) => {
    if (keyword === '') {
        const response = await axios.get(BASE_URL);
        console.log(response)
        return response.data;
    } else {
        const response = await getResourceByNameOrDescription(keyword);
        return response;
    }
}

// export const fetchResources: FetchResources = async (keyword: string) => {
//     try {
//         if (keyword === '') {
//             const response = await axios.get(BASE_URL);
//             console.log("Fetched all resources:", response.data);
//             return response.data;
//         } else {
//             const resources = await getResourceByNameOrDescription(keyword);
//             console.log(`Fetched resources by keyword "${keyword}":`, resources);
//             return resources;
//         }
//     } catch (error: any) {
//         console.error(`Error fetching resources${keyword ? ` with keyword "${keyword}"` : ''}:`, error);
//         throw new Error(`Failed to fetch resources${keyword ? ` with keyword "${keyword}"` : ''}.`);
//     }
// };


export const getResourceByNameOrDescription: GetResourceByDescriptionOrName = async (keyword: string) => {
    try {
        const encodedKeyword = encodeURIComponent(keyword);
        const response = await axios.get(`${BASE_URL}/search?name=${encodedKeyword}&description=${encodedKeyword}`)
        if (response.data?.content) {
            console.log(response.data)
            console.log(response.data.content)
            return response.data.content;
        } else {
            console.warn('No content found in the response:', response.data)
            throw new Error('No content found in the response.');
        }
    } catch (err: any) {
        throw new Error(`Failed to fetch resource with keyword ${keyword}: ${err.message}`);
    }
}

export const createResource: CreateResource = async (data) => {
    try {
        const response = await axios.post(BASE_URL, data);
        return response.data;
    } catch (error) {
        console.error('Error creating resource: ', error);
        throw error;
    }
};

export const deleteResource: DeleteResource = async (id: number) => {
    try{
        await axios.delete(`/api/resources/${id}`);
    } catch (error) {
        console.error('Error deleting resource: ', error);
        throw error;
    }
}

export const getResourceById: GetResourceById = async (id) => {
    try{
        const response = await axios.get(`${BASE_URL}/${id}`);
        return response.data;
    } catch (err: any) {
        throw new Error(`Failed to fetch resource with id ${id}: ${err.message}`);
    }

}

export const updateResource: UpdateResource = async (id, updatedResource) => {
    try{
        const response = await axios.put(`${BASE_URL}/${id}`, updatedResource);
        return response.data;
    } catch (error) {
        console.error('Error updating resource: ', error)
    }
}
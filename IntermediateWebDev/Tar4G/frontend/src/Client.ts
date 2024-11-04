import axios, {AxiosResponse} from "axios";

const BASE_URL = 'http://localhost:8080/api/resources'

export type Resource = {
    id?: number,
    name: string,
    description: string,
    url: string,
    keywords: string
}

type CreateResource = (newResource: Resource) => Promise<Resource>;
type FetchResources = () => Promise<Resource[]>;
type GetResourceById = (id: number) => Promise<Resource>;
type DeleteResource = (id: number) => Promise<void>;
type UpdateResource = (id: number, updatedResource: Resource) => Promise<Resource>;

export const fetchResources: FetchResources = async () => {
    const response = await axios.get(BASE_URL);
    return response.data;
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
        await axios.delete(`${BASE_URL}/${id})`);
    } catch (error) {
        console.error('Error deleting resource: ', error);
        throw error;
    }
}

export const getResourceById: GetResourceById = async (id) => {
    const response = await axios.get(`${BASE_URL}/${id})`);
    return response.data;
}

// @ts-ignore
export const updateResource: UpdateResource = async (id, updatedResource) => {
    try{
        const response = await axios.put(`${BASE_URL}/${id})`, updatedResource);
        return response.data;
    } catch (error) {
        console.error('Error updating resource: ', error)
    }
}
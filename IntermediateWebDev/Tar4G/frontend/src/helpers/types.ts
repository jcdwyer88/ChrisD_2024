export type Resource = {
    id?: number,
    name: string,
    description: string,
    url: string,
}

export type CreateResource = (newResource: Resource) => Promise<Resource>;
export type FetchResources = (keyword: string) => Promise<Resource[]>;
export type GetResourceById = (id: number) => Promise<Resource>;
export type GetResourceByDescriptionOrName = (keyword: string) => Promise<Resource[]>;
export type DeleteResource = (id: number) => Promise<void>;
export type UpdateResource = (id: number, updatedResource: Resource) => Promise<Resource>;
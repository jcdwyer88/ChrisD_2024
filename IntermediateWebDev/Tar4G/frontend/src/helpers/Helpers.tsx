import { GridColDef } from '@mui/x-data-grid';
import { Typography, Box, IconButton } from "@mui/material";
import { EditOutlined, DeleteOutline } from "@mui/icons-material";
import { deleteResource, fetchResources, getResourceById } from "./Client.ts";
import { Resource } from "./types.ts";
import { NavigateFunction } from "react-router-dom";

// Constants
export const defaultPaginationModel = { page: 0, pageSize: 10 };

// Column definitions with actions
export const getColumnDefinitions = (
    updateResource: (id: number) => void,
    removeResource: (id: number) => void
): GridColDef[] => [
    {
        field: 'name', headerName: 'Name', headerClassName: 'header', flex: 1.5, minWidth: 180,
        renderCell: (params) => (
            <Typography sx={{ wordBreak: 'break-word', display: 'flex', alignItems: 'center', height: '100%' }}>
                {params.value}
            </Typography>
        )
    },
    {
        field: 'description', headerName: 'Description', headerClassName: 'header', flex: 3, minWidth: 250,
        renderCell: (params) => (
            <Typography sx={{ wordBreak: 'break-word', display: 'flex', alignItems: 'center', height: '100%' }}>
                {params.value}
            </Typography>
        )
    },
    {
        field: 'url', headerName: 'URL', headerClassName: 'header', flex: 3, minWidth: 180,
        renderCell: (params) => (
            <a
                href={params.value}
                target="_blank"
                rel="noopener noreferrer"
                style={{ wordBreak: 'break-word', textDecoration: 'none', color: 'white' }}
            >
                {params.value}
            </a>
        )
    },
    {
        field: 'actions', headerName: '', headerClassName: 'header', flex: 1,
        renderCell: (params) => (
            <Box sx={{ display: 'flex', height: '100%', justifyContent: 'center' }}>
                <IconButton onClick={() => updateResource(params.row.id)} color="warning" edge="end" aria-label="edit-button">
                    <EditOutlined />
                </IconButton>
                <IconButton onClick={() => removeResource(params.row.id)} color="error" edge="end" aria-label="delete-button">
                    <DeleteOutline />
                </IconButton>
            </Box>
        )
    },
];

// API functions
export const listResources = async (
    search: string,
    setResources: (resources: Resource[]) => void,
    setLoading: (loading: boolean) => void,
    setError: (error: string) => void
) => {
    setLoading(true);
    setError('');
    try {
        const data = await fetchResources(search);

        setResources(data);
    } catch (error) {
        setError("Failed to load resources.");
        console.error(error);
    } finally {
        setLoading(false);
    }
};

export const removeResource = async (
    id: number,
    listResources: () => void,
    setError: (error: string) => void
) => {
    const resource = await getResourceById(id);
    if (window.confirm(`Are you sure you want to delete the following resource: \n\n=> ${resource.name}`)) {
        try {
            await deleteResource(id);
            await listResources();
        } catch (error) {
            setError("Failed to delete resource.");
        }
    }
};

export const updateResource = (id: number, navigate: NavigateFunction) => {
    try {
        getResourceById(id);
        navigate(`/edit-resource/${id}`);
    } catch (error) {
        console.error(error);
    }
};

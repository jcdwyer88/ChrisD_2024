import {
    Alert,
    Button, CircularProgress, Grid2, IconButton,
    Paper
} from "@mui/material";
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import React, {useEffect, useState} from "react";
import {deleteResource, updateResource, fetchResources, Resource} from "../Client.ts";
import {NavLink, useNavigate} from "react-router-dom";
import axios from 'axios';
import {DeleteOutline, EditOutlined} from "@mui/icons-material";

export const List = () => {

    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', flex: 0 },
        { field: 'name', headerName: 'Name', flex: 2 },
        { field: 'description', headerName: 'Description', flex: 3 },
        { field: 'url', headerName: 'URL', flex: 2 },
        { field: 'keywords', headerName: 'Keywords', flex: 2 },
        { field: 'actions', headerName: 'Actions', flex: 1, renderCell: (params) => (
            <div>
                <IconButton
                    onClick={() => viewDetails(params.row.id)}
                    color="warning"
                    edge="end"
                    aria-label="edit-button">
                    <EditOutlined />
                </IconButton>
                <IconButton
                    onClick={() => {
                        removeResource(params.row.id).then(listAllResources)
                    }}
                    color="error"
                    edge="end"
                    aria-label="delete-button">
                    <DeleteOutline/>
                </IconButton>
            </div>
            )},
    ];

    const [resources, setResources] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const navigate = useNavigate();
    const paginationModel = { page: 0, pageSize: 10 };

    const listAllResources = async () => {
        setLoading(true);
        setError('');
        try {
            const response = await axios.get("/api/resources");
            setResources(response.data);
        } catch (error) {
            setError("Failed to load resources.");
            console.error(error);
        } finally {
            setLoading(false);
        }
        };

    useEffect(() => {
        listAllResources();
    }, [])

    const removeResource = async (id: any) => {
        try {
            await axios.delete(`/api/resources/${id}`); // Call your delete endpoint
            listAllResources(); // Refresh the list after deletion
        } catch (error) {
            setError("Failed to delete resource.");
            console.error(error);
        }
    };

    const viewDetails = (id: number) => {
        navigate(`/api/resources/${id}`)
    }

    return (

        <Paper elevation={18} sx={{ backgroundColor: 'transparent', height: 400, width: '100vw', pt: 4}}>
            {loading ? (
                <CircularProgress />
            ) : error ? (
                <Alert severity="error">{error}</Alert>
            ) : (
            <DataGrid
                rows={resources}
                columns={columns}
                initialState={{ pagination: { paginationModel } }}
                pageSizeOptions={[5, 10]}
                sx={{ border: 0 }}
            />
                )}
                 <Button component={NavLink} to="/add-resource" color="inherit" sx={{
                     textTransform: 'none'
                 }}> Add Resource </Button>
        </Paper>

    );
};


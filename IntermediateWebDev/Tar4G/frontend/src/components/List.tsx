import {
    Button,
    Paper
} from "@mui/material";
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import {useEffect, useState} from "react";
import {deleteResource, getAllTasks} from "../Client.ts";
import {NavLink, useNavigate} from "react-router-dom";
import axios from 'axios';

export const List = () => {

    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', flex: 0 },
        { field: 'name', headerName: 'Name', flex: 2 },
        { field: 'url', headerName: 'URL', flex: 2 },
        { field: 'description', headerName: 'Description', flex: 3 },
        { field: 'keywords', headerName: 'Keywords', flex: 2 },
        { field: 'actions', headerName: 'Actions', flex: 1, renderCell: (params) => (
            <div>
                <Button variant="outlined" onClick={() => {viewDetails(params.row.id)}}>
                    Edit
                </Button>
                <Button variant="outlined" color="error" onClick={() => {removeResource(params.row.id)}}>
                    Delete
                </Button>
            </div>
            )},
    ];

    const rows = [
        {
            id: 1,
            name: "resource 1",
            description: "Set up project structure 1",
            url: "resource1.com",
            keywords: "resource1 keyword1"
        },
        {
            id: 2,
            name: "resource 2",
            description: "Set up project structure 2",
            url: "resource2.com",
            keywords: "resource2 keyword2"
        },
        {
            id: 3,
            name: "resource 3",
            description: "Set up project structure 3",
            url: "resource3.com",
            keywords: "resource3 keyword3"
        },
    ]

    const paginationModel = { page: 0, pageSize: 10 };

    const navigate = useNavigate();
    const [resources, setResources] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const listAllResources = async () => {
        setLoading(true);
        setError('');
        try {
            const response = await axios.get("/api/resources"); // Fetch from your API
            setResources(response.data); // Update state with the fetched data
        } catch (error) {
            setError("Failed to load resources.");
            console.error(error);
        } finally {
            setLoading(false);
        }
        };

        // getAllTasks()
        //     .then((response) => {
        //         setResources(response.data);
        //     })
        //     .catch((error) => {
        //         console.error(error);
        //     });
        // };

    useEffect(() => {
        listAllResources();
    }, [])

    const removeResource = async (id) => {
        try {
            await axios.delete(`/api/resources/${id}`); // Call your delete endpoint
            listAllResources(); // Refresh the list after deletion
        } catch (error) {
            setError("Failed to delete resource.");
            console.error(error);
        }
    };

    //     deleteResource(id)
    //         .then(() => {
    //             listAllResources();
    //     })
    //     .catch((error) => {
    //         console.error(error);
    //     });
    // };

    // @ts-ignore
    const viewDetails = (id) => {
        console.log(id)
        navigate(`/edit-resource/${id}`)
    }

    return (

        <Paper elevation={18} sx={{ height: 400, width: '100vw', pt: 4}}>
            {loading ? (
                <CircularProgress />
            ) : error ? (
                <Alert severity="error">{error}</Alert>
            ) : (
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{ pagination: { paginationModel } }}
                pageSizeOptions={[5, 10]}
                checkboxSelection
                sx={{ border: 0 }}
            />
                )}
                 <Button component={NavLink} to="/add-resource" color="inherit" sx={{
                     textTransform: 'none'
                 }}> Add Resource </Button>
        </Paper>

    );
};


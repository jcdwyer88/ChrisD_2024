import {
    Box,
    Button,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography
} from "@mui/material";
import {useEffect, useState} from "react";
import {deleteResource, getAllTasks} from "../Client.ts";
import {NavLink} from "react-router-dom";

export const List = () => {
    // Example mock data for Task array
    const resources = [
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
    ];

    const [resource, setResource] = useState([]);

    const listAllResources = async () => {
        getAllTasks()
            .then((response) => {
                setResource(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    useEffect(() => {
        listAllResources();
    }, [])

    const removeResource = (id) => {
        deleteResource(id)
            .then(() => {
                listAllResources();
        })
        .catch((error) => {
            console.error(error);
        });
    };

    const viewDetails = (id) => {
        navigator(`/edit-resource/${id}`)
    }

    return (
        <div>
            <Box>
                {/* Title and Button Box */}
                <Box>
                    <Typography variant="h4" className="title">
                        Geospatial Tools and Resources
                    </Typography>
                </Box>

                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell>Description</TableCell>
                                <TableCell>URL</TableCell>
                                <TableCell>Keywords</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {resources.map((resource) => (
                                <TableRow key={resource.id} className="table-row">
                                    <TableCell>{resource.name}</TableCell>
                                    <TableCell>{resource.description}</TableCell>
                                    <TableCell>{resource.url}</TableCell>
                                    <TableCell>{resource.keywords}</TableCell>
                                    <TableCell>
                                        <Button onClick={() => viewDetails(resource.id)}>Edit</Button>
                                        <Button onClick={() => {removeResource(resource.id)}}>Delete</Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
            <Button component={NavLink} to="/add-resource" color="inherit" sx={{
                textTransform: 'none'
            }}> Add Resource </Button>
        </div>
    );
};


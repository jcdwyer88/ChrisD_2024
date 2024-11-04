import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {createResource, getResourceById, updateResource} from "../helpers/Client.ts"
import {Box, Button, Container, TextField, Typography} from "@mui/material";

export const ModifyDetails = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [url, setUrl] = useState('');
    const [keywords, setKeywords] = useState('');
    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>();

    const resourceId = id ? parseInt(id, 10) : undefined;
    // @ts-ignore
    const handleSubmit = async (e) => {
        e.preventDefault();

        const newResource = {name, description, url, keywords};
        try {
            if (resourceId) {
                await updateResource(resourceId, newResource);
                console.log('Resource update: ', newResource);
            } else {
                await createResource(newResource);
                console.log('Resource created: ', newResource)
            }
            navigate("/api/resources/");
        } catch (error) {
            console.error('Error saving resource: ', error);
        }
    };

    useEffect(() => {
        const fetchResource = async () => {
            if (resourceId) {
                try {
                    const response = await getResourceById(resourceId);
                    setName(response.name)
                    setDescription(response.description)
                    setUrl(response.url)
                    setKeywords(response.keywords)
                } catch (error) {
                    console.error('Error fetching resource: ', error)
                }
            }
        };
        fetchResource();
    }, [resourceId]);

    return (
        <Container>
            <Typography variant="h4" gutterBottom>{resourceId ? "Modify Resourse" : "Create Resource"}</Typography>

            <Box component="form" onSubmit={handleSubmit} sx={{display: 'flex', flexDirection: 'column', gap: 2}}>
                <TextField
                    label="Resource Name"
                    placeholder="What is the resource name..."
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <TextField
                    label="Resource Description"
                    placeholder="What is the resource description..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />
                <TextField
                    label="Resource URL"
                    placeholder="What is the resource URL..."
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    required
                />
                <TextField
                    label="Resource Keywords"
                    placeholder="What are some keywords for this resource..."
                    value={keywords}
                    onChange={(e) => setKeywords(e.target.value)}
                    required
                />

                <Button type="submit" variant="contained" color="primary" sx={{mt: 2}}>
                    Submit</Button>
            </Box>
        </Container>
    )
}
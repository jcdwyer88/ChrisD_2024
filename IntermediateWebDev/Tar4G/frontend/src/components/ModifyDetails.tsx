import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {createResource, getResourceById, updateResource} from "../Client.ts"
import {Box, Button, Container, TextField, Typography} from "@mui/material";

export const ModifyDetails = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [url, setUrl] = useState('');
    const [keywords, setKeywords] = useState('');
    const navigate = useNavigate();
    const {id} = useParams();

    // @ts-ignore
    const handleSubmit = async (e) => {
        e.preventDefault();

        const newResource = {name, description, url, keywords};

        if (id) {
            await updateResource(newResource, id)
                .then((res) => {
                    console.log(res.data)
                }).catch((err) => {
                    console.log(err)
            })
        } else {
            await createResource(newResource)
                .then((response) => {
                    console.log(response.data);
                })
                .catch((error) => {
                    console.error(error);
                })
        }
        navigate("/api/resources/")
    }

    useEffect(() => {
        if (id) {
            getResourceById(id).then((response) => {
                setName(response.data.name)
                setDescription(response.data.description)
                setUrl(response.data.url)
                setKeywords(response.data.keywords)
            }).catch((error) => {
                console.error(error)
            })
        }
    }, [id]);

    return (
        <Container>
            <Typography variant="h4" gutterBottom>Modify</Typography>

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

                <Button type="submit" variant="contained" color="primary" sx={{mt: 2}} onClick={handleSubmit}>
                    Submit</Button>
            </Box>
        </Container>
    )
}
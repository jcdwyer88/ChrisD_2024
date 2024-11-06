import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {createResource} from "../helpers/Client.ts"
import {Box, Button, Container, TextField, Typography} from "@mui/material";
import '../App.css'

export const NewResource = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [url, setUrl] = useState('');
    const [keywords, setKeywords] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const newResource = {name, description, url, keywords};

        try {
            await createResource(newResource);
            console.log('Resource created: ', newResource);
            navigate("/resources");
        } catch (error) {
            console.error('Error saving resource: ', error);
        }
    };

    return (
        <Container>
            <Typography variant="h4" gutterBottom>Create New Resource</Typography>

            <Box component="form" onSubmit={handleSubmit}
                 sx={{
                     display: 'flex',
                     flexDirection: 'column',
                     padding: 2,
                     borderRadius: 2,
                 }}>
                <Box className='form'
                     sx={{
                         display: 'flex',
                         flexDirection: 'column',
                         gap: 2,
                         padding: 2,
                         borderRadius: 2,
                         backgroundColor: 'palegoldenrod',
                         opacity: '80%'
                     }}>
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
                </Box>
                <Button type="submit" variant="contained" color="success" sx={{mt: 2, outlineColor: 'black'}}>
                    Submit</Button>
            </Box>
        </Container>
    )
}
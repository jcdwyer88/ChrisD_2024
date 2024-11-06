import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {getResourceById, updateResource} from "../helpers/Client.ts"
import {Box, Button, Container, Snackbar, TextField, Typography} from "@mui/material";

export const UpdateResource = () => {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [url, setUrl] = useState('');
    const [keywords, setKeywords] = useState('');
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const navigate = useNavigate();
    const {id} = useParams();

    const ID = id ? Number(id) : NaN;

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        const newResource = {name, description, url, keywords};
        try {
            await updateResource(ID, newResource);
            console.log('Resource update: ', newResource);
            navigate("/resources");
        } catch (error) {
            setErrorMessage("Error saving resource. Please try again.");
            console.error('Error saving resource: ', error);
        }
    };

    useEffect(() => {
        const fetchResource = async () => {
            if (ID) {
                try {
                    const response = await getResourceById(ID);
                    console.log(response)
                    setName(response.name)
                    setDescription(response.description)
                    setUrl(response.url)
                    setKeywords(response.keywords)
                    console.log({response})
                } catch (error) {
                    setErrorMessage("Error fetching resource");
                    console.error('Error fetching resource: ', error)
                }
            }
        };
        fetchResource();
    }, [id, ID]);

    return (
        <Container>
            <Typography variant="h4" gutterBottom>Modify Resource</Typography>

            {errorMessage && (
                <Snackbar
                    open={true}
                    message={errorMessage}
                    autoHideDuration={6000}
                    onClose={() => setErrorMessage(null)}
                />
            )}

            <Box className='form' onSubmit={handleSubmit}
                 sx={{display: 'flex', flexDirection: 'column', gap: 2, padding: 2, borderRadius: 2}}>
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
                        required>

                    </TextField>
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
            </Box>
        </Container>
    )
}
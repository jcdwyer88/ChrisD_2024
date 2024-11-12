import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {getResourceById, updateResource} from "../helpers/Client.ts"
import {Box, Button, CircularProgress, Container, Snackbar, TextField, Typography} from "@mui/material";
import {Resource} from "../helpers/types.ts";

export const UpdateResource = () => {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [url, setUrl] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const {id} = useParams();

    const ID = id ? Number(id) : NaN;

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        if (!name || !description || !url) {
            setErrorMessage('All fields are required.');
            return;
        }

        const newResource: Resource = {name, description, url};

        try {
            setLoading(true);
            const result = await updateResource(ID, newResource);
            console.log('Resource updated: ', result);
            window.alert(`Successfully updated: \n\n=> ${newResource.name}`)

            navigate("/resources");
        } catch (error: any) {
            setErrorMessage(error.message || "Error saving resource. Please try again.");
            console.error('Error saving resource: ', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const fetchResource = async () => {
            if (ID) {
                try {
                    setLoading(true);
                    const response = await getResourceById(ID);
                    setName(response.name)
                    setDescription(response.description)
                    setUrl(response.url)
                    console.log({response})
                } catch (error) {
                    setErrorMessage("Error fetching resource");
                    console.error('Error fetching resource: ', error)
                } finally {
                    setLoading(false);
                }
            }
        };
        fetchResource();
    }, [ID]);

    return (
        <Container>
            <Typography variant="h4" sx={{textAlign: 'center', textShadow: '2px 2px goldenrod', fontStyle: 'italic', fontWeight: 700, color: 'black', mt: 5}}> Modify Resource </Typography>


            {errorMessage && (
                <Snackbar
                    open={true}
                    message={errorMessage}
                    autoHideDuration={6000}
                    onClose={() => setErrorMessage('')}
                />
            )}

            <Box component='form' onSubmit={handleSubmit}
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
                        multiline
                    </TextField>
                    <TextField
                        label="Resource Description"
                        placeholder="What is the resource description..."
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                        multiline
                    />
                    <TextField
                        label="Resource URL"
                        placeholder="What is the resource URL..."
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        required
                    />
                </Box>
                <Box sx={{display: 'flex'}}>
                    <Button type="submit" variant="contained" color="success" sx={{display: 'flex', flexGrow: 1, margin: 1, outlineColor: 'black'}}>
                        {loading ? <CircularProgress size={24}/> : 'Submit'}
                    </Button>
                    <Button type="button" variant="contained" color="error" onClick={() => navigate('/resources')} sx={{display: 'flex', flexGrow: 1, margin: 1, outlineColor: 'black'}}>
                        {loading ? <CircularProgress size={24}/> : 'Cancel'}
                    </Button>
                </Box>
            </Box>
        </Container>
    )
}
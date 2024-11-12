import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {createResource} from "../helpers/Client.ts"
import {Box, Button, Container, TextField, Typography} from "@mui/material";
import '../App.css'

export const NewResource = () => {


    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [url, setUrl] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const newResource = {name, description, url};

        try {
            await createResource(newResource);
            console.log('Resource created: ', newResource);
            navigate("/resources");
        } catch (error) {
            console.error('Error saving resource: ', error);
        }
    };

    const handleReset = () => {
        setName('')
        setDescription('')
        setUrl('')
    };

    return (
        <Container>
            <Typography variant="h4" sx={{
                textAlign: 'center',
                textShadow: '2px 2px goldenrod',
                fontStyle: 'italic',
                fontWeight: 700,
                color: 'black',
                mt: 5
            }}> Create New Resource </Typography>


            <Box component="form" onSubmit={handleSubmit} onReset={handleReset}
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
                             opacity: '80%',
                             boxShadow: 2
                         }}>
                        <TextField
                            label="Resource Name"
                            placeholder="What is the resource name..."
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            multiline
                        />
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
                            multiline
                        />
                    </Box>
                <Box sx={{display: 'flex'}}>
                        <Button type="submit" variant="contained" color="success"
                                sx={{display: 'flex', flexGrow: 1, margin: 1, boxShadow: 2}}>
                            Submit</Button>
                        <Button type="reset" variant="contained" color="error"
                                sx={{display: 'flex', flexGrow: 1, margin: 1, boxShadow: 2}}>
                            Reset</Button>
                        <Button type="reset" variant="contained" color="primary" onClick={() => navigate('/resources')}
                                sx={{display: 'flex', flexGrow: 1, margin: 1, boxShadow: 2}}>
                            Cancel</Button>
                    </Box>
            </Box>
        </Container>
    );
}
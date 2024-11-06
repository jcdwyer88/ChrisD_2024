import {AppBar, Box, Button, Paper, Toolbar, Typography} from "@mui/material"
import {NavLink} from "react-router-dom";
import '../App.css'

export const Header = () => {
    return (
        <Box sx={{margin: 1, display: 'flex', justifyContent: 'center'}}>
            <Paper style={{ backgroundColor: 'transparent', width: '100vw', alignContent: 'center' }}>
                <AppBar position="sticky"
                        variant="elevation"
                        elevation={10}
                        sx={{ backgroundColor: 'palegoldenrod', opacity: '70%', borderRadius: 2}}>
                    <Toolbar variant="dense">
                        <Typography variant="h6" sx={{flexGrow: 1, fontStyle: 'italic', color: 'black'}}> Tools and Resources for the Geospatial Community </Typography>
                        <Box sx={{display: 'flex'}}>
                            <Button component={NavLink} to="/" sx={{
                                fontWeight: 700,
                                color: 'black',
                                '&:hover': {
                                    fontStyle: 'italic',
                                    color: 'darkgoldenrod',
                                    transform: 'scale(1.05)',
                                    transition: 'transform 0.5s ease',
                                }
                            }}> Home </Button>
                            <Button component={NavLink} to="/resources" sx={{
                                fontWeight: 700,
                                color: 'black',
                                '&:hover': {
                                    fontStyle: 'italic',
                                    color: 'darkgoldenrod',
                                    transform: 'scale(1.05)',
                                    transition: 'transform 0.5s ease',
                                }
                            }}> Resources </Button>
                        </Box>
                    </Toolbar>
                </AppBar>
            </Paper>
        </Box>
    )
}
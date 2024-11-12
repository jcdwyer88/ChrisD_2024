import {Box, Typography} from "@mui/material";

export const Home = () => {
    return (
        <Box sx={{margin: 1, display: 'flex', justifyContent: 'center'}}>
            <Box style={{backgroundColor: 'transparent', width: '100vw', alignContent: 'center'}}>
                <Typography variant="h4" sx={{textAlign: 'center', textShadow: '2px 2px goldenrod', fontStyle: 'italic', fontWeight: 700, color: 'black', mt: 8}}> Tools and Resources for the Geospatial Community </Typography>
                <Typography variant="h6" sx={{textAlign: 'center', textShadow: '2px 2px goldenrod', fontStyle: 'italic', color: 'black'}}> Your one stop location for tools and resources for the Geospatial community! </Typography>
            </Box>
        </Box>
    );
};

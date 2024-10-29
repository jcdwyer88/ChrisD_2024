import {AppBar, Box, Button, Toolbar, Typography} from "@mui/material"
import {NavLink} from "react-router-dom";

export const Header = () => {
    return (
        <Box sx={{ mb: 4}}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" sx={{ flexGrow: 1 }}> App Name </Typography>
                    <Box sx={{ display: 'flex' }}>
                        <Button component={NavLink} to="/" color="inherit" sx={{
                            textTransform: 'none' }}> Home </Button>
                        <Button component={NavLink} to="/resources" color="inherit" sx={{
                            textTransform: 'none' }}> Resources </Button>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    )
}
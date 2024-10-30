import {AppBar, Box, Button, Paper, Toolbar, Typography} from "@mui/material"
import {NavLink} from "react-router-dom";

export const Header = () => {
    return (
        <Box>
            <Paper>
                <AppBar position="sticky"
                        variant="elevation"
                        elevation={4}
                        sx={{borderRadius: 2, mt: 1}}>
                    <Toolbar variant="dense">
                        <Typography variant="h6" sx={{flexGrow: 1}}> App Name </Typography>
                        <Box sx={{display: 'flex'}}>
                            <Button component={NavLink} to="/" color="inherit" sx={{
                                textTransform: 'none'
                            }}> Home </Button>
                            <Button component={NavLink} to="/resources" color="inherit" sx={{
                                textTransform: 'none'
                            }}> Resources </Button>
                        </Box>
                    </Toolbar>
                </AppBar>
            </Paper>
        </Box>
    )
}
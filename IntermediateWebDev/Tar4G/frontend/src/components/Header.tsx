import {AppBar, Box, Button, Paper, Toolbar, Typography} from "@mui/material"
import {NavLink} from "react-router-dom";
import '../App.css'
import {Search, SearchIconWrapper, StyledInputBase} from "./ui/Theme.tsx";
import SearchIcon from "@mui/icons-material/Search";
import {useEffect, useState} from "react";
import {listResources} from "../helpers/Helpers.tsx";
import {Resource} from "../helpers/types.ts";

export const Header = () => {
    const [search, setSearch] = useState('');
    const [resources, setResources] = useState<Resource[]>([]);
    const [loading, setLoading] = useState(true);
    const [err, setErr] = useState('');
    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => setSearch(event.target.value);

    useEffect(() => { // New
        listResources(search, setResources, setLoading, setErr);
    }, [search]);

    return (
        <Box position='relative' zIndex='1' sx={{margin: 5, display: 'flex', justifyContent: 'center'}}>
            <Paper style={{ backgroundColor: 'transparent', width: '100vw', alignContent: 'center', margin: 1 }}>
                <AppBar variant="elevation"
                        elevation={10}
                        sx={{ backgroundColor: 'palegoldenrod', opacity: '90%', borderRadius: 2, mt: 1 }}>
                    <Toolbar variant="dense">
                        <Typography variant="h6" sx={{flexGrow: 1, fontStyle: 'italic', color: 'black'}}> TaR4G </Typography>
                        <Box sx={{display: 'flex'}}>
                            <Search sx={{ flexGrow: 1, mr: 2 }}>
                                <SearchIconWrapper>
                                    <SearchIcon />
                                </SearchIconWrapper>
                                <StyledInputBase
                                    value={search}
                                    onChange={handleSearchChange}
                                    placeholder="Search…"
                                    inputProps={{ 'aria-label': 'search' }}
                                />
                            </Search>
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
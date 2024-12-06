import {Alert, Box, Button, CircularProgress, Paper} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import {DataGrid} from '@mui/x-data-grid';
import {useEffect, useState} from "react";
import {NavLink, useNavigate} from "react-router-dom";

import {Resource} from "../helpers/types.ts";
import {Search, SearchIconWrapper, StyledInputBase, useStyles} from "./ui/Theme.tsx";
import { getColumnDefinitions, listResources, removeResource, updateResource, defaultPaginationModel } from "../helpers/Helpers.tsx";
import '../App.css';

export const List = () => {

    const classes = useStyles();
    const [resources, setResources] = useState<Resource[]>([]);
    const [loading, setLoading] = useState(true);
    const [err, setErr] = useState('');
    const [search, setSearch] = useState('');

    const navigate = useNavigate();
    const columns = getColumnDefinitions( // New
        (id) => updateResource(id, navigate),
        (id) => removeResource(id, () => listResources(search, setResources, setLoading, setErr), setErr)
    );

    useEffect(() => { // New
        listResources(search, setResources, setLoading, setErr);
    }, [search]);

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => setSearch(event.target.value);

    return (
        <Box id='resourceTable' sx={{ display: 'flex', width: '90vw', margin: 'auto', justifyContent: 'center' }}>
            <Paper elevation={12} className={classes.root} style={{ borderRadius: 2 }}>
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
                    <Button variant='contained' component={NavLink} to="/add-resource" sx={{
                        flexGrow: 0,
                        backgroundColor: 'palegoldenrod',
                        fontWeight: 700,
                        color: 'black',
                        '&:hover': {
                            fontStyle: 'italic',
                            color: 'darkgoldenrod',
                            transform: 'scale(1.05)',
                            transition: 'transform 0.5s ease',
                        }
                    }}> Add Resource </Button>
                </Box>
                {loading ? (
                    <CircularProgress />
                ) : err ? (
                    <Alert severity="error">{err}</Alert>
                ) : (
                    <DataGrid
                        rows={resources}
                        columns={columns}
                        getRowHeight={() => 'auto'}
                        initialState={{ pagination: { paginationModel: defaultPaginationModel } }}
                        pageSizeOptions={[10, 20, 50]}
                        disableRowSelectionOnClick
                        sx={{
                            backgroundColor: 'rgb(0, 0, 0, 0.5)',
                            color: 'white',
                            border: 'black',
                            padding: 1,
                            wordWrap: 'break-word',
                            whiteSpace: 'normal',
                        }}
                    />
                )}
            </Paper>
        </Box>
    );
};


import {
    Alert, Box,
    Button,
    CircularProgress,
    IconButton,
    Paper
} from "@mui/material";
import {DataGrid, GridColDef} from '@mui/x-data-grid';
import {useEffect, useState} from "react";
import {NavLink, useNavigate} from "react-router-dom";
import {DeleteOutline, EditOutlined} from "@mui/icons-material";
import {deleteResource, fetchResources, getResourceById} from "../helpers/Client.ts";
import {makeStyles} from "@material-ui/styles";
import '../App.css'
import {Resource} from "../types.ts";

const useStyles = makeStyles({
    root: {
        backgroundColor: 'transparent',
        color: 'black',
        height: '60vh',
        width: '97vw',
        pt: 2,
        '& .header': {
            backgroundColor: 'palegoldenrod',
            color: 'black'
        },
    },
});

export const List = () => {

    const columns: GridColDef[] = [
        {field: 'id', headerName: 'ID', headerClassName: 'header', flex: 0},
        {field: 'name', headerName: 'Name', headerClassName: 'header', flex: 2},
        {field: 'description', headerName: 'Description', headerClassName: 'header', flex: 3},
        {field: 'url', headerName: 'URL', headerClassName: 'header', flex: 2},
        {field: 'keywords', headerName: 'Keywords', headerClassName: 'header', flex: 2},
        {
            field: 'actions', headerName: 'Actions', headerClassName: 'header', flex: 1, renderCell: (params) => (
                <Box sx={{display: 'flex', justifyContent: 'center'}}>
                    <IconButton
                        onClick={() => updateResource(params.row.id)}
                        color="warning"
                        edge="end"
                        aria-label="edit-button">
                        <EditOutlined/>
                    </IconButton>
                    <IconButton
                        onClick={() => removeResource(params.row.id).then(fetchResources)}
                        color="error"
                        edge="end"
                        aria-label="delete-button">
                        <DeleteOutline/>
                    </IconButton>
                </Box>
            )
        },
    ];

    const classes = useStyles();
    const [resources, setResources] = useState<Resource[]>([]);
    const [loading, setLoading] = useState(true);
    const [err, setErr] = useState('');


    const navigate = useNavigate();
    const paginationModel = {page: 0, pageSize: 10};


    const listResources = async () => {
        setLoading(true);
        setErr('');
        try {
            const data = await fetchResources();
            setResources(data);
        } catch (error) {
            setErr("Failed to load resources.");
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        listResources();
    }, [])

    const removeResource = async (id: number) => {
        if (window.confirm("Are you sure you want to delete this resource?")) {
            try {
                await deleteResource(id);
                await listResources();
            } catch (error) {
                setErr("Failed to delete resource.");
            }
        }
    };

    const updateResource =  (id: number) => {
        try {
            const response = getResourceById(id);
            console.log(response);
            navigate(`/edit-resource/${id}`);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <Box sx={{display: 'flex', width: '100vw', margin: 'auto', justifyContent: 'center'}}>
            <Paper elevation={12} className={classes.root}>
                {loading ? (
                    <CircularProgress/>
                ) : err ? (
                    <Alert severity="error">{err}</Alert>
                ) : (
                    <DataGrid
                        rows={resources}
                        columns={columns}
                        initialState={{pagination: {paginationModel}}}
                        pageSizeOptions={[10, 20]}
                        disableRowSelectionOnClick
                        sx={{backgroundColor: 'rgb(0, 0, 0, 0.5)', color: 'white', border: 'transparent', borderRadius: 2}}
                    />
                )}
                <Button variant='contained' component={NavLink} to="/add-resource" sx={{
                    backgroundColor: 'palegoldenrod',
                    fontWeight: 700,
                    color: 'black',
                    marginTop: 2,
                    '&:hover': {
                        fontStyle: 'italic',
                        color: 'darkgoldenrod',
                        transform: 'scale(1.05)',
                        transition: 'transform 0.5s ease',
                    }
                }}> Add Resource </Button>
            </Paper>
        </Box>
    );
};


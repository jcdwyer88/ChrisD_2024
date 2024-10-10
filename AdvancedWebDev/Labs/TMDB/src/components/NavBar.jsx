import React from 'react';
import { AppBar, Toolbar, Typography, Button, InputBase } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    width: '100%',
  },
}));

const NavBar = ({ searchTerm, setSearchTerm }) => {
  const navigate = useNavigate();

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    if (event.key === 'Enter') {
      const currentSearchTerm = event.target.value; // Store current input value
      setSearchTerm(""); // Clear the search box after submission
      navigate('/results', { state: { searchTerm: currentSearchTerm } }); // Pass the search term to Results
    }
  };

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          TMDB
        </Typography>
        <Button color="inherit" onClick={() => navigate('/home')}>
          Home
        </Button>
        <Button color="inherit" onClick={() => navigate('/results')}>
          Now Playing
        </Button>
        <Search>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
            value={searchTerm}
            onChange={handleSearchChange}
            onKeyDown={handleSearchSubmit}
          />
        </Search>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;

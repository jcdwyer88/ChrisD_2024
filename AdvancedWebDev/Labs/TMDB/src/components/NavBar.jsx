import { Home } from './Home'
import { About } from './About'
import { Contact } from './Contact'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'
import * as React from 'react';
import { alpha, styled } from '@mui/material/styles';
import { Box, AppBar, Toolbar, Button, IconButton, Container, Divider, MenuItem, Drawer } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
// import Sitemark from './SitemarkIcon';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexShrink: 0,
  borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
//   backdropFilter: 'blur(24px)',
  border: '1px solid',
  borderColor: theme.palette.divider,
  backgroundColor: alpha(theme.palette.background.default, 0.4),
  boxShadow: theme.shadows[1],
  padding: '8px 12px',
}));

export default function AppAppBar() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };


//   <Router>
//   <div className='App'>
//     <div className="container">
//       <ul>
//         <li><Link to="/home">Home</Link></li>
//         <li><Link to="/about">About</Link></li>
//         <li><Link to="/contact">Contact</Link></li>
//       </ul>
//       <hr />
//     </div>
//     <div className="container">
//       <Routes>
//         <Route path="/home" element={<Home/>} />
//         <Route path="/about" element={<About/>} />
//         <Route path="/contact" element={<Contact/>} />
//       </Routes>
//     </div>
//   </div>
// </Router>

  return (
    <AppBar
      position="fixed"
      sx={{ boxShadow: 0, bgcolor: 'transparent', backgroundImage: 'none', mt: 10 }}
    >
      <Container maxWidth="lg">
        <StyledToolbar variant="dense" disableGutters>
            <Router>
                <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', px: 0 }}>
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                    <Button variant="text" color="info" size="small">
                        <Link to="/home">Home</Link>
                    </Button>
                    <Button variant="text" color="info" size="small">
                        <Link to="/about">About</Link>
                    </Button>
                    <Button variant="text" color="info" size="small">
                        <Link to="/contact">Contact</Link>
                    </Button>
                    </Box>
                </Box> 
                <Routes>
                    <Route path="/home" element={<Home/>} />
                    <Route path="/about" element={<About/>} />
                    <Route path="/contact" element={<Contact/>} />
                </Routes>
            </Router>
          <Box sx={{ display: { sm: 'flex', md: 'none' } }}>
            <IconButton aria-label="Menu button" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Drawer anchor="top" open={open} onClose={toggleDrawer(false)}>
              <Box sx={{ p: 2, backgroundColor: 'background.default' }}>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <IconButton onClick={toggleDrawer(false)}>
                    <CloseRoundedIcon />
                  </IconButton>
                </Box>
                <Divider sx={{ my: 3 }} />
              </Box>
            </Drawer>
          </Box>
        </StyledToolbar>
      </Container>
    </AppBar>
  );
}

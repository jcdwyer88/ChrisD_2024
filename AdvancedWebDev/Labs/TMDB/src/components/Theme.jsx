// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import { deepOrange, lightGreen } from '@mui/material/colors';

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: lightGreen[200],
//     },
//     secondary: {
//       main: deepOrange[900],
//     },
//   },
// });

// const Theme = ({ children }) => (
//     <ThemeProvider theme={theme}>{children}</ThemeProvider>
// );

// export default Theme;

// Theme.jsx


import { createTheme } from "@mui/material/styles";

// Create a custom theme
const Theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Customize primary color
    },
    secondary: {
      main: '#f4f6f8', // Customize secondary color
    },
    background: {
      default: '#f4f6f8', // Default background color
    },
    text: {
      primary: '#000000', // Primary text color
      secondary: '#dc004e', // Secondary text color
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif', // Customize font family
    h6: {
      fontWeight: 600, // Customize h6 font weight
    },
    body1: {
      fontSize: '1rem', // Customize body1 font size
    },
  },
  spacing: 8, // Set the base spacing
});

export default Theme;
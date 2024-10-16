import { createTheme } from "@mui/material/styles";

const Theme = createTheme({
  palette: {
    primary: {
      main: '#ffa500', 
    },
    secondary: {
      main: '#f4f6f8', 
    },
    background: {
      default: '#f4f6f8', 
    },
    text: {
      primary: '#000000', 
      secondary: '#dc004e', 
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif', 
    h6: {
      fontWeight: 600, 
    },
    body1: {
      fontSize: '1rem', 
    },
  },
  spacing: 8, 
});

export default Theme;
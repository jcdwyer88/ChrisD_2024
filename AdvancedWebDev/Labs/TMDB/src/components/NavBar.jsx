import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  styled,
  alpha,
  Button,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  zIndex: "theme.zIndex.drawer + 1",
}));

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.text.primary, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.text.secondary, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    width: "100%",
  },
}));

function NavBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const theme = useTheme();

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    if (event.key === "Enter") {
      const currentSearchTerm = event.target.value;
      setSearchTerm("");
      navigate("/results", { state: { searchTerm: currentSearchTerm } });
    }
  };

  return (
    <StyledAppBar
      position="sticky"
      sx={{ borderRadius: "10px", boxShadow: "0px 4px 10px #000000" }}
    >
      <Toolbar>
        <Typography
          variant="h6"
          edge="start"
          sx={{ marginInlineEnd: 5, color: theme.palette.text.primary, fontFamily: "fantasy" }}
        >
          TMDB
        </Typography>
        <Button
          color="inherit"
          onClick={() => navigate("/home")}
          aria-label="Go to Home"
        >
          Home
        </Button>
        <Button
          color="inherit"
          onClick={() => navigate("/results")}
          aria-label="View Now Playing"
        >
          Now Playing
        </Button>
        <div style={{ flexGrow: 1 }} />
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
            value={searchTerm}
            onChange={handleSearchChange}
            onKeyDown={handleSearchSubmit}
          />
        </Search>
      </Toolbar>
    </StyledAppBar>
  );
}

export default NavBar;
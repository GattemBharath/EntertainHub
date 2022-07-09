import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";

import WhatshotIcon from "@material-ui/icons/Whatshot";
import MovieIcon from "@material-ui/icons/Movie";
import TvIcon from "@material-ui/icons/Tv";
import SearchIcon from "@material-ui/icons/Search";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    width: "100%",
    position: "fixed",
    bottom: "0",
    backgroundColor: "#000",
    // backgroundImage:
    //   ' linear-gradient("225deg", "#ff3cac 0%", "#784ba0 50%", "#2b86c5 100%")',
    zIndex: 100,
    fontFamily: "Poppins",
  },
});

const theme = createTheme({
  typography: {
    fontFamily: ["Poppins"].join(","),
    // fontSize: "12px".join(","),
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    if (value === 0) {
      navigate("/");
    } else if (value === 1) {
      navigate("/movies");
    } else if (value === 2) {
      navigate("/series");
    } else if (value === 3) {
      navigate("/search");
    }
  }, [value, navigate]);

  return (
    <ThemeProvider theme={theme}>
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction
          style={{
            color: "#ad6ee6",
            fontFamily: "Poppins",
          }}
          label="Trending"
          icon={<WhatshotIcon />}
        />
        <BottomNavigationAction
          label="Movies"
          style={{
            color: "#ad6ee6",
            fontFamily: "Poppins",
          }}
          icon={<MovieIcon />}
        />
        <BottomNavigationAction
          style={{ color: "#ad6ee6", fontFamily: "Poppins" }}
          label="TV Series"
          icon={<TvIcon />}
        />
        <BottomNavigationAction
          style={{ color: "#ad6ee6", fontFamily: "Poppins" }}
          label="Search"
          icon={<SearchIcon />}
        />
      </BottomNavigation>
    </ThemeProvider>
  );
}

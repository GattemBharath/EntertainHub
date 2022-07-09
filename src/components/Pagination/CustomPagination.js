import { createTheme, ThemeProvider } from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";
import React from "react";
import "./custompagination.css";
import { purple } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";

const darkTheme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
  },
});

const useStyles = makeStyles(() => ({
  ul: {
    "& .MuiPaginationItem-root": {
      color: "#090d5c",
    },
  },
}));

const CustomPagination = ({ setPage, numOfPages = 10 }) => {
  const classes = useStyles();
  const handlePageChange = (page) => {
    setPage(page);
    window.scroll(0, 0);
  };

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        marginTop: 10,
      }}
    >
      <ThemeProvider theme={darkTheme}>
        <Pagination
          classes={{ ul: classes.ul }}
          count={numOfPages}
          onChange={(e) => handlePageChange(e.target.textContent)}
          hideNextButton
          hidePrevButton
          color="primary"
        />
      </ThemeProvider>
    </div>
  );
};

export default CustomPagination;

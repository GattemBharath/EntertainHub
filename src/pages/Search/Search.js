import {
  Button,
  createTheme,
  makeStyles,
  Tab,
  Tabs,
  TextField,
  ThemeProvider,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { deepOrange } from "@material-ui/core/colors";
import SearchIcon from "@material-ui/icons/Search";
import axios from "axios";
import SingleContent from "../../components/SingleContent/SingleContent";
import CustomPagination from "../../components/Pagination/CustomPagination";

// const useStyles = makeStyles(() => ({
//   ul: {
//     "& ..MuiTextField-root": {
//       backgroundColor: "green",
//     },
//   },
// }));
const Search = () => {
  // const classes = useStyles();
  const [type, setType] = useState(0);
  const [page, setPage] = useState(1);
  const [searchText, setSearchText] = useState("");
  const [content, setContent] = useState();
  const [numOfPages, setNumOfPages] = React.useState();

  // const darkTheme = createTheme({
  //   palette: {
  //     type: "light",
  //     primary: {
  //       main: deepOrange[500],
  //     },
  //   },
  // });

  const fetchSearch = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/search/${type ? "tv" : "movie"}?api_key=${
        process.env.REACT_APP_API_KEY
      }&language=en-US&query=${searchText}&page=${page}&include_adult=false`
    );
    setContent(data.results);
    setNumOfPages(data.total_pages);
  };

  useEffect(() => {
    window.scroll(0, 0);
    fetchSearch();
  }, [type, page]);

  return (
    <div>
      <ThemeProvider>
        <div style={{ display: "flex", margin: "15px 0" }}>
          <TextField
            style={{
              flex: 1,
              fontFamily: "Poppins",
              // backgroundColor: " #2b86c5",
              border: "none",
              outline: "none",
            }}
            className="searchBox"
            label="Search"
            variant="outlined"
            onChange={(e) => setSearchText(e.target.value)}
          />
          <Button
            variant="contained"
            style={{
              marginLeft: 10,
              background: "pink",
              padding: "8px 15px",
            }}
            onClick={fetchSearch}
          >
            <SearchIcon />
          </Button>
        </div>

        <Tabs
          value={type}
          indicatorColor="primary"
          textColor="primary"
          onChange={(e, newValue) => {
            setType(newValue);
            setPage(1);
          }}
          style={{ paddingBottom: 5 }}
        >
          <Tab style={{ width: "50%" }} label="Search Movies"></Tab>
          <Tab style={{ width: "50%" }} label="Search TV Series"></Tab>
        </Tabs>
      </ThemeProvider>
      <div className="trending">
        {content &&
          content.map((c) => {
            return (
              <SingleContent
                key={c.id}
                id={c.id}
                poster={c.poster_path}
                title={c.title || c.name}
                date={c.first_air_date || c.release_date}
                media_type={type ? "tv" : "movie"}
                vote_average={c.vote_average}
              />
            );
          })}
        {searchText &&
          !content &&
          (type ? <h2>No Series Found</h2> : <h2>No Movies Found</h2>)}
      </div>
      {numOfPages > 1 && (
        <CustomPagination setPage={setPage} numOfPages={numOfPages} />
      )}
    </div>
  );
};

export default Search;

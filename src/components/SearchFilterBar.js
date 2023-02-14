import Grid from "@mui/material/Grid";
import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

const SearchFilterBar = (props) => {
  const [selectedRegion, setSelectedRegion] = useState("select");
  const [search, setSearch] = useState("");

  const handleChange = (val) => {
    props.fetchByRegion(val);
    setSelectedRegion(val);
    setSearch("");
  };

  const handleSearch = (val) => {
    props.searchByCountry(val);
    setSearch(val);
    setSelectedRegion("select");
  };

  return (
    <Grid
      container
      spacing={4}
      marginTop={2}
      marginBottom={3}
      direction="row"
      display="flex"
      justifyContent="space-between"
    >
      <Grid item>
        <FormControl
          sx={{
            boxShadow: "1",
            // maxWith: "350px",
            minWidth: "330px",
            backgroundColor: "background.paper",
          }}
        >
          <TextField
            id="Search"
            placeholder="Search for a country..."
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            onChange={(e) => handleSearch(e.target.value)}
            value={search}
            aria-describedby="search bar"
            sx={{
              border: 0,
              outline: 0,
            }}
          />
        </FormControl>
      </Grid>
      <Grid item>
        <FormControl
          sx={{
            boxShadow: "1",
            maxWidth: "300px",
            minWidth: "220px",
            backgroundColor: "background.paper",
            border: "none",
            "&:focus": {
              outline: "none",
              border: "none",
            },
          }}
        >
          <Select
            labelId="regionSelect"
            id="regionSelect"
            onChange={(e) => handleChange(e.target.value)}
            onBlur={(e) => handleChange(e.target.value)}
            defaultValue="select"
            value={selectedRegion}
          >
            <MenuItem value="select" disabled>
              Filter By Region
            </MenuItem>
            <MenuItem value="africa">Africa</MenuItem>
            <MenuItem value="americas">America</MenuItem>
            <MenuItem value="asia">Asia</MenuItem>
            <MenuItem value="europe">Europe</MenuItem>
            <MenuItem value="oceania">Oceania</MenuItem>
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  );
};

export default SearchFilterBar;

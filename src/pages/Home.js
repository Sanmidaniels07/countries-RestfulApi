import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import CountryCard from "../components/utils/CountryCard";
import SearchFilterBar from "../components/SearchFilterBar";
import CircularProgress from "@mui/material/CircularProgress";

const Home = (props) => {
  const countries = props.countries;

  return (
    <Box paddingBottom={5}>
      <Container maxWidth="lg">
        <SearchFilterBar
          fetchByRegion={props.fetchByRegion}
          searchByCountry={props.searchByCountry}
        />
        {props.isPending ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              height: "60vh",
              alignItems: "center",
            }}
          >
            <CircularProgress />
          </Box>
        ) : (
          <Grid
            container
            spacing={5}
            display="flex"
            justifyContent="flex-start"
          >
            {countries.map((country, index) => (
              <CountryCard
                key={index}
                countryName={country.name.common}
                population={country.population}
                region={country.region}
                capital={country.capital}
                flag={country.flags.svg}
              />
            ))}
          </Grid>
        )}
      </Container>
    </Box>
  );
};

export default Home;

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Link, useParams, useNavigate } from "react-router-dom";
import PreviousButton from "../components/utils/PreviousButton";
import CircularProgress from "@mui/material/CircularProgress";
import { useEffect, useState, useRef } from "react";
import axios from "axios";

const Details = (props) => {
  const [country, setCountry] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [borderCountries, setBorderCountries] = useState(null);

  const url = "https://restcountries.com/v3.1";

  const params = useParams();
  const search = useRef(params.country);

  let navigate = useNavigate();

  const redirectUser = (page) => {
    navigate(`/${page}`);
    setIsPending(true);

    (async () => {
      try {
        const response = await axios.get(`${url}/name/${page}?fullText=true`);
        setIsPending(false);
        setCountry(response.data[0]);
        getCountryNameUsingCode(response.data[0].borders);
      } catch (error) {
        console.error(error);
      }
    })();
  };

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(
          `${url}/name/${search.current}?fullText=true`
        );
        setIsPending(false);
        setCountry(response.data[0]);
        getCountryNameUsingCode(response.data[0].borders);
      } catch (error) {
        console.error(error);
      }
    })();
    return () => {
      setIsPending(true);
    };
  }, []);

  const getCountryNameUsingCode = async (countries) => {
    let countryNames = [];

    try {
      const response = await axios.get(
        `${url}/alpha?codes=${countries.join(",")}`
      );

      response.data.forEach((country) => {
        countryNames.push(country.name.common);
      });
    } catch (error) {
      console.error(error);
    }

    setBorderCountries(countryNames);
  };

  return (
    <Box fontSize="16px" paddingBottom={5}>
      <Container>
        <Box marginY={3} paddingY={5}>
          <Link to="/" style={{ textDecoration: "none" }}>
            <PreviousButton />
          </Link>
        </Box>
        {isPending ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              height: "40vh",
              alignItems: "center",
            }}
          >
            <CircularProgress />
          </Box>
        ) : (
          <Grid
            container
            spacing={5}
            direction="row"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Grid item md={6} xs={12}>
              <Box className="img-wrapper">
                <img
                  src={country.flags.svg}
                  alt="country flag"
                  height={350}
                  width="90%"
                  className="detail-img"
                ></img>
              </Box>
            </Grid>
            <Grid item md={6} xs={12}>
              <Box paddingBottom={4}>
                <Typography variant="h4" component="h3" fontWeight={800}>
                  {country.name.common}
                </Typography>
              </Box>
              <Grid container spacing={4}>
                <Grid item sm={6} xs={12}>
                  <Box display="flex" alignItems="center" paddingY={0.7}>
                    <Typography
                      variant="subtitle1"
                      color="text.primary"
                      gutterBottom
                      component="h5"
                      fontWeight={800}
                      lineHeight={1}
                    >
                      Native Name:
                    </Typography>
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      gutterBottom
                      component="p"
                      marginLeft={0.3}
                      lineHeight={1}
                    >
                      {country.altSpellings[2]}
                    </Typography>
                  </Box>
                  <Box display="flex" alignItems="center" paddingY={0.7}>
                    <Typography
                      variant="subtitle1"
                      color="text.primary"
                      gutterBottom
                      component="h5"
                      fontWeight={800}
                      lineHeight={1}
                    >
                      Population:
                    </Typography>
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      gutterBottom
                      component="p"
                      marginLeft={0.3}
                      lineHeight={1}
                    >
                      {country.population.toLocaleString()}
                    </Typography>
                  </Box>
                  <Box display="flex" alignItems="center" paddingY={0.7}>
                    <Typography
                      variant="subtitle1"
                      color="text.primary"
                      gutterBottom
                      component="h5"
                      fontWeight={800}
                      lineHeight={1}
                    >
                      Region:
                    </Typography>
                    <Typography
                      variant="body1"
                      lineHeight={1}
                      color="text.secondary"
                      gutterBottom
                      component="p"
                      marginLeft={0.3}
                    >
                      {country.region}
                    </Typography>
                  </Box>
                  <Box display="flex" alignItems="center" paddingY={0.7}>
                    <Typography
                      variant="subtitle1"
                      color="text.primary"
                      gutterBottom
                      component="h5"
                      fontWeight={800}
                      lineHeight={1}
                    >
                      Sub Region:
                    </Typography>
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      gutterBottom
                      component="p"
                      marginLeft={0.3}
                      lineHeight={1}
                    >
                      {country.subregion}
                    </Typography>
                  </Box>
                  <Box display="flex" alignItems="center" paddingY={0.7}>
                    <Typography
                      variant="subtitle1"
                      color="text.primary"
                      gutterBottom
                      component="h5"
                      fontWeight={800}
                      lineHeight={1}
                    >
                      Capital:
                    </Typography>
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      gutterBottom
                      component="p"
                      marginLeft={0.3}
                      lineHeight={1}
                    >
                      {country.capital}
                    </Typography>
                  </Box>
                </Grid>
                <Grid item sm={6} xs={12}>
                  <Box
                    display="flex"
                    alignItems="center"
                    paddingY={0}
                    lineHeight={1}
                  >
                    <Typography
                      variant="subtitle1"
                      color="text.primary"
                      gutterBottom
                      component="h5"
                      fontWeight={800}
                      lineHeight={1}
                    >
                      Top Level Domain:
                    </Typography>
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      gutterBottom
                      component="p"
                      marginLeft={0.3}
                    >
                      {country.tld}
                    </Typography>
                  </Box>
                  <Box display="flex" alignItems="center" paddingY={0.5}>
                    <Typography
                      variant="subtitle1"
                      color="text.primary"
                      gutterBottom
                      component="h5"
                      fontWeight={800}
                      lineHeight={1}
                    >
                      Currencies:
                    </Typography>
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      gutterBottom
                      component="p"
                      marginLeft={0.3}
                      lineHeight={1}
                    >
                      {Object.keys(country.currencies)[0]}
                    </Typography>
                  </Box>
                  <Box display="flex" alignItems="baseline" paddingY={0.5}>
                    <Typography
                      variant="subtitle1"
                      color="text.primary"
                      gutterBottom
                      component="h5"
                      fontWeight={800}
                      lineHeight={1}
                    >
                      Language:
                    </Typography>
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      gutterBottom
                      component="p"
                      marginLeft={0.3}
                      lineHeight={1}
                    >
                      {Object.values(country.languages).sort().join(", ")}
                    </Typography>
                  </Box>
                </Grid>
              </Grid>

              <Grid container spacing={1} paddingTop={4}>
                <Grid item sm={4} xs={12}>
                  <Box display="flex" alignItems="center">
                    <Typography
                      variant="subtitle1"
                      color="text.primary"
                      component="h5"
                      fontWeight={800}
                      marginRight={0.5}
                    >
                      Border Countries:
                    </Typography>
                  </Box>
                </Grid>
                <Grid item sm={8} xs={12}>
                  <Box display="flex" alignItems="center" flexWrap="wrap">
                    {borderCountries?.map((border, index) => (
                      <Box
                        margin={0.3}
                        paddingX={1.5}
                        boxShadow={1}
                        key={index}
                        sx={{ cursor: "pointer" }}
                        onClick={() => redirectUser(border)}
                      >
                        <Typography variant="caption">{border}</Typography>
                      </Box>
                    ))}
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        )}
      </Container>
    </Box>
  );
};

export default Details;

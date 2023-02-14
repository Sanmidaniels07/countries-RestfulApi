import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import DarkModeIcon from "@mui/icons-material/NightsStayOutlined";
import { ColorModeContext } from "../context/ThemeContext";
import { useContext } from "react";

const darkImageStyle = {
  fontWeight: 600,
  marginLeft: "0.3em",
};

const Header = (props) => {
  const colorMode = useContext(ColorModeContext);

  return (
    <Box
      sx={{ py: "1em", boxShadow: "2", backgroundColor: "background.paper" }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={2}
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item>
            <h3>Where in the World?</h3>
          </Grid>
          <Grid
            item
            onClick={colorMode.toggleColorMode}
            sx={{ cursor: "pointer" }}
          >
            <Box display="flex">
              <p>
                <DarkModeIcon fontSize="small" />
              </p>
              <h4 style={darkImageStyle}>Dark Mode</h4>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Header;

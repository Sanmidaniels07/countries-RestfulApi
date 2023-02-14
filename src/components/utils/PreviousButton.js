import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
const PreviousButton = (props) => {
  return (
    <>
      <Button
        sx={{
          // backgroundColor: "#fff",
          color: "hsl(200, 15%, 8%)",
          backgroundColor: "background.paper",
          boxShadow: "4",
          "&:hover": {
            backgroundColor: "background.paper",
          },
        }}
      >
        <Box paddingX={2} display="flex">
          <KeyboardBackspaceIcon color="action" />
          <Typography
            variant="subtitle2"
            color="text.primary"
            component="p"
            paddingLeft={0.5}
          >
            Back
          </Typography>
        </Box>
      </Button>
    </>
  );
};

export default PreviousButton;

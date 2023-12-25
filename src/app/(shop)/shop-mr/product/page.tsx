import { Box } from "@mui/material";
import BreadCrums from "./components/breadCrums";

const Product = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          background: "red",
        }}
      >
        <BreadCrums />
        <BreadCrums />
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ bgcolor: "red", width: "60%" }}>dsa</Box>
        <Box
          sx={{
            bgcolor: "blue",
            width: "40%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ bgcolor: "brown", width: "85%" }}>dss</Box>
          <Box sx={{ bgcolor: "blusky", width: "15%" }}>ds</Box>
        </Box>
      </Box>
    </>
  );
};

export default Product;

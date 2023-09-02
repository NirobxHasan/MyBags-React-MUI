import { Box, Container, ThemeProvider, Typography } from "@mui/material";
// import { ThemeProvider } from "@mui/system";
import { useEffect } from "react";
import Appbar from "./components/appbar";
import Banner from "./components/banner";
import Products from "./components/products";
import Promotions from "./components/promotions";
import theme from "./styles/theme";

function App() {
  useEffect(() => {
    document.title = "React Material UI- Home";
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xl">
        <Appbar />
        <Banner />
        <Promotions />
        <Box display="flex" justifyContent="center" sx={{ p: 4 }}>
          <Typography variant="h4">Our Products</Typography>
        </Box>
        <Products />
      </Container>
    </ThemeProvider>
  );
}

export default App;

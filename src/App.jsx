import { Button, Container, ThemeProvider } from "@mui/material";
// import { ThemeProvider } from "@mui/system";
import { useEffect } from "react";
import Appbar from "./components/appbar";
import Banner from "./components/banner";
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
        <Button variant="contained">Hello</Button>
      </Container>
    </ThemeProvider>
  );
}

export default App;

import { Box, Container, Stack, ThemeProvider, createTheme } from "@mui/material";
import React, { useState } from "react";
import Menubar from "./Components/MenuBar";
import Content from "./Components/Content";
import Rightbar from "./Components/Rightbar";
import Nav from "./Components/Nav";

function App() {
  const[theme, setTheme] =useState('dark');
  const darktheme=createTheme({
    palette:{
      mode:theme
    }
  })
  return (
    <ThemeProvider theme={darktheme}>
    <Box bgcolor={"background.default"}  color={"text.primary"}>
      <Nav />
      <Container maxWidth="xxl">
        <Stack direction="row" spacing={2} justifyContent={"space-between"}>
          <Menubar />
          <Content />
          <Rightbar />
        </Stack>
      </Container>
    </Box>
    </ThemeProvider>
  );
}

export default App;

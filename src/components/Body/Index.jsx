import React from "react";
import Typical from 'react-typical';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';

const theme = createTheme();

const typing = () => {
  return (
      <Typical
        loop={Infinity}
        steps={[
          'O uso inteligente de dados para transformar a saúde da Júlia.',
          1000,
          'O uso inteligente de dados para transformar a saúde do Antonio.',
          1000,
          'O uso inteligente de dados para transformar a saúde do Brasil.',
          1000,
        ]}
      />
  )
}

function Body () {
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth='70%'>
        <CssBaseline />
        <Box
          sx={{
            marginTop: '0.5rem',
            mx: '0.3125rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            maxWidth: '70%'
          }}
        >
          <Typography component="h1" fontSize="520%">
            {typing()}
          </Typography>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Body;
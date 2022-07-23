import React, { useEffect } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

function Header () {
  const screenWidth = () => window.screen.width;

  useEffect(() => {
    screenWidth();
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background: '#FFF', color: 'black' }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            React Typist APP
          </Typography>
          { screenWidth() < 1440
           ? <MenuIcon /> :
            <>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Quem Somos
              </Typography>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Transparência
              </Typography>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Notícias
              </Typography>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Trabalhe conosco
              </Typography>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Quero doar
              </Typography>
            </>}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
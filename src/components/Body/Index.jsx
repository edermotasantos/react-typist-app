import React from "react";
import Typical from 'react-typical';
import Typography from '@mui/material/Typography'; 

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
    <Typography variant="h1" component="h2" mt={1}>
      {typing()}
    </Typography>
  );
};

export default Body;
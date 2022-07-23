import React from "react";
import Typical from 'react-typical';

function Body () {
  return (
    <p>
      O uso inteligente de dados para transformar a saúde pública
      <Typical
        loop={Infinity}
        steps={[
          'da Júlia',
          1000,
          'do Antonio',
          1000,
          'do Brasil',
          1000,
        ]}
      />
    </p>
  );
};

export default Body;
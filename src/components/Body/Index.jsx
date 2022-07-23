import React from "react";
import Typical from 'react-typical';

function Body () {
  return (
    <p>
      O uso inteligente de dados para transformar
      <Typical
        loop={Infinity}
        steps={[
          'a saúde da Júlia.',
          1000,
          'a saúde do Antonio.',
          1000,
          'a saúde do Brasil.',
          1000,
        ]}
      />
    </p>
  );
};

export default Body;
import React from "react";
import Typical from 'react-typical';
import './Body.css';

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
    <div className="conteinerHeader">
      <div className="tituloHeader">
        {typing()}
      </div>
    </div>
  );
};

export default Body;
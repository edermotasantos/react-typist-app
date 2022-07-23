import React from "react";
import Body from "../components/Body/Index";
import Header from "../components/Header/Index";
import Provider from '../context/Provider';

function Home () {
  return (
    <Provider>
      <Header />
      <Body />
    </Provider>
  );
}

export default Home;

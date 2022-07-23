/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-constructed-context-values */
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Context from './Context';

function Provider({ children }) {
  const [suffix, setSuffix] = useState(['da Júlia', 'do Antonio', 'do Brasil']);
  const [currSuffix, setCurrSuffix] = useState();
  const [currChar, setCurrChar] = useState();

  const data = {
    suffix,
    setSuffix,
    currSuffix,
    setCurrSuffix,
    currChar,
    setCurrChar,
  };

  return (
    <Context.Provider value={data}>
      { children }
    </Context.Provider>
  );
}

Context.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;

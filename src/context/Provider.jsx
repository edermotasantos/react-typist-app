/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-constructed-context-values */
import PropTypes from 'prop-types';
import React from 'react';
import Context from './Context';

function Provider({ children }) {

  const data = {};

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

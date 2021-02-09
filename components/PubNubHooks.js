import React, { createContext, useEffect } from 'react';

const PubNubContext = createContext();

export const usePubNub = () => {
  const context = React.useContext(PubNubContext);
  if (context === undefined) {
    throw new Error('`usePubNub` hook must be used within a `PubNubContextProvider` component');
  }
  return context;
};

export const PubNubContextProvider = (props) => {
  const { children } = props;
  return (
    <PubNubContext.Provider value={ {} }>
      {children}
    </PubNubContext.Provider>
  );
};
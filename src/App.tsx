import React from 'react';
import { DeckProvider } from './Context/DeckContext';
import { NameProvider } from './Context/NameContext';
import Router from './routes';

function App() {
  return (
    <NameProvider>
    <DeckProvider>
      <Router></Router>
      </DeckProvider>
      </NameProvider>
  );
}

export default App;
